import { useToast } from "dga-ui";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../shared/service/api";
import { ListVideoRequest, Video } from "../../shared/types/Video";
import { useAuth } from "../useAuth";



interface YouTubeContextData {
    getVideos: () => void,
    getChannelById: (channelId: string) => Promise<ListVideoRequest | undefined>
    videos: Video[];

}

const YouTubeContext = createContext<YouTubeContextData>({} as YouTubeContextData);

const YouTubeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [requestInfo, setRequestInfor] = useState<ListVideoRequest>()
    const [videos, setVideos] = useState<Video[]>([] as Video[])

    const { accessToken } = useAuth()
    const { addToast } = useToast()

    const getChannelById = useCallback(async (channelId: string) => {
        try {

            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
            const response = await api.get<ListVideoRequest>('channels', {
                headers,
                params: {
                    key: 'AIzaSyBYd3N1AjZdvUxfZM7SYaQM_0E1frk67gs',
                    id: channelId,
                    part: 'snippet'
                }
            });
            return response.data
        } catch {
            addToast({
                message: 'Erro ao carregar os videos',
                type: 'error'
            })
        }
    }, []);

    const getVideos = useCallback(async () => {
        try {
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
            const response = await api.get<ListVideoRequest>('videos', {
                headers,
                params: {
                    key: 'AIzaSyBYd3N1AjZdvUxfZM7SYaQM_0E1frk67gs',
                    chart: 'mostPopular',
                    region: 'BR',
                    part: 'snippet,contentDetails,statistics'
                }
            });
            setRequestInfor(response.data)
            setVideos(response.data.items)
        } catch {
            addToast({
                message: 'Erro ao carregar os videos',
                type: 'error'
            })
        }

    }, [accessToken])

    return <YouTubeContext.Provider value={{ getVideos, getChannelById, videos }} >{children}</YouTubeContext.Provider>
}



function useYouTube(): YouTubeContextData {
    const context = useContext(YouTubeContext);

    if (!context) {
        throw new Error("useYouTube must be used within a YouTubeContext");
    }

    return context;
}

export { YouTubeContextProvider, useYouTube };
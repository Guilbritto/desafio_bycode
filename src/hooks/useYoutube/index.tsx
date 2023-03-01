import { useToast } from "dga-ui";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { KEYS } from "../../shared/constants";
import { api } from "../../shared/service/api";
import { ListVideoRequest, Video } from "../../shared/types/Video";
import { useAuth } from "../useAuth";



interface YouTubeContextData {
    getVideos: () => void,
    getChannelById: (channelId: string) => Promise<ListVideoRequest | undefined>
    search: (seatchTerm: string) => void;
    videos: Video[];
    videoHistory: Video[];
    historyTerm: string[];

}

const YouTubeContext = createContext<YouTubeContextData>({} as YouTubeContextData);

const YouTubeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [videos, setVideos] = useState<Video[]>([] as Video[])
    const [historyTerm, setHistoryTerm] = useState<string[]>([''])
    const [videoHistory, setvideoHistory] = useState<Video[]>([] as Video[])
    const { accessToken } = useAuth()
    const { addToast } = useToast()

    useEffect(() => {
        const history = localStorage.getItem('@desafio_history')
        history && setHistoryTerm(JSON.parse(history));
        const historyVideo = localStorage.getItem('@desafio_history_video')
        historyVideo && setvideoHistory(JSON.parse(historyVideo));

    }, [])

    const getChannelById = useCallback(async (channelId: string) => {
        try {
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
            const response = await api.get<ListVideoRequest>('channels', {
                headers,
                params: {
                    key: KEYS.YT_API_KEY,
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

    const search = useCallback(async (searchTerm: string) => {
        try {
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
            const response = await api.get<ListVideoRequest>('search', {
                headers,
                params: {
                    key: KEYS.YT_API_KEY,
                    q:searchTerm,
                    maxResults: 25,
                    part: 'snippet'
                }
            });
            setHistoryTerm(old => {
                const curr = [...old, searchTerm];
                localStorage.setItem('@desafio_history', JSON.stringify(curr));
                return curr
            })
            setVideos(response.data.items)
        } catch {
          
        }
    }, [])

    const getVideos = useCallback(async () => {
        try {
            const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
            const response = await api.get<ListVideoRequest>('videos', {
                headers,
                params: {
                    key: KEYS.YT_API_KEY,
                    chart: 'mostPopular',
                    region: 'BR',
                    part: 'snippet,contentDetails,statistics'
                }
            });
            setVideos(response.data.items)
        } catch {
            addToast({
                message: 'Erro ao carregar os videos',
                type: 'error'
            })
        }

    }, [accessToken])

    return <YouTubeContext.Provider value={{ 
        getVideos, 
        getChannelById, 
        search,
        videoHistory,
        historyTerm,
        videos }} >{children}</YouTubeContext.Provider>
}



function useYouTube(): YouTubeContextData {
    const context = useContext(YouTubeContext);

    if (!context) {
        throw new Error("useYouTube must be used within a YouTubeContext");
    }

    return context;
}

export { YouTubeContextProvider, useYouTube };
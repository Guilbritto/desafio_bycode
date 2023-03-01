import { Divider } from 'dga-ui';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import {  useParams } from 'react-router-dom';
import CardVideo from '../../components/CardVideo';
import { useYouTube } from '../../hooks/useYoutube';

import { PageContainer, VideoContainer, VideoInfo, VideoDescription, RelatedVideosContainer} from './styles'

const Watch: React.FC = () => {
    let { id } = useParams();
    const {getVideosById, getChannelById, getRelatedVideos, currentVideo, relatedVideos} = useYouTube();
    const [channelImg, setChannelImg] = useState('')

    
    useEffect(() => {
        if(Object.keys(currentVideo).length === 0){
            getVideosById(id||'');
        }
    }, [])

    useEffect(() => {
        if(currentVideo){
            getChannelById(currentVideo?.snippet?.channelId).then(resolve => {
                setChannelImg(resolve?.items[0].snippet.thumbnails.default.url || '')
            })
            getRelatedVideos(id || '')
        }
    },[getChannelById])

    return (
        <PageContainer>
            <VideoContainer>
                <ReactPlayer
                    height={500}
                    width='auto'
                    url={`https://www.youtube.com/watch?v=${id}`} />
                 
                <VideoInfo>
                    <img src={channelImg} alt="" />
                    <div>
                        <p>{currentVideo?.snippet?.title}</p>
                        <small>{currentVideo?.statistics?.viewCount} vizualizações</small>
                    </div>
                </VideoInfo>
                <VideoDescription>
                    {currentVideo.snippet?.description}
                </VideoDescription>
            </VideoContainer>
            <Divider />
            <p> Related Videos</p>
            <RelatedVideosContainer>
                {relatedVideos?.map(v => (
                    <CardVideo key={v.etag} video={v} />
                ))}
            </RelatedVideosContainer>
            
        </PageContainer>
    )
}

export default Watch;
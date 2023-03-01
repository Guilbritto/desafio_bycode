import { Video } from '../../shared/types/Video';
import { CardContainer, CardContent } from './styles';
import ReactPlayer from 'react-player'
import { useEffect, useRef, useState } from 'react';
import { useYouTube } from '../../hooks/useYoutube';

interface CardVideoProps {
    video: Video
}

const CardVideo = ({ video }: CardVideoProps) => {
    const [playing, setPlaying] = useState(false);
    const [channelImg, setChannelImg] = useState('')
    const { getChannelById } = useYouTube();

    let timeout: number;

    useEffect(() => {
        getChannelById(video.snippet.channelId).then(resolve => {
            setChannelImg(resolve?.items[0].snippet.thumbnails.default.url || '')
        })
    }, [])
    const handleHover = () => {
        timeout = setTimeout(() => setPlaying(true), 2000)
    }

    const handleBlur = () => {
        clearTimeout(timeout);
        setPlaying(false);
    }
    
    return (
        <CardContainer to={`watch/${video.id}`} onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleBlur()}>
            <ReactPlayer
                playing={playing}
                width='auto'
                light
                height={170}
                url={`https://www.youtube.com/watch?v=${video.id}`} />

            <CardContent>
                <img src={channelImg} alt="" />
                <div>
                    <p>{video.snippet.title}</p>
                </div>
            </CardContent>
        </CardContainer>
    );
}

export default CardVideo;
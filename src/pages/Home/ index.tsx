import { useEffect } from 'react';
import { useYouTube } from '../../hooks/useYoutube';
import { HomeContainer } from './styles';
import ReactPlayer from 'react-player'
import CardVideo from '../../components/CardVideo';
const Home = () => {
    const { getVideos, videos } = useYouTube()


    useEffect(() => {
        getVideos()
    }, [getVideos])

    return (
        <HomeContainer>
            {videos.map(v => (
                <CardVideo key={v.id} video={v} />
            ))}
        </HomeContainer>
    );
}

export default Home;
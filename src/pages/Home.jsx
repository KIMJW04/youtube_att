import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';

const Home = () => {
    const [Asia, setAsia] = useState([]);
    const [Europe, setEurope] = useState([]);
    const [NorthAmerica, setNorthAmerica] = useState([]);
    const [SouthAmerica, setSouthAmerica] = useState([]);
    const [Africa, setAfrica] = useState([]);
    const [Oceania, setOceania] = useState([]);
    const [WorldWar, setWorldWar] = useState([]);

    useEffect(() => {
        const fetchVideosByRegion = async (region, setVideos) => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${region}+history&order=date&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY2}`);
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideosByRegion('아시아역사', setAsia);
        fetchVideosByRegion('유럽역사', setEurope);
        fetchVideosByRegion('북아메리카역사', setNorthAmerica);
        fetchVideosByRegion('남아메리카역사', setSouthAmerica);
        fetchVideosByRegion('아프리카역사', setAfrica);
        fetchVideosByRegion('오세아니아역사', setOceania);
        fetchVideosByRegion('세계대전', setWorldWar);
    }, []);

    return (
        <Main
            title="각 대륙별 역사를 다루는 사이트"
            description="각 대륙별 역사를 다루는 사이트입니다.">
            <VideoSlider videos={Asia} id="AsiaCont" title="아시아" />
            <VideoSlider videos={Europe} id="EuropeCont" title="유럽" />
            <VideoSlider videos={NorthAmerica} id="NorthAmericaCont" title="북아메리카" />
            <VideoSlider videos={SouthAmerica} id="SouthAmericaCont" title="남아메리카" />
            <VideoSlider videos={Africa} id="AfricaCont" title="아프리카" />
            <VideoSlider videos={Oceania} id="OceaniaCont" title="오세아니아" />
            <VideoSlider videos={WorldWar} id="WorldWarCont" title="세계대전" />
        </Main>
    );
}

export default Home;

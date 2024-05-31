import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchID}&order=date&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();
                setVideos(data.items);
                setNextPageToken(data.nextPageToken);
                // console.log(data);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchVideos();
    }, [searchID]);

    const loadMoreVideos = async (event) => {
        event.preventDefault(); // Prevent default button behavior
        if (nextPageToken) {
            const nextVideo = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchID}&order=date&pageToken=${nextPageToken}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
            const nextVideoData = await nextVideo.json();
            console.log(nextVideoData);
            setVideos((prevVideos) => [...prevVideos, ...nextVideoData.items]);
            setNextPageToken(nextVideoData.nextPageToken); // Correctly set nextPageToken
            console.log(nextVideoData.nextPageToken);
        }
    };

    return (
        <Main
            title={`어트랙션 검색 : ${searchID}`}
            description={`어트랙션 서치 페이지입니다. - 검색 키워드 : ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id="searchPage" className="fade-in">
                    <h2>
                        🙉<em>{searchID}</em>를 검색한 결과입니다.
                    </h2>
                    <div className="video__inner">
                        <VideoView videos={videos} />
                    </div>
                    <div className="video_more">
                        {nextPageToken && (
                            <button onClick={loadMoreVideos}>더보기</button>
                        )}
                    </div>
                </section>
            )}
        </Main>
    );
};

export default SearchPage;

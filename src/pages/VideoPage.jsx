import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const VideoPage = () => {
    const { videoID } = useParams();
    const [videoDatail, setvideoDetail] = useState(null);
    const [videoCommentDatail, setvideoCommentDatail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();
                setvideoDetail(data.items[0]);
                // console.log(data);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideo();
        const fetchVideoComment = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();
                setvideoCommentDatail(data.items);
                console.log(data);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideoComment();
    }, [videoID])
    return (
        <Main
            title="비디오 상세 페이지"
            description="비디오 상세 페이지입니다."
        >            {loading ? (
            <Loading />
        ) : <section id='videoViewPage'>
            {videoDatail && (
                <div className="video__view">
                    <div className='video__play'>
                        <div className="video__repl">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoID}`}
                                width='100%'
                                height='80vh'
                                style={{ poasition: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className="video__comment">
                            <h3>COMMENT</h3>
                            {videoCommentDatail.map((comment, index) => (
                                <div key={index} className="comment">
                                    <span className='username'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                                    <li><p dangerouslySetInnerHTML={{ __html: comment.snippet.topLevelComment.snippet.textDisplay }}></p></li>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='video__info'>
                        <h2 className='title'>{videoDatail.snippet.title}</h2>
                        <div className='channel'>
                            <div>
                                <Link to={`/channel/${videoDatail.snippet.channelId}`} className='channelTitle'>{videoDatail.snippet.channelTitle}</Link>
                            </div>
                            <div>
                                <span className='view'><CiRead />{videoDatail.statistics.viewCount}</span>
                                <span className='like'><CiStar />{videoDatail.statistics.likeCount}</span>
                                <span className='comment'><CiChat1 />{videoDatail.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="video__desc">
                        {videoDatail.snippet.description}
                    </div>
                </div>
            )}
        </section>
            }
        </Main>
    )
}

export default VideoPage

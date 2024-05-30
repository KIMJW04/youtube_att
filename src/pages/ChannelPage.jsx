import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'
import Loading from '../components/section/Loading';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const ChannelPage = () => {
    const { channelID } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setnextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const detail = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics&id=${channelID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const detaildata = await detail.json();
                setChannelDetail(detaildata.items[0]);
                console.log(detaildata);

                const video = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&order=date&maxResults=48&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const videoData = await video.json();
                setChannelVideo(videoData.items);
                // console.log(videoData);

                // 최소 로딩 소스 1초 유지
                // setTimeout(() => {
                //     setLoading(false);
                // }, 1000)
            } catch (error) {
                console.log(error);
                // setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelID]);
    return (
        <Main
            title='채널 상세 페이지'
            description='채널 상세 페이지입니다.'
        >
            <section id='channelPage'>
                {channelDetail && (
                    <div className='channel__innner'>
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default ChannelPage

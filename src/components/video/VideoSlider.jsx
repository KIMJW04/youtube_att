import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const VideoSlider = ({ videos, id, title }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className='video' >
                            <div className="video__thumb play__icon">
                                <Link
                                    to={`/video/${video.id.videoId}`}
                                    style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                                </Link>
                            </div>
                            <div className="video__info">
                                <div className='title'>
                                    <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                </div>
                                <div className='author'>
                                    <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                                </div>
                            </div>
                        </div >
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default VideoSlider;

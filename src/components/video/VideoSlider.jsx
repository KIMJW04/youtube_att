import React from 'react';
import { Navigation, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoSlider = ({ videos, id, title }) => {
    if (!videos || videos.length === 0) {
        return <p>비디오를 불러오는 중입니다...</p>;
    }

    return (
        <section id={id} className='slider__wrap'>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation, A11y, Autoplay, Mousewheel]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                mousewheel={true}
                speed={500} // 슬라이드 전환 속도를 줄여 매끄럽게
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index} className='video__slider'>
                        <div className='video' key={index} >
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

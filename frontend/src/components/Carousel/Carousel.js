
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    return (
        <Swiper
            effect={'flip'}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
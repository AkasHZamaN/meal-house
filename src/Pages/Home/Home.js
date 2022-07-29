import React from 'react';
import Banner from './Banner';
import HomeMeal from './HomeMeal';
import SwiperCarousel from './SwiperCarousel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SwiperCarousel></SwiperCarousel>
            <HomeMeal></HomeMeal>
            
        </div>
    );
};

export default Home;
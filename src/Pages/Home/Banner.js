import React from 'react';
import banner from '../../images/Banner.png';

const Banner = () => {
    return (
        <div>
            <img className='w-100 h-56 mx-auto rounded-2xl mt-2' src={banner} alt="" />
        </div>
    );
};

export default Banner;
import React from 'react';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-accent text-center text-white p-6'>
            <div>
                <img className='mx-auto' src="" alt="" />
                <p className='w-2/4 mx-auto'><small>A good restaurant sets a high standard for its food quality and ensures that guests receive the same quality with every meal. Serving quality food can earn your restaurant a good reputation and compel your guests to return for repeat visits.</small></p>
            </div>
            <div className='flex justify-center my-6 gap-4'>
                <img className='w-6 h-6' src={facebook} alt="" />
                <img className='w-6 h-6' src={github} alt="" />
                <img className='w-6 h-6' src={linkedin} alt="" />
            </div>
            <hr className='bg-blue-700 opacity-30 w-4/5 mx-auto' />
            <small className='text-center font-bold mt-6'>© All rights reserve by <span className='text-slate-700'> AKASH</span></small>
        </div>
    );
};

export default Footer;
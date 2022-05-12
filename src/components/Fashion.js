import React from 'react';
import fashion from '../Images/fashion-banner.png'
import fashion1 from '../Images/fashion-1.jpg'
import fashion2 from '../Images/fashion-2.jpg'
import fashion3 from '../Images/fashion-3.jpg'
import fashion4 from '../Images/fashion-4.jpg'

const Fashion = () => {
    return (
        <div className=' space-y-3 h-screen flex justify-center items-center flex-col' style={{ backgroundColor: "#5A5B5C" }}>
            <div className=' mt-20'>
                <h2 className=' text-7xl border-b-4'>FASHION ATELIER</h2>
            </div>
            <div className=' mt-10'> 
                <img className=' w-3/4 mx-auto' src={fashion} alt="" />
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-8 py-10'>
                <img className=' hover:scale-125 hover:duration-300 hover:opacity-50  rounded-full h-40' src={fashion1} alt="" />
                <img className=' hover:scale-125 hover:duration-300 rounded-full hover:opacity-50  h-40' src={fashion2} alt="" />
                <img className=' hover:scale-125 hover:duration-300 rounded-full hover:opacity-50  h-40' src={fashion3} alt="" />
                <img className=' hover:scale-125 hover:duration-300 rounded-full hover:opacity-50  h-40' src={fashion4} alt="" />
            </div>
        </div>
    );
};

export default Fashion;
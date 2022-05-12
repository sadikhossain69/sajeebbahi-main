import React from 'react';
import fashion from '../Images/fashion-banner.png'

const Fashion = () => {
    return (
        <div className=' h-screen flex justify-center items-center' style={{ backgroundColor: "#5A5B5C" }}>
            <img src={fashion} alt="" />
        </div>
    );
};

export default Fashion;
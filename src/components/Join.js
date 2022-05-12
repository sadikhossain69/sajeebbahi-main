import React from 'react';
import image from '../Images/Glasses.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby } from '@fortawesome/free-solid-svg-icons'


const Join = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C" }} className="pb-32">
            <div className="flex border border-dashed border-2 w-1/2 mx-auto justify-around py-32">
                <div>
                    <p className="text-center text-6xl">JOIN OUR <br /> DISCORD</p>
                    <a className="flex justify-center text-3xl mt-4 border py-2 px-2 mr-12" href="#">DISCORD &nbsp;  <FontAwesomeIcon icon={faBaby} /></a>
                </div>
                <div style={{ backgroundImage: `url(${""})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat'}}>
                    
                </div>
            </div>
        </div>
    );
};

export default Join;
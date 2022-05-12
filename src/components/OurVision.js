import React from 'react';
import { Fade } from 'react-reveal';
import glass from '../Images/Glasses.png'
import verticleLine from '../Images/Vertical-Lines.png'

const OurVision = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C" }} className=" pt-36 pb-32">
            <Fade>
                <div className="w-3/5 mx-auto p-12" style={{ backgroundImage: `url(${verticleLine})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', backgroundSize: '2% 100%' }}>
                    <div style={{ backgroundImage: `url(${glass})`, backgroundSize: 'cover', backgroundPosition: 'center right', backgroundSize: '55% 110%', backgroundRepeat: 'no-repeat' }} className="h-100">
                        <p className="text-5xl w-1/2">Our Vision</p>
                        <p className="text-xl w-96 mt-3.5">Internet made is both a brand
                            and movement bringing artisits,
                            creators and fashion desingers
                            together to use technology to
                            express themeselves in a new way</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default OurVision;
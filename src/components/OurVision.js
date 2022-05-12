import React from 'react';
import glass from '../Images/Glasses.png'
import verticleLine from '../Images/Vertical-Lines.png'

const OurVision = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C" }} class="pt-36 pb-32">
            <div class="w-3/5 mx-auto p-12" style={{ backgroundImage: `url(${verticleLine})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', backgroundSize: '2% 100%' }}>
                <div style={{ backgroundImage: `url(${glass})`, backgroundSize: 'cover', backgroundPosition: 'center right', backgroundSize: '55% 110%', backgroundRepeat: 'no-repeat' }} class="h-100">
                    <p class="text-5xl w-1/2">Our Vision</p>
                    <p class="text-xl w-96 mt-3.5">Internet made is both a brand
                        and movement bringing artisits,
                        creators and fashion desingers
                        together to use technology to
                        express themeselves in a new way</p>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
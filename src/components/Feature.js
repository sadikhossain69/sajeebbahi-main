import React from 'react';

const Feature = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C"}} className="pb-24">
            <div className="w-1/2 m-auto text-center py-12">
                <p className="text-2xl">FEATURED IN</p>
                <div className="mt-8">
                    <a className="text-4xl mx-7 hover:text-gray-500" href="#">
                        Entrepreneur
                    </a>
                    <a className="text-4xl mx-7 hover:text-gray-500" href="#">
                        Forbes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Feature;
import React from 'react';

const Feature = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C"}} class="pb-24">
            <div class="w-1/2 m-auto text-center py-12">
                <p class="text-2xl">FEATURED IN</p>
                <div class="mt-8">
                    <a class="text-4xl mx-7 hover:text-gray-500" href="#">
                        Entrepreneur
                    </a>
                    <a class="text-4xl mx-7 hover:text-gray-500" href="#">
                        Forbes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Feature;
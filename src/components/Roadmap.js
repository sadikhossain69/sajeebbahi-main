import React from 'react';
import { BiLockAlt } from 'react-icons/bi'

const Roadmap = () => {
    return (
        <div className=' h-screen py-14' style={{ backgroundColor: "#5A5B5C" }}>
            <h2 className=' text-center uppercase text-9xl'>Roadmap</h2>
            <div className=' flex justify-center space-x-5'>
                <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                    <p className=' text-slate-400 text-2xl'>Q2</p>
                    <p className=' text-4xl'>PHYGITAL</p>
                    <div className=' mt-28 flex justify-start space-x-3 items-center'>
                        <p><BiLockAlt/></p>
                        <p className=' text-xl'>LOCKED CONTENT</p>
                    </div>
                </div>
                <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                    <p className=' text-slate-400 text-2xl'>Q2</p>
                    <p className=' text-4xl'>DEVELOPING ECOSYSTEM</p>
                    <div className=' mt-16 flex justify-start space-x-3 items-center'>
                        <p><BiLockAlt/></p>
                        <p className=' text-xl'>LOCKED CONTENT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
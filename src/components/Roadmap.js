import React from 'react';
import { BiLockAlt } from 'react-icons/bi'
import { Fade, Flip } from 'react-reveal';

const Roadmap = () => {
    return (
        <div className='py-14' style={{ backgroundColor: "#5A5B5C" }}>
            <h2 className=' text-center uppercase text-9xl'>Roadmap</h2>
            <div className=''>
                <div className=' flex justify-center space-x-5'>
                    <Fade left>
                        <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                            <p className=' text-slate-400 text-2xl'>Q2</p>
                            <p className='font-bold text-4xl'>PHYGITAL</p>
                            <div className=' mt-28 flex justify-start space-x-3 items-center'>
                                <p><BiLockAlt /></p>
                                <p className=' text-xl'>LOCKED CONTENT</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                            <p className=' text-slate-400 text-2xl'>Q2</p>
                            <p className='font-bold text-4xl'>DEVELOPING ECOSYSTEM</p>
                            <div className=' mt-16 flex justify-start space-x-3 items-center'>
                                <p><BiLockAlt /></p>
                                <p className=' text-xl'>LOCKED CONTENT</p>
                            </div>
                        </div>
                    </Fade>
                </div>


                <Flip bottom>
                    <div style={{ width: '58.5%', }} className='hover:bg-slate-600 hover:duration-300 border mt-3 mx-auto h-64'>
                        <div className=' space-y-24 p-5'>
                            <div>
                                <p className=' text-slate-400 text-2xl'>Q3</p>
                                <p className=' font-bold text-4xl'>COMMUNITY</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <BiLockAlt />
                                <p className=' text-xl'>LOCKED CONTENT</p>
                            </div>
                        </div>
                    </div>
                </Flip>


                <div className=' mt-3 flex justify-center space-x-5'>
                    <Fade left>
                        <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                            <p className=' text-slate-400 text-2xl'>Q2</p>
                            <p className='font-bold text-4xl'>PHYGITAL</p>
                            <div className=' mt-28 flex justify-start space-x-3 items-center'>
                                <p><BiLockAlt /></p>
                                <p className=' text-xl'>LOCKED CONTENT</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className=' hover:bg-slate-600 hover:duration-300 border w-96 h-64 p-5'>
                            <p className=' text-slate-400 text-2xl'>Q2</p>
                            <p className='font-bold text-4xl'>DEVELOPING ECOSYSTEM</p>
                            <div className=' mt-16 flex justify-start space-x-3 items-center'>
                                <p><BiLockAlt /></p>
                                <p className=' text-xl'>LOCKED CONTENT</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
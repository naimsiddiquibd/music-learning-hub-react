import React from 'react';
import Button from '../Layout/Button';

const Instructors = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-white text-4xl'>Meet the <span className='text-[#B63FA1]'>Instructors</span></h2>
            <div className="carousel carousel-center  rounded-box max-w-full space-x-4 mt-5">
                <div className="carousel-item">
                    <div className="card bg-base-100 w-64 shadow-xl">
                        <figure>
                            <img
                            className='w-full'
                                src="/man.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body bg-white gap-0 p-5">
                            <h2 className="card-title text-lg font-normal text-[#030B1C]">Johnatan Doe</h2>
                            <h2 className="card-title text-xs font-normal text-[#030B1C]">Guitar Specialist</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-64 shadow-xl">
                        <figure>
                            <img
                            className='w-full'
                                src="/man.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body bg-white gap-0 p-5">
                            <h2 className="card-title text-lg font-normal text-[#030B1C]">Johnatan Doe</h2>
                            <h2 className="card-title text-xs font-normal text-[#030B1C]">Guitar Specialist</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-64 shadow-xl">
                        <figure>
                            <img
                            className='w-full'
                                src="/man.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body bg-white gap-0 p-5">
                            <h2 className="card-title text-lg font-normal text-[#030B1C]">Johnatan Doe</h2>
                            <h2 className="card-title text-xs font-normal text-[#030B1C]">Guitar Specialist</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-64 shadow-xl">
                        <figure>
                            <img
                            className='w-full'
                                src="/man.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body bg-white gap-0 p-5">
                            <h2 className="card-title text-lg font-normal text-[#030B1C]">Johnatan Doe</h2>
                            <h2 className="card-title text-xs font-normal text-[#030B1C]">Guitar Specialist</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-64 shadow-xl">
                        <figure>
                            <img
                            className='w-full'
                                src="/man.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body bg-white gap-0 p-5">
                            <h2 className="card-title text-lg font-normal text-[#030B1C]">Johnatan Doe</h2>
                            <h2 className="card-title text-xs font-normal text-[#030B1C]">Guitar Specialist</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
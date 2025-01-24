import React from 'react';
import Button from '../Layout/Button';

const LessonSlider = () => {
    return (
        <div>

            <div className="carousel carousel-center  rounded-box max-w-full space-x-4 mt-10">
                <div className="carousel-item">
                    <div className="card lg:card-side bg-white text shadow-xl">
                        <figure>
                            <img
                                src="/demo.png"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <p className='text-[#B63FA1]'>Guitar</p>
                            <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                            <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                            <div className="card-actions justify-start">
                                <Button variant="primary" size="sm">
                                    See More...
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card lg:card-side bg-white text shadow-xl">
                        <figure>
                            <img
                                src="/demo.png"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <p className='text-[#B63FA1]'>Piano</p>
                            <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                            <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                            <div className="card-actions justify-start">
                                <Button variant="primary" size="sm">
                                    See More...
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card lg:card-side bg-white text shadow-xl">
                        <figure>
                            <img
                                src="/demo.png"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <p className='text-[#B63FA1]'>Drums</p>
                            <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                            <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                            <div className="card-actions justify-start">
                                <Button variant="primary" size="sm">
                                    See More...
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
              

            </div>
        </div>
    );
};

export default LessonSlider;
import React from 'react';
import Button from '../Layout/Button';

const PianoLesson = () => {
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5'>
                <div className="card lg:card-side bg-white text shadow-xl">
                    <figure>
                        <img
                        className='w-full h-full'
                            src="/demo.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#B63FA1]'>Piano</p>
                        <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                        <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                        <div className="card-actions justify-start">
                            <Button variant="secondary" size="sm">
                                See More...
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-white text shadow-xl">
                    <figure>
                        <img
                        className='w-full h-full'
                            src="/demo.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#B63FA1]'>Piano</p>
                        <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                        <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                        <div className="card-actions justify-start">
                            <Button variant="secondary" size="sm">
                                See More...
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-white text shadow-xl">
                    <figure>
                        <img
                        className='w-full h-full'
                            src="/demo.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#B63FA1]'>Piano</p>
                        <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                        <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                        <div className="card-actions justify-start">
                            <Button variant="secondary" size="sm">
                                See More...
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-white text shadow-xl">
                    <figure>
                        <img
                        className='w-full h-full'
                            src="/demo.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#B63FA1]'>Piano</p>
                        <h2 className="card-title text-[#030B1C] font-normal w-52">Mastering Chords and Strumming Patterns</h2>
                        <p className='text-gray-400 w-72 font-normal'>Learn the essential chords and strumming techniques that form the foundation of guitar playing.</p>
                        <div className="card-actions justify-start">
                            <Button variant="secondary" size="sm">
                                See More...
                            </Button>
                        </div>
                    </div>
                </div>
              
            </div>

        </div>
    );
};

export default PianoLesson;
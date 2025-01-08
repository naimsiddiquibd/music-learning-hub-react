import React from 'react';
import { MusicalNoteIcon } from '@heroicons/react/24/solid'

const ThreeInstruments = () => {
    return (
        <div>
            <p className='text-[#FFFFFF] text-4xl mb-10 max-w-3xl'>Whether you're just starting out or refining your skills, our personalized lessons are here</p>
            <div className='flex justify-between items-center gap-10'>
                <div className='flex flex-col gap-2'>
                    <MusicalNoteIcon className="size-6 text-[#B63FA1]" />
                    <h4 className='text-lg font-normal text-white'>Guitar</h4>
                    <p className='text-sm text-gray-400'>
                        Unlock your inner musician with our expert-led guitar lessons. From mastering chords and strumming techniques to playing your favorite songs, we guide you every step of the way
                    </p>
                    <p className='text-sm font-medium text-white'>Learn More</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <MusicalNoteIcon className="size-6 text-[#B63FA1]" />
                    <h4 className='text-lg font-normal text-white'>Guitar</h4>
                    <p className='text-sm text-gray-400'>
                        Unlock your inner musician with our expert-led guitar lessons. From mastering chords and strumming techniques to playing your favorite songs, we guide you every step of the way
                    </p>
                    <p className='text-sm  font-medium text-white'>Learn More</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <MusicalNoteIcon className="size-6 text-[#B63FA1]" />
                    <h4 className='text-lg font-normal text-white'>Guitar</h4>
                    <p className='text-sm text-gray-400'>
                        Unlock your inner musician with our expert-led guitar lessons. From mastering chords and strumming techniques to playing your favorite songs, we guide you every step of the way
                    </p>
                    <p className='text-sm  font-medium text-white'>Learn More</p>
                </div>
               
            </div>
        </div>
    );
};

export default ThreeInstruments;
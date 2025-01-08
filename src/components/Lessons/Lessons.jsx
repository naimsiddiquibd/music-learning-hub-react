import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../Layout/Button';

const Lessons = () => {
    return (
        <div className='mt-20'>


            <div>
                <h1 className='text-white text-6xl'>Lessons Tailored to</h1>
                <h1 className='text-[#E0AED7] text-6xl'>Your Musical Journey</h1>
            </div>

            <div className='lg:flex lg:justify-center lg:items-center gap-20 mt-5'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-white text-5xl'>Unleash Your Inner  Musician</h2>
                    <p className='text-sm text-gray-400 lg:w-96'>Whether you're a beginner or looking to master your skills, our personalized lessons for Piano, Drums, and Guitar are designed to help you achieve your goals.</p>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>Learn at your own pace with flexible scheduling.</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>Access beginner-friendly to advanced-level courses</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>One-on-one sessions with professional instructors.</p>
                    </div>
                    <div>
                    <Button>Learn More</Button>
                    </div>
                </div>
               <div>
                <img src="/test.png" alt="" />
               </div>
            </div>
            <div className='lg:flex lg:justify-center lg:items-center gap-20 mt-10'>
            <div>
                <img src="/test.png" alt="" />
               </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-white text-5xl'>Unleash Your Inner  Musician</h2>
                    <p className='text-sm text-gray-400 lg:w-96'>Whether you're a beginner or looking to master your skills, our personalized lessons for Piano, Drums, and Guitar are designed to help you achieve your goals.</p>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>Step-by-step guidance for beginners and advanced players.</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>Interactive and engaging lessons tailored to you.</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CheckIcon className="size-5 text-[#B63FA1]" />
                        <p>Learn, practice, and grow with passionate instructors.</p>
                    </div>
                    <div>
                    <Button>Learn More</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Lessons;
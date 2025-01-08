import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/hero.png"
                    className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-7xl text-white font-light">Find an Instructor.</h1>
                    <h1 className="text-7xl mt-3 font-light text-[#E0AED7]">Start Learning Now.</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='flex items-center justify-start gap-5'>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <CheckIcon className="size-5" />
                            <p>Plan</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <CheckIcon className="size-5" />
                            <p>Target</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <CheckIcon className="size-5" />
                            <p>Success</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
import Button from '../Layout/Button';

const GuitarHero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/guitar.png"
                    className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-7xl text-white font-light">Learn <span className='text-[#E0AED7]'>Guitar</span></h1>
                    <p className="py-6">
                    Direct outreach campaigns are just one way to spark conversations. We also engage audiences through social media, influencer partnerships, and content creation for a well-rounded approach.
                    </p>
                    <div className=''>
                       <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuitarHero;
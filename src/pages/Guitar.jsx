import React from 'react';
import GuitarHero from '../components/Guitar/GuitarHero';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import GuitarLesson from '../components/Guitar/GuitarLesson';

const Guitar = () => {
    return (
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <GuitarHero></GuitarHero>
            <GuitarLesson></GuitarLesson>
            <Footer></Footer>
        </div>
    );
};

export default Guitar;
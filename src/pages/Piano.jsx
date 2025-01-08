import React from 'react';
import GuitarHero from '../components/Guitar/GuitarHero';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import GuitarLesson from '../components/Guitar/GuitarLesson';
import PianoHero from '../components/Piano/PianoHero';
import PianoLesson from '../components/Piano/PianoLesson';

const Piano = () => {
    return (
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <PianoHero></PianoHero>
            <PianoLesson></PianoLesson>
            <Footer></Footer>
        </div>
    );
};

export default Piano;
import React from 'react';
import GuitarHero from '../components/Guitar/GuitarHero';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import GuitarLesson from '../components/Guitar/GuitarLesson';
import DrumsHero from '../components/Drums/DrumsHero';
import DrumsLesson from '../components/Drums/DrumsLesson';

const Drums = () => {
    return (
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <DrumsHero></DrumsHero>
            <DrumsLesson></DrumsLesson>
            <Footer></Footer>
        </div>
    );
};

export default Drums;
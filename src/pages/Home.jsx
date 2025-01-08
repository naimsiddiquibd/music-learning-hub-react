import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Hero/Hero';
import ThreeInstruments from '../components/ThreeInstruments/ThreeInstruments';
import LessonSlider from '../components/LessonSlider/LessonSlider';
import Instructors from '../components/Instructors/Instructors';
import Lessons from '../components/Lessons/Lessons';
import Footer from '../components/Layout/Footer';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <Hero></Hero>
            <ThreeInstruments></ThreeInstruments>
            <LessonSlider></LessonSlider>
            <Instructors></Instructors>
            <Lessons></Lessons>
            <Footer></Footer>
        </div>
    );
};

export default Home;
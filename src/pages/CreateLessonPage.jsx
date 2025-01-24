import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ContactComponent from '../components/ContactComponent/ContactComponent';
import CreateCourse from '../components/CreateLesson/CreateLesson';


const CreateLessonPage = () => {
    return (
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <CreateCourse></CreateCourse>
            <Footer></Footer>
        </div>
    );
};

export default CreateLessonPage;

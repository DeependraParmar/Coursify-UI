import { GridItem } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { courses } from '../../../data.js';
import "./Courses.scss"
import CourseCard from '../../components/CourseCard';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import DescriptionEditor from '../../components/DescriptionEditor.jsx';
import { FeaturedCoursesComponent } from '../Home/Home.jsx';

const Courses = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // eslint-disable-next-line

    return (
        <>
            <FeaturedCoursesComponent />
        </>
    )
}

export default Courses;

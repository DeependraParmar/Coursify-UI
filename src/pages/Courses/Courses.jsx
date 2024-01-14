import { GridItem } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import "./Courses.scss"
import { FeaturedCoursesComponent } from '../Home/Home.jsx';
import TransitionWrapper from '../../components/Transition.jsx';

const Courses = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // eslint-disable-next-line

    return (
        <>
            <TransitionWrapper>
                <FeaturedCoursesComponent />
            </TransitionWrapper>
        </>
    )
}

export default Courses;

import { GridItem } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { courses } from '../../../data.js';
import "./Courses.scss"
import CourseCard from '../../components/CourseCard';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import DescriptionEditor from '../../components/DescriptionEditor.jsx';

const Courses = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // eslint-disable-next-line

    return (
        <>
            <MainWrapper>
                <GridCourseWrapper paddingY={['24']}>
                    {
                        courses.map((course, index) => {
                            return <GridItem width={'100%'}> <CourseCard key={index} image_url={course.image_url} course_title={course.course_title} course_description={course.course_description} created_by={course.created_by} price={course.price} /></GridItem>
                        })
                    }
                </GridCourseWrapper>
            </MainWrapper>
        </>
    )
}

export default Courses;

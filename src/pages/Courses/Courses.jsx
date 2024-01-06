import { Button, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { banners, courses } from '../../../data.js';
import "./Courses.scss"
import CourseCard from '../../components/CourseCard';

const Courses = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [keyword, setKeyword] = useState("");
    // eslint-disable-next-line
    const [category, setCategory] = useState("");

    // eslint-disable-next-line
    const addToPlaylistHandler = (id) => {
        console.log("Added to playlist successfully");
    }

    const categories = ["Web Development", "Programming Languages", "App Development", "Data Structures & Algorithms", "Game Development", "Artificial Intelligence"]
    return (
        <>
            <section className="courses">
                <HStack width={'90vw'} overflowX={'scroll'} css={{
                    '&::-webkit-scrollbar': {
                        display: "none"
                    }
                }} >
                    {
                        categories.map((item, index) => (
                            <Button minWidth={'60'} size={'sm'} key={index} onClick={() => setCategory(item)}>{item}</Button>
                        ))
                    }
                </HStack>
                <Stack
                    direction={['column', 'column', 'row', 'row']}
                    flexWrap={'wrap'}
                    marginTop={'5'}
                    justifyContent={['flex-start', 'center']}
                    alignItems={['center', 'center', 'center', 'center']}
                    gap={'10'}
                    width={['100%', '90%', '90%', '95%']}
                >
                    {
                        courses.map((course, index) => (
                            <CourseCard key={index} image_url={course.image_url} course_title={course.course_title} course_description={course.course_description} created_by={course.created_by} price={course.price} />
                        ))
                    }

                </Stack>

            </section>
        </>
    )
}

export default Courses;

import { Box, GridItem, Heading, Image, Input, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { getAllCourses } from '../../redux/actions/course.js';
import "./Courses.scss";
import nocourses from '../../assets/images/nocourses.jpg';

const Courses = () => {

    const [category, setCategory] = useState("");
    const [keyword, setKeyword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, courses } = useSelector(state => state.course);

    useEffect(() => {
        dispatch(getAllCourses(category, keyword));
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'});
        }
    }, [category, keyword, dispatch]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // eslint-disable-next-line

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={'24'} pb={'12'}>
                    {/* Home Page Features */}
                    <VStack spacing={'12'}>
                        <Input w={['95%', '95%', '60%', '60%']} placeholder='Search for courses, keywords and categories' fontSize={'sm'} focusBorderColor='#5000bb' onChange={e => setKeyword(e.target.value)} />
                        <GridCourseWrapper>
                            {courses.map((course, index) => (
                                <GridItem width={'full'} key={index}>
                                    <Link to={`/courses/${course._id}`} >
                                        <CourseCard
                                            image_url={course.poster.url}
                                            course_title={course.title}
                                            course_description={course.description}
                                            created_by={course.createdBy}
                                            price={course.price}
                                        />
                                    </Link>
                                </GridItem>
                            ))}
                        </GridCourseWrapper>
                    {
                        courses.length === 0 && (
                            <VStack margin={'auto'} alignItems={'center'} justifyContent={'center'} width={['80%','80%','20%','20%']} >
                                <Image src={nocourses} />
                                <Heading textAlign={'center'} size='md' color='gray.500'>No courses found</Heading>
                            </VStack>
                        )
                    }
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default Courses;

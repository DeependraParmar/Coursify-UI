import { GridItem, Heading, Image, Input, Select, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import nocourses from '../../assets/images/nocourses.jpg';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { getAllCourses } from '../../redux/actions/course.js';
import "./Courses.scss";

const Courses = () => {

    const [category, setCategory] = useState("");
    const [keyword, setKeyword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, courses } = useSelector(state => state.course);

    useEffect(() => {
        dispatch(getAllCourses(category, keyword));
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
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

                        <Stack w={'full'} flexDir={['column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'}>
                            <Input w={['95%', '95%', '30%', '30%']} placeholder='Search for courses, keywords and categories' fontSize={'xs'} focusBorderColor='#8141bb' onChange={e => setKeyword(e.target.value)} size={'sm'} />

                            <Select w={['95%', '95%', '30%', '30%']} placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} size={'sm'} fontSize={'xs'}>
                                <option value="web development">Web Development</option>
                                <option value="app development">App Development</option>
                                <option value="data science">Data Science</option>
                                <option value="artificial intelligence">Artificial Intelligence</option>
                                <option value="machine learning">Machine Learning</option>
                                <option value="blockchain">Blockchain</option>
                                <option value="cyber security">Cyber Security</option>
                                <option value="cloud computing">Cloud Computing</option>
                                <option value="other">Other</option>
                            </Select>
                        </Stack>


                        <GridCourseWrapper>
                            {
                                courses ? courses.map((course, index) => (
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
                                )) : loading &&
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <ClipLoader color={'#8141bb'} loading={loading} size={50} />
                                </Stack>

                            }
                        </GridCourseWrapper>
                        {
                            courses.length === 0 && !loading && (
                                <VStack margin={'auto'} alignItems={'center'} justifyContent={'center'} width={['80%', '80%', '20%', '20%']} >
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

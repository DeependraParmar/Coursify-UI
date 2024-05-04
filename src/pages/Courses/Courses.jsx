import { GridItem, Heading, Image, Input, Select, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { getAllCourses } from '../../redux/actions/course.js';
import "./Courses.scss";
import { FaCrown } from 'react-icons/fa';

const Courses = ({isForAdmin = false}) => {

    const [category, setCategory] = useState("");
    const [keyword, setKeyword] = useState("");
    const [courseType, setCourseType] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, courses } = useSelector(state => state.course);

    useEffect(() => {
        const getData = setTimeout(() => {
            dispatch(getAllCourses(category, keyword));
        }, 1000);
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        return () => clearTimeout(getData);
    }, [category, keyword, dispatch]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if(courseType === 'free') {
            navigate('/free-courses');
        }
    }, [courseType]);


    // eslint-disable-next-line


    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={isForAdmin ? '4' : '24'} pb={'12'}>
                    <VStack spacing={'12'}>

                        <Stack w={'full'} flexDir={['column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'}>
                            <Select w={['95%', '95%', '20%', '20%']} placeholder={`Select Course Type`} focusBorderColor='#8141bb' onChange={e => setCourseType(e.target.value)} size={'sm'} fontSize={'xs'}>
                                <option value="free">Free</option>
                                <option value="paid">Premium</option>
                            </Select>
                            <Input w={['95%', '95%', '30%', '30%']} placeholder='Search for courses, keywords and categories' fontSize={'xs'} focusBorderColor='#8141bb' onChange={e => setKeyword(e.target.value)} size={'sm'} />

                            <Select w={['95%', '95%', '20%', '20%']} placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} size={'sm'} fontSize={'xs'}>
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
                                        <Link to={isForAdmin ? `/admin/courses/${course._id}/home` : `/courses/${course._id}`} >
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
                                <TransitionWrapper>
                                    <VStack margin={'auto'} alignItems={'center'} justifyContent={'center'} width={['80%', '80%', '20%', '20%']} >
                                        <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618195/x8fqgg9ae4uaojsajliy.jpg'} />
                                        <Heading textAlign={'center'} size='md' color='gray.500'>No courses found</Heading>
                                    </VStack>
                                </TransitionWrapper>
                            )
                        }
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default Courses;

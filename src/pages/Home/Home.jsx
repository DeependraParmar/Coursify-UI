import { Box, GridItem, Heading, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { banners } from '../../../data.js';
import CarouselBox from '../../components/CarouselBox';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { getAllCourses } from '../../redux/actions/course.js';

const Home = () => {
  return (
    <>
      <TransitionWrapper>
        <CarouselComponent />
        <FeaturedCoursesComponent />
      </TransitionWrapper>
    </>
  )
}


const CarouselComponent = () => {
  return <MainWrapper pt={'16'} pb={'2'}>
    {/* Home Page Carousel  */}
    <Box >
      <Carousel className='carousel_container' autoPlay={true} stopOnHover={true} infiniteLoop={true} interval="5000" showStatus={false} showArrows={true} >
        {
          banners.map((banner, index) => (
            <CarouselBox key={index} banner={banner.image} title={banner.title} description={banner.description} button_url={banner.button_url} button_text={banner.button_text} />
          ))
        }
      </Carousel>
    </Box>
  </MainWrapper>
}


export const FeaturedCoursesComponent = () => {
  const { loading, error, message, courses } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if(message){
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return <MainWrapper pt={'4'} pb={'10'}>
    {/* Home Page Features */}
    <VStack spacing={'12'}>
      <Heading id='featured_section' size="xl" fontFamily={"Young Serif"} textAlign="center">Featured Courses</Heading>
      <GridCourseWrapper>
        {courses && courses.map((course, index) => (
          <GridItem width={'full'} key={index}>
            <Link to={`/courses/${course._id}`} >
              <CourseCard
                image_url={course.poster.url}
                course_title={course.title}
                course_description={course.description}
                created_by={course.created_by}
                price={course.price}
              />
            </Link>
          </GridItem>
        ))}
      </GridCourseWrapper>
    </VStack>
  </MainWrapper>

}

export default Home;

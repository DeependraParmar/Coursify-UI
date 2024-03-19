import { Box, GridItem, Heading, Stack, VStack, } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { banners, courses } from '../../../data.js';
import CarouselBox from '../../components/CarouselBox';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import { Link } from 'react-router-dom';
import TransitionWrapper from '../../components/Transition.jsx';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0, "smooth");
  }, []);

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
  return <MainWrapper pt={'4'} pb={'10'}>
    {/* Home Page Features */}
    <VStack spacing={'12'}>
      <Heading size="xl" fontFamily={"Young Serif"} textAlign="center">Featured Courses</Heading>
      <GridCourseWrapper>
        {courses.map((course, index) => (
          <GridItem width={'full'} key={index}>
            <Link to={`/courses/${course.id}`} >
              <CourseCard
                image_url={course.image_url}
                course_title={course.title}
                course_description={course.course_description}
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

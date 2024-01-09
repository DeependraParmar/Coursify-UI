import { Box, GridItem, Heading, Stack, VStack, } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { banners, courses } from '../../../data.js';
import CarouselBox from '../../components/CarouselBox';
import CourseCard from '../../components/CourseCard.jsx';
import GridCourseWrapper from '../../components/GridCourseWrapper.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';

const Home = () => {


  return (
    <>
    <MainWrapper>
      {/* Home Page Carousel  */}
      <Box pt={'10'}>
        <Carousel className='carousel_container' autoPlay={true} stopOnHover={true} infiniteLoop={true} interval="5000" showStatus={false} showArrows={true} >
          {
            banners.map((banner, index) => (
              <CarouselBox key={index} banner={banner.image} title={banner.title} description={banner.description} button_url={banner.button_url} button_text={banner.button_text} />
            ))
          }
        </Carousel>
      </Box>
    </MainWrapper>

      <MainWrapper background={'#f7f7f9'}>
      {/* Home Page Features */}
      <VStack spacing={'8'} py={'12'} bg={'#f7f7f9'}>
        <Heading size="xl" fontFamily={"Young Serif"} textAlign="center">Featured Courses</Heading>
        <GridCourseWrapper >
          {
            courses.map((course, index) => {
              return <GridItem width={'100%'}> <CourseCard key={index} image_url={course.image_url} course_title={course.course_title} course_description={course.course_description} created_by={course.created_by} price={course.price} /></GridItem>
            })
          }
        </GridCourseWrapper>
      </VStack>
    </MainWrapper>

    </>
  )
}
export default Home;

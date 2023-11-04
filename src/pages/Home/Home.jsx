import { Box, Heading, Stack, } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { banners,courses } from '../../../data.js';
import CarouselBox from '../../components/CarouselBox';
import CourseCard from '../../components/CourseCard.jsx';

const Home = () => {
  

  return (
    <>
      {/* Home Page Carousel  */}
      <Box pt={'24'}>
        <Carousel className='carousel_container' autoPlay={true} stopOnHover={false} infiniteLoop={true} interval="5000" showStatus={false} showArrows={true} >
          {
            banners.map((banner, index) => (
              <CarouselBox key={index} banner={banner.image} title={banner.title} description={banner.description} button_url={banner.button_url} button_text={banner.button_text} />
            ))
          }
        </Carousel>
      </Box>



      {/* Home Page Features */}
      <Stack spacing={'8'} py={'8'} bg={'#f7f7f9'}>
        <Heading size="xl" fontFamily={"Young Serif"} textAlign="center">Featured Courses</Heading>

        {/* Grid box for containing the cards  */}
        <Box width={'90%'} alignItems={'center'} justifyContent={'center'} margin={'auto'} display={'grid'} gridTemplateColumns={['1fr','1fr 1fr','1fr 1fr 1fr','1fr 1fr 1fr 1fr','1fr 1fr 1fr 1fr 1fr']} gap={'6'}  >
            {
              courses.map((course, index) => (
                <CourseCard key={index} image_url={course.image_url} course_title={course.course_title} course_description={course.course_description} created_by={course.created_by} price={course.price} />
              ))
            }
        </Box>
      </Stack>
    </>
  )
}
export default Home;

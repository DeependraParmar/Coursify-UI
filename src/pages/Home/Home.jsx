import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from "../../assets/images/banner1.png"
import banner2 from "../../assets/images/banner2.png"
import banner3 from "../../assets/images/banner3.png"
import banner4 from "../../assets/images/banner4.png"
import { Link } from 'react-router-dom';
import CarouselBox from '../../components/CarouselBox';

const Home = () => {
  const banners = [
    {
      image: banner4,
      title: "Empower Your Future",
      description: "Invest in Your Education for a Brighter Tomorrow. Acquire New Skills, Unlock New Opportunities, and Achieve Your Professional and Personal Goals. Coursify Is Your Partner in the Journey to a More Empowered and Successful Future.",
      button_url: "/courses",
      button_text: "Learn More"
    },
    {
      image: banner1,
      title: "Learn at Own Pace",
      description: "Embrace a Learning Journey That Adapts to Your Schedule. With Flexible Learning, You Have the Freedom to Explore New Subjects and Acquire Skills at Your Own Pace. No Deadlines, No Pressure – Just Learning on Your Terms",
      button_url: "/courses",
      button_text: "View Courses"
    },
    {
      image: banner2,
      title: "Learn from Renowned Experts",
      description: "Immerse Yourself in Learning from Distinguished Instructors Who Are Leading Experts in Their Fields. Dive Deep into Their Knowledge and Insights to Expand Your Skills and Gain Valuable Expertise",
      button_url: "/courses",
      button_text: "Start Learning"
    },
    {
      image: banner3,
      title: "Join our Community",
      description: "Connect with a Vibrant Community of Learners from Around the Globe. Share Your Ideas, Collaborate on Projects, and Grow Together. At Coursify, We Believe That Learning Is a Collective Journey.",
      button_url: "/courses",
      button_text: "Join Now"
    },
  ]

  return (
    <>
      <Carousel className='carousel_container' autoPlay={true} stopOnHover={false} infiniteLoop={true} interval="5000" showStatus={false} showArrows={false}>
          {
            banners.map((banner, index) => (
              <CarouselBox key={index} banner={banner.image} title={banner.title} description={banner.description} button_url={banner.button_url} button_text={banner.button_text} />
            ))
          }
      </Carousel>
    </>
  )
}
export default Home;

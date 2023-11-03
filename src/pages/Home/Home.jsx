import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Home = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop interval="5000" showStatus={false} showArrows={false}>
          <Box bg={'black'}>
            {/* <Image /> */}
            <Box>
              <h1>Legend</h1>
              <p>Legend</p>
            </Box>
          </Box>

          <Box bg={'black'}>
            {/* <Image /> */}
            <Box>
              <h1>Legend</h1>
              <p>Legend</p>
            </Box>
          </Box>

          <Box bg={'black'}>
            {/* <Image /> */}
            <Box>
              <h1>Legend</h1>
              <p>Legend</p>
            </Box>
          </Box>

          <Box bg={'black'}>
            {/* <Image /> */}
            <Box>
              <h1>Legend</h1>
              <p>Legend</p>
            </Box>
          </Box>
        </Carousel>
    </>
  )
}

export default Home;

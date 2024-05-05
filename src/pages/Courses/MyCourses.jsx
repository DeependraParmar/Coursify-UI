import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Button, GridItem, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import GridCourseWrapper from '../../components/GridCourseWrapper'
import { Link } from 'react-router-dom'
import CourseCard from '../../components/CourseCard'

const MyCourses = ({ courses }) => {
  return (
    <TransitionWrapper>
      <MainWrapper pt={24} pb={12}>
        <VStack width={'95%'} margin={'auto'} spacing={'5'}>
          <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >My Courses</Heading>
          <Stack flexDir={['column', 'column', 'row', 'row']} width={'full'} justifyContent={['flex-start','flex-start','center','center']} alignItems={['center','center', 'flex-start','flex-start']} gap={6}>

            {
              courses && courses.length > 0 ? courses.map((course, index) => (
                <Box width={['95%', '95%', '25%', '18%']} key={index}>
                  <Link to={`/courses/${course.course}/home`} >
                    <CourseCard
                      image_url={course.thumbnail}
                      course_title={course.title}
                      isBought={true}
                    />
                  </Link>
                </Box>
              )):
              <>
                  <VStack width={['90%', '60%', '50%', '40%']} margin={'auto'}>
                    <Image opacity={0.6} width={'40%'} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1714566980/fm2i9uvkiutfbk2awzrv.png'} />
                    <Text textAlign={'center'}>No Courses Purchased</Text>
                    <Link to={'/courses'}><Button size={'sm'} colorScheme='purple' fontSize={'xs'} variant={'solid'}>Explore Courses</Button></Link>
                  </VStack>
              </>
            }
          </Stack>
        </VStack>
      </MainWrapper>
    </TransitionWrapper>
  )
}

export default MyCourses

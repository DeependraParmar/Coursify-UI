import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, GridItem, Heading, Stack, VStack } from '@chakra-ui/react'
import GridCourseWrapper from '../../components/GridCourseWrapper'
import { Link } from 'react-router-dom'
import CourseCard from '../../components/CourseCard'

const MyCourses = ({ courses }) => {
  return (
    <TransitionWrapper>
      <MainWrapper pt={24} pb={12}>
        <VStack width={'95%'} margin={'auto'} display={'flex'} spacing={'5'}>
          <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >My Courses</Heading>
          <Stack flexDir={['column', 'column', 'row', 'row']} width={'full'} justifyItems={['flex-start', 'flex-start', 'center', 'center']} alignItems={['center','center', 'flex-start','flex-start']} gap={6}>

            {
              courses && courses.map((course, index) => (
                <Box width={['95%', '95%', '20%', '20%']}>
                  <Link to={`/courses/${course.course}/home`} >
                    <CourseCard
                      image_url={course.thumbnail}
                      course_title={course.title}
                      isBought={true}
                    />
                  </Link>
                </Box>
              ))
            }
          </Stack>
        </VStack>
      </MainWrapper>
    </TransitionWrapper>
  )
}

export default MyCourses

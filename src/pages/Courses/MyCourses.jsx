import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { GridItem, Heading, VStack } from '@chakra-ui/react'
import GridCourseWrapper from '../../components/GridCourseWrapper'
import { Link } from 'react-router-dom'
import CourseCard from '../../components/CourseCard'

const MyCourses = ({courses}) => {
  return (
    <TransitionWrapper>
      <MainWrapper pt={24} pb={12}>
              <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                  <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >My Courses</Heading>

                <GridCourseWrapper>
                      {
                          courses && courses.map((course, index) => (
                              <GridItem width={'full'} key={index}>
                                      <Link to={`/courses/${course.course}`} >
                                      <CourseCard
                                          image_url={course.thumbnail}
                                          isBought={true}
                                      />
                                      </Link>
                              </GridItem>
                          ))
                      }
                </GridCourseWrapper>
            </VStack>
      </MainWrapper>
    </TransitionWrapper>
  )
}

export default MyCourses

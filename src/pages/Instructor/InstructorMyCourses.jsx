import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, Button, HStack, Heading, Image, Stack, Text, VStack
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import MainLoader from "../../components/MainLoader"
import { getCreatedCourses } from '../../redux/actions/instructor'
import {toast} from "react-toastify";

const InstructorMyCourses = () => {
  const {loading, error, mycourses} = useSelector(state => state.instructor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreatedCourses());
  }, []);

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({ type: 'clearError'});
    }
  }, [dispatch, error]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={20} pb={12}>
          <VStack gap={0}>
            <HStack justifyContent={'flex-start'}>
              <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                <BreadcrumbItem>
                  <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink color={'purple'} href='#'>Courses</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>

            <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Your Courses</Heading>
            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, manage your courses, edit, add and delete lectures.</Text>

            {
              loading && !mycourses ? <MainLoader /> : 
              <Box>
                  {
                    mycourses && mycourses ?
                      <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>
                        {
                          mycourses.map((course, index) => {
                            return <InstructorCourseCard key={index} id={course._id} title={course.title} description={course.description} image_url={course.poster.url} />
                          })
                        }
                      </Stack> :
                      <Box>No Courses Found</Box>
                  }
              </Box>
            }

          </VStack>
        </MainWrapper>
      </TransitionWrapper>
    </>
  )
}

export const InstructorCourseCard = ({ id, title, description, image_url }) => {
  return (
    <>
      <VStack _hover={{ boxShadow: '0px 5px 10px rgba(0,0,0,0.3)' }} transition={'all 0.2s ease-in-out'} width={['85%', '', '30%', '20%']} alignItems={'flex-start'} boxShadow={'lg'} borderRadius={'lg'}>
        <Link to={`/instructor/courses/${id}`} >
          <Image src={image_url} />
          <VStack p={4} gap={2} alignItems={'inherit'}>
            <Text fontFamily={'Young Serif'} noOfLines={1} fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight={'semibold'} >{title}</Text>
            <Text fontSize={'xs'} noOfLines={2}>{description}</Text>
            <HStack>
              <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                <Link to={`/instructor/courses/${id}`} >
                  <HStack>
                    <FaEdit />
                    <Text>Edit</Text>
                  </HStack>
                </Link>
              </Button>
              <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                <Link to={`/instructor/courses/${id}/add-lecture`} >
                  <HStack>
                    <FaEdit />
                    <Text>Add Lecture</Text>
                  </HStack>
                </Link>
              </Button>
            </HStack>
          </VStack>
        </Link>


      </VStack>
    </>
  )
}
export default InstructorMyCourses

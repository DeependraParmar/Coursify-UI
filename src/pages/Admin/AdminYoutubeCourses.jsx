import React, { useEffect } from 'react'
import TransitionWrapper from '../../components/Transition'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getYoutubeCourses } from '../../redux/actions/youtube'
import { InstructorCourseCard } from '../Instructor/InstructorMyCourses'
import MainLoader from "../../components/MainLoader"

const AdminYoutubeCourses = () => {
  const { loading, error, message, courses } = useSelector(state => state.youtube);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYoutubeCourses());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <TransitionWrapper>
      {
        loading && <LoadingComponent />
      }
      <MainWrapper pt={24} pb={12}>
        <VStack gap={4}>
          <HStack justifyContent={'flex-start'}>
            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
              <BreadcrumbItem>
                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link className='hover-underline' to='/admin/youtube'>Youtube</Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink color={'purple'} href='#'>Courses</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>

          <VStack gap={0} width={'full'}>
            <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>My Youtube Courses</Heading>
            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, this panel has all the youtube courses. Edit, manage and more.</Text>
          </VStack>


          <Box>
            {
              courses && courses.length > 0 ?
                <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>
                  {
                    courses.map((course, index) => {
                      return <InstructorCourseCard key={index} youtube_url={`/admin/youtube/courses/${course._id}`} id={course._id} title={course.title} description={course.description} image_url={course.poster.url} />
                    })
                  }
                </Stack>
                :
                <VStack width={'60%'} margin={'auto'}>
                  <Image opacity={0.6} width={'90%'} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1714566980/fm2i9uvkiutfbk2awzrv.png'} />
                  <Text textAlign={'center'}>No Youtube Courses</Text>
                </VStack>
            }
          </Box>
        </VStack>
      </MainWrapper>
    </TransitionWrapper>

  )
}

export default AdminYoutubeCourses

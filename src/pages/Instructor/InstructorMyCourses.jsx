import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, Button, HStack, Heading, Image, Stack, Text, Tooltip, VStack
} from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { FaAngleRight, FaEdit, FaExternalLinkAlt, FaPlusCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { sanitizedHTML } from '../../../controllers'
import MainLoader from "../../components/MainLoader"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getCreatedCourses } from '../../redux/actions/instructor'

const InstructorMyCourses = () => {
  const { loading, error, mycourses } = useSelector(state => state.instructor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreatedCourses());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
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

export const InstructorCourseCard = ({ id, title, description, image_url, youtube_url }) => {
  let sanitizedDescription = useMemo(() => sanitizedHTML(description && description), [description]);

  return (
    <>
      <VStack position={'relative'} _hover={{ boxShadow: '0px 5px 10px rgba(0,0,0,0.3)' }} transition={'all 0.2s ease-in-out'} width={['85%', '', '30%', '20%']} alignItems={'flex-start'} boxShadow={'lg'} borderRadius={'lg'}>
        <Link to={youtube_url ? youtube_url : `/instructor/courses/${id}`} >
          <Tooltip hasArrow label='Open Player' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
            <Button size={'md'} rounded={'full'} colorScheme='blackAlpha' position={'absolute'} zIndex={10} top={2} right={2}><Link to={youtube_url ? `/courses/free/${id}` : `/instructor/courses/${id}/home`}><FaExternalLinkAlt size={'12'} /></Link></Button>
          </Tooltip>
          <AspectRatio ratio={16/9} >
            <Image src={image_url} />
          </AspectRatio>
          <VStack p={4} gap={2} alignItems={'inherit'}>
            <Text fontFamily={'Young Serif'} noOfLines={1} fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight={'semibold'} >{title}</Text>
            <Text fontSize={'xs'} noOfLines={2} dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></Text>
            <HStack mt={1}>
              <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                <Link to={youtube_url ? `/admin/youtube/edit/${id}` : `/instructor/courses/edit/${id}`} >
                  <HStack>
                    <FaEdit />
                    <Text>Edit</Text>
                  </HStack>
                </Link>
              </Button>
              <Button width={'fit-content'} size={['sm']} fontSize={'xs'} fontWeight={'semibold'}>
                <Link to={youtube_url ? `/admin/youtube/courses/${id}/add-lecture` : `/instructor/courses/${id}/add-lecture`} >
                  <HStack>
                    <FaPlusCircle />
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

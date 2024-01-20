import React, { useEffect, useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { AspectRatio, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Menu, MenuDivider, MenuGroup, MenuItem, Stack, Text, VStack, useDisclosure, } from '@chakra-ui/react'
import { courses } from '../../../data'
import { Link, useParams } from 'react-router-dom'
import { AiFillLeftCircle } from 'react-icons/ai'

const CourseWatchPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    const filteredCourse = courses.find((item) => item.id === parseInt(id));
    setCourse(filteredCourse);
  }, [id, courses]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={['20', '20', '24', '24']} pb={'12'}>
          <Stack flexDir={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >

            <Button width={['90%','90%','','']} variant={'solid'} textAlign={'center'} size={'sm'} display={['block', 'block', 'none', 'none']} onClick={onOpen}>
              <HStack justifyContent={'center'}>
                <Text>Lectures Menu</Text>
                <AiFillLeftCircle />
              </HStack>
            </Button>
            {/* Drawer for mobile view lectures */}
            <Drawer placement='right' isOpen={isOpen} onClose={onClose} size={'full'}>
              <DrawerOverlay />
              <DrawerContent >
                <DrawerHeader fontSize={'sm'} fontWeight={'semibold'}>{course.title}
                <Text fontSize={'xs'} noOfLines={'1'}>{course.created_by}</Text>
                </DrawerHeader>

                <DrawerCloseButton />
                <Divider />
                <DrawerBody style={{ padding: '0px' }}>
                  <Menu>
                    <MenuGroup>
                      {
                        course.lectures && course.lectures.map((item, index) => {
                          return (
                            <Link className='width-full' onClick={onClose} to={`/courses/${course.id}/${item.id}`} key={index}>
                              <MenuItem className='width-full' _hover={{ bg: '#e2f2ff' }}>
                                <HStack>
                                  <Text fontSize={'xs'} fontWeight={'semibold'}>
                                    {
                                      index + 1 < 10 ? `0${index + 1},` : `${index + 1}.`
                                    }
                                  </Text>
                                  <Image width={'28'} src={course.image_url} />
                                  <VStack gap={'0'} alignItems={'flex-start'}>
                                    <Text noOfLines={'1'} fontSize={'sm'} fontWeight={'semibold'}>{item.title}</Text>
                                    <Text fontSize={'xs'} noOfLines={'2'}>{item.description}</Text>
                                  </VStack>
                                </HStack>

                              </MenuItem>
                            </Link>
                          )
                        })
                      }
                    </MenuGroup>
                  </Menu>
                </DrawerBody>
              </DrawerContent>
            </Drawer>



            <Box width={['90%', '90%', '65%', '65%']} alignItems={'flex-start'}>
              <AspectRatio ratio={16 / 9}>
                <video src="https://res.cloudinary.com/dmmrtqe8q/video/upload/v1705500962/pexels-mikhail-nilov-8301918_360p_w78typ.mp4" controlsList='nodownload' poster={course.image_url} controls onContextMenu={e => e.preventDefault()}></video>
              </AspectRatio>
              <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', '2xl']}>{course.title}</Text>
              <Text fontSize={['sm', 'sm', 'md', 'md']} py={'1'}>{course.description} </Text>
            </Box>

            <VStack h={['', '', '400px', '530px']} display={['none', 'none', 'block', 'block']} p={'2'} width={['90%', '90%', '30%', '30%']} overflowY={'scroll'} border={'1px solid rgb(0,0,0,0.1)'}  >
              <Menu>
                <MenuGroup>
                  <Text py={'2'} textAlign={'center'} noOfLines={'1'} fontWeight={'semibold'}>{course.title}</Text>
                  <MenuDivider />
                </MenuGroup>
                <MenuGroup>
                  {
                    course.lectures && course.lectures.map((item, index) => {
                      return (
                        <Link className='width-full' to={`/courses/${course.id}/${item.id}`} key={index}>
                          <MenuItem className='width-full' _hover={{ bg: '#e2f2ff' }}>
                            <HStack>
                              <Image width={'20'} src={course.image_url} />
                              <VStack gap={'0'} alignItems={'flex-start'}>
                                <Text noOfLines={'1'} fontSize={'sm'} fontWeight={'semibold'}>{item.title}</Text>
                                <Text fontSize={'xs'} noOfLines={'1'}>{item.description}</Text>
                                <Text fontSize={'xs'} noOfLines={'1'}>{course.created_by}</Text>
                              </VStack>
                            </HStack>

                          </MenuItem>
                        </Link>
                      )
                    })
                  }
                </MenuGroup>
              </Menu>

            </VStack>
          </Stack>
        </MainWrapper>
      </TransitionWrapper>



    </>
  )
}

export default CourseWatchPage

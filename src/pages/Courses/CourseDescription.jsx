import React, { useEffect, useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { AspectRatio, Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { courses } from '../../../data'
import { useParams } from 'react-router-dom'
import { BiSolidVideos } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'

const CourseDescription = () => {
    const { id } = useParams();
    const [course, setCourse] = useState([]);

    useEffect(()=> {
        window.scrollTo(0,0);
    })

    useEffect(() => {
        const filteredCourse = courses.find((item) => item.id === parseInt(id));
        setCourse(filteredCourse);
    }, [id, courses]);


    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={'24'} pb={'12'}>
                    <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >
                        <VStack width={['90%', '90%', '60%', '60%']} alignItems={'flex-start'} gap={'3'}>
                            <Text fontFamily={'Young Serif'} fontSize={['xl', 'xl', '2xl', '4xl']}>{course.title}</Text>
                            <Text>{course.description}</Text>
                            <HStack gap={'1'}><BiSolidVideos color='#8141bb' /><Text fontSize={'sm'}>Total Lectures: </Text><Text fontWeight={'semibold'} fontSize={'sm'}>78</Text></HStack>
                            <HStack gap={'1'}><FaChalkboardTeacher color='#8141bb' /><Text fontSize={'sm'}>Course by: </Text><Text fontSize={'sm'} fontWeight={'semibold'}>{course.created_by}</Text></HStack>
                            <HStack><Button fontSize={'sm'} gap={'2'} colorScheme='purple'>Buy Now<BsCart /></Button></HStack>
                        </VStack>
                        <Box width={['90%', '90%', '35%', '35%']}>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={course.image_url} />
                            </AspectRatio>

                        </Box>
                    </Stack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default CourseDescription

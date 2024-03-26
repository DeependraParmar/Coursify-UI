import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, HStack, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import { FaAngleRight, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import PdfViewer from '../../components/PdfViewer'
import TransitionWrapper from '../../components/Transition'

const AdminApproval = () => {

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const info = [
        {
            title: "Work Experience",
            content: `
            <ul>
                <li><strong>Associate Professor</strong> - Department of Computer Science, XYZ University (2015 - Present)<br>As an Associate Professor, I lead research projects in artificial intelligence and mentor graduate students in cutting-edge technology.</li>
                <li><strong>Assistant Professor</strong> - Department of Computer Science, ABC College (2010 - 2015)<br>Developed curriculum for introductory computer science courses and pioneered interactive teaching methods to engage students.</li>
                <li><strong>Software Engineer</strong> - Tech Solutions Inc. (2007 - 2010)<br>Collaborated with cross-functional teams to develop innovative software solutions for clients in various industries.</li>
            </ul>
        `
        },
        {
            title: "Educational Background",
            content: `
            <ul>
                <li><strong>Ph.D. in Computer Science</strong> - XYZ University (2007)<br>Conducted groundbreaking research in machine learning algorithms, resulting in several published papers in prestigious journals.</li>
                <li><strong>Master of Science in Computer Engineering</strong> - ABC University (2004)<br>Specialized in embedded systems design and contributed to the development of autonomous robotics projects.</li>
                <li><strong>Bachelor of Science in Computer Science</strong> - DEF College (2001)<br>Explored diverse topics in computer science, from software engineering to network security, laying the foundation for my career.</li>
            </ul>
        `
        },
        {
            title: "Skills",
            content: `
            <ul>
                <li>Programming Languages: Java, Python, C/C++, JavaScript</li>
                <li>Web Development: HTML/CSS, ReactJS, Node.js, Express</li>
                <li>Database Management: SQL, MongoDB</li>
                <li>Machine Learning: TensorFlow, scikit-learn</li>
                <li>Operating Systems: Windows, Linux, macOS</li>
            </ul>
        `
        }
    ];


    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack gap={4}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/approval-requests'>Requests</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Request</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Request Page</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, review the request with the data present below.</Text>
                    </VStack>

                    <VStack spacing={['4', '4', '4', '4']} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} width={['95%', '95%', '40%', '40%']} mt={4}>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineUser size='18' />
                            </InputLeftElement>
                            <Input isReadOnly type='text' _focusVisible={{ outline: "none" }} value={'Deependra Parmar'} fontSize={'sm'} />
                        </InputGroup>

                        <InputGroup _focus={'none'} spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input isReadOnly type='email' placeholder='johndoe@gmail.com' _focusVisible={{ outline: "none" }} value={'deependraparmar1@gmail.com'} fontSize={'sm'} />
                        </InputGroup>

                        <InputGroup _focus={'none'} spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlinePhone size='18' />
                            </InputLeftElement>
                            <Input isReadOnly type='number' placeholder='8965231475' _focusVisible={{ outline: "none" }} value={'7854296354'} fontSize={'sm'} />
                        </InputGroup>

                        <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: info[0].content }} fontSize={'sm'} />

                        <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: info[1].content }} fontSize={'sm'} />

                        <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: info[2].content }} fontSize={'sm'} />

                        <PdfViewer pdfUrl={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1711413460/Deependra_Parmar_Resume_cylviq.pdf'} />
                    </VStack>


                    <ButtonGroup size={'sm'} mt={6}>
                        <Button gap={2} colorScheme='green'>Approve <FaThumbsUp /> </Button>
                        <Button gap={2} colorScheme='red'>Discard <FaThumbsDown /> </Button>
                    </ButtonGroup>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminApproval

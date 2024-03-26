import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Avatar, Box, Button, HStack, Heading, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const About = () => {
    return (
        <TransitionWrapper>
            <MainWrapper pt={'24'} pb={'12'}>
                <VStack alignItems={'flex-start'} width={['90%', '90%', '80%', '80%']} margin={'auto'} gap={'4'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'left'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >About <Text display={'inline'} fontFamily={"Young Serif"} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'#8141bb'}>Coursify</Text></Heading>

                    <VStack font alignItems={'flex-start'} fontSize={'sm'}>
                        <Text><b>Coursify:</b> Where Learning Ignites Potential
                            Unlock your curiosity, master new skills, and join a thriving community of learners on Coursify, your gateway to lifelong transformation.</Text> <br />

                        <Text><b>Our Mission:</b> To create a world where anyone can belong anywhere, and provide opportunities to unlock a new future.</Text> <br />

                        <Box>
                            <Text fontSize={'md'} fontWeight={'semibold'} textDecor={'underline'}>Embark on a learning adventure:</Text> <br />
                            <UnorderedList>

                                <ListItem>
                                    <b>Explore a boundless landscape of knowledge:</b> Dive into thousands of courses covering an infinite spectrum of topics, from in-demand tech skills to life-enriching hobbies and everything in between. Whether you're a curious beginner or a seasoned professional, Coursify has a path for you.
                                </ListItem>
                                <ListItem>
                                    <b>Immerse yourself in expert-crafted learning:</b> Our courses are meticulously designed and delivered by passionate instructors who are not only subject matter experts but also skilled educators. They bring their knowledge to life with engaging video lectures, interactive exercises, and practical resources, ensuring you learn beyond the surface.
                                </ListItem>
                                <ListItem>
                                    <b>Forge your own learning path:</b> Learn at your own pace, on your own time. Coursify's on-demand format empowers you to fit learning into your busy schedule. Stream lectures, complete assignments, and access course materials anytime, anywhere.
                                </ListItem>
                                <ListItem>
                                    <b>Connect with a vibrant community:</b> You're not alone on this journey. Join our passionate community of learners and instructors. Share experiences, ask questions, and collaborate on projects, building meaningful connections that fuel your learning and growth.
                                </ListItem>
                                <ListItem>
                                    <b>Transform your dreams into reality:</b> Our courses are designed not just to inform but to empower. Equip yourself with practical skills, build confidence, and prepare yourself for success in your chosen field. Whether you're aiming for a career boost, launching a new venture, or simply enriching your life, Coursify helps you achieve your goals.
                                </ListItem>
                            </UnorderedList>
                        </Box> <br />
                        <Box>
                            <Text fontSize={'md'} fontWeight={'semibold'} textDecor={'underline'}>Join Coursify today and:</Text> <br />
                            <UnorderedList>

                                <ListItem>
                                    <b>Unlock a universe of knowledge:</b> Explore our diverse catalog and ignite your passion for learning.
                                </ListItem>
                                <ListItem>
                                    <b>Master in-demand skills:</b> Elevate your career prospects with practical training and industry-recognized certifications.
                                </ListItem>
                                <ListItem>
                                    <b>Fuel your personal growth:</b> Discover new hobbies, cultivate creativity, and embark on a journey of self-discovery.
                                </ListItem>
                                <ListItem>
                                    <b>Connect with like-minded individuals:</b> Find peers who share your thirst for knowledge and build lasting friendships.
                                </ListItem>
                                <ListItem>
                                    <b>Become a lifelong learner:</b> Embrace the power of continuous learning and transform your future one insightful lesson at a time.
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <Text>Start your learning journey today and experience the transformative power of Coursify!

                        </Text>
                    </VStack>
                    <br />
                    <VStack alignItems={'flex-start'} gap={'8'} fontSize={'sm'}>
                        <Heading fontFamily={'Young Serif'} textAlign={'left'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >About the <Text display={'inline'} fontFamily={"Young Serif"} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'#8141bb'}>Developer</Text></Heading>
                        <Stack flexDir={['column', 'column', 'row', 'row']} gap={'8'}>
                            <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' size={'2xl'} margin={'auto'} />
                            <Box >
                                <Text mb={'4'}>
                                    Hello there! I'm <b>Deependra Parmar</b>, a highly passionate and dedicated Full Stack Web Developer with a strong drive for creating beautiful and immersive digital experiences. I find immense joy in transforming ideas into reality, bringing them to life through elegant design and cutting-edge technology. My goal is to craft visually stunning and user-friendly interfaces that leave a lasting impression. With a meticulous attention to detail, I strive for pixel-perfection in every line of code.
                                </Text>
                                <HStack gap={1}>
                                    <Link to={'https://linkedin.com/in/deependraparmar'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><AiFillLinkedin /> </Button></Link>
                                    <Link to={'https://github.com/DeependraParmar'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><AiOutlineGithub /> </Button></Link>
                                    <Link to={'https://twitter.com/_deependra.05'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><AiOutlineTwitter /> </Button></Link>
                                    <Link to={'https://instagram.com/_deependra.parmar'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><AiFillInstagram /> </Button></Link>
                                    <Link to={'https://deependraparmar.vercel.app/'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><BsGlobe /> </Button></Link>
                                    <Link to={'mailto:deependraparmar1@gmail.com'} target='_blank' rel='noopener noreferrer'><Button size={'sm'} borderRadius={'full'} variant={'outline'} ><AiFillMail /> </Button></Link>
                                </HStack>
                            </Box>
                        </Stack>
                    </VStack>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default About

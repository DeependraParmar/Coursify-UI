import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BiStats } from 'react-icons/bi';
import { FaBlog, FaBook, FaDropbox, FaMoneyCheck, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import notification from "../../assets/audio/notification.mp3";
import MainWrapper from '../../components/MainWrapper';
import TransitionWrapper from '../../components/Transition';
import { AiFillYoutube } from 'react-icons/ai';

const Admin = () => {

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("adminToken");
    window.scrollTo(0,0, 'smooth');
    
    if(!hasPlayed){
      const audio = new Audio(notification);
      audio.volume = 0.2;
      audio.play();
      toast.info("Welcome Boss 😎", {
        position: 'top-center'
      })
    }
    sessionStorage.setItem("adminToken", true);
  }, []);

  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={16} pb={12}>
          <VStack gap={0}>
            <Heading mt={['6', '6', '8', '8']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Admin's Dashboard</Heading>
            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, manage your courses, statistics, earnings and more.</Text>
            <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>

              <AdminCard title={"Track Users"} description={"Get a list of all users, instructors with their details."} icon={<FaUsers />} buttonText={`See all`} route={"/admin/users"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713432830/5_u91lwk.png"} />

              <AdminCard title={"Statistics"} description={"Look into the insights, views, new learners and more."} icon={<BiStats />} buttonText={`See all`} route={"/admin/stats"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713432832/6_rlitpg.png'} />

              <AdminCard title={"All Courses"} description={"Access all the courses present on Coursify here."} icon={<FaBook />} buttonText={`See all`} route={"/admin/courses/all"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713432832/7_djn3hf.png'} />

              <AdminCard title={"Transaction Book"} description={"Introspect all the transactions in the transaction book"} icon={<FaMoneyCheck />} buttonText={`See all`} route={"/admin/transactions/all"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713432834/8_mfdqyi.png'} />

              <AdminCard title={"Instructor's Requests"} description={"Approve Instructor's request by verifying them."} icon={<FaMoneyCheck />} buttonText={`See all`} route={"/admin/approval-requests"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713432829/9_bazytc.png'} />
              
              <AdminCard title={"Personal Dropbox"} description={"Upload images and notes instantly from anywhere."} icon={<FaDropbox />} buttonText={`See all`} route={"/admin/dropbox"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713617821/lwqzbppywn2gegzwxpfj.png'} />

              <AdminCard title={"Blog Panel"} description={"Add, edit, delete and manage blogs on the platform."} icon={<FaBlog />} buttonText={`See all`} route={"/admin/blogs"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713946996/zck9i4fc4myw76vtop6d.png'} />
              
              <AdminCard title={"Youtube Console"} description={"Manage courses for youtube, add, delete, edit and more."} icon={<AiFillYoutube />} buttonText={`See all`} route={"/admin/youtube"} image_url={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1714295485/mjlrv0gficfqrzvagc6s.png'} />

            </Stack>
          </VStack>
        </MainWrapper>
      </TransitionWrapper>
    </>
  )
}

export const AdminCard = ({ title, description, buttonText, route, image_url, icon, image_width }) => {
  return (
    <>
      <VStack _hover={{ boxShadow: '0px 5px 10px rgba(0,0,0,0.3)', transform: 'scale(1.05)' }} height={'full'} transition={'all 0.2s ease-in-out'} width={['85%', '', '30%', '20%']} alignItems={'flex-start'} boxShadow={'lg'} borderRadius={'lg'}>
        <Link to={route} >
          <Box background={'white'}>
            <Image mixBlendMode={'multiply'} filter={'saturate(1.2)'} margin={'auto'} width={image_width} src={image_url} />
          </Box>
          <VStack p={4} gap={2} alignItems={'inherit'}>
            <Text fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', 'xl']} fontWeight={'semibold'} noOfLines={1} >{title}</Text>
            <Text fontSize={'xs'} noOfLines={2}>{description}</Text>
            <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
              <Link to={route} >
                <HStack>
                  {icon}
                  <Text>{buttonText}</Text>
                </HStack>
              </Link>
            </Button>
          </VStack>
        </Link>


      </VStack>
    </>
  )
}

export default Admin;

import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { FaChalkboardTeacher, FaCoins, FaPhoneAlt, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoDocumentLockSharp } from 'react-icons/io5';
import { MdCancelScheduleSend, MdInfo } from "react-icons/md";
import { Link } from 'react-router-dom';
import TransitionWrapper from '../../components/Transition';
import { SiBuymeacoffee } from 'react-icons/si';

const Footer = () => {
  return (
    <>
      <TransitionWrapper>
        <Stack flexDirection={['column','column','row','row']} p={['8', '8', '16', '16']} justifyContent={['flex-start', 'flex-start','center','center']} alignItems={'flex-start'} gap={6} background={`#1b1b1b`}>
          <VStack alignItems={['flex-start','','','']} color={'white'} width={['90%','90%','20%','20%']}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'} >Explore Learning</Text>
          <VStack alignItems={'flex-start'}>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
            </VStack>
          </VStack>

          <VStack alignItems={['flex-start', '', '', '']} color={'white'} width={['90%','90%','20%','18%']}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Terms & Policies</Text>
              <VStack alignItems={'flex-start'}>
                <Link className='footer_links' to={'/terms-and-conditions'}><HStack><IoDocumentLockSharp /> <Text>Terms & Conditions</Text></HStack></Link>
                <Link className='footer_links' to={'/cancellation-and-refund-policy'}><HStack><MdCancelScheduleSend /> <Text>Cancellation</Text></HStack></Link>
                <Link className='footer_links' to={'/refund-policy'}><HStack><FaCoins /> <Text>Refund Policy</Text></HStack></Link>
                <Link className='footer_links' to={'/privacy-policy'}><HStack><FaShieldAlt /> <Text>Privacy Policy</Text></HStack></Link>
              </VStack>
          </VStack>

          <VStack alignItems={['flex-start', '', '', '']} color={'white'} width={['90%','90%','20%','17%']}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Useful Links</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/about'}><HStack> <MdInfo /><Text>About Us</Text></HStack></Link>
                <Link className='footer_links' to={'/contact'}><HStack><FaPhoneAlt /> <Text>Contact Us</Text></HStack></Link>
                <Link className='footer_links' to={'/faq'}><HStack><FaQuestionCircle /> <Text>FAQ</Text></HStack></Link>
                <Link className='footer_links' to={'/register-as-instructor'}><HStack><FaChalkboardTeacher /> <Text>Teach On Coursify</Text></HStack></Link>
                <Link className='footer_links' target='_blank' to={'https://buymeacoffee.com/deependraparmar'}><HStack><SiBuymeacoffee /> <Text>Support Us</Text></HStack></Link>
              </VStack>
          </VStack>

          <VStack alignItems={['flex-start', '', '', '']} color={'white'} width={['90%','90%','20%','17%']}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Social Media</Text>
              <VStack alignItems={'flex-start'} >
                <a className="footer_links" href={'https://www.linkedin.com/in/deependraparmar'}><HStack> <AiFillLinkedin /><Text>LinkedIn</Text></HStack></a>
                <a className="footer_links" href={'https://www.github.com/DeependraParmar'}><HStack><AiFillGithub /> <Text>Github</Text></HStack></a>
                <a className="footer_links" href={'https://learnlogics.page.link/RtQw'}><HStack><AiFillYoutube /> <Text>Youtube</Text></HStack></a>
                <a className="footer_links" href={'mailto:coursify05@gmail.com'}><HStack><IoMdMail /> <Text>Email</Text></HStack></a>
                <a className="footer_links" href={'https://twitter.com/_deependra05'}><HStack><AiFillTwitterCircle /> <Text>Twitter</Text></HStack></a>
              </VStack>
          </VStack>
        </Stack>

        <Stack bg={'#1b1b1b'} gap={'6'} p={'8'} flexDir={['column', 'column', 'row', 'row']}>
          <HStack gap={'1'} width={['95%', '95%', '50%', '50%']} justifyContent={'center'} flexDirection={['column', 'column', 'row', 'row']}>
            <Text color={'white'} fontSize={'sm'}>Payments Secured with</Text>

            <Stack gap={'3'} flexDir={'row'} >
              <Image ml={'2'} display={'inline'} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618479/mdg9zz3rueykmazmhoeh.png'} width={'24'} />
              <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618463/o1cc8nxegtggcrwzytng.png'} display={'inline'} width={'8'} />
              <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618501/z25lub09y78q61clr4c1.png'} display={'inline'} width={'12'} />
              <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618493/jp3lzatc2vrdmfs8ryf4.png'} display={'inline'} width={'12'} />
            </Stack>
          </HStack>
          <Text textAlign={['center', 'center', 'center', 'center']} width={['95%', '95%', '50%', '50%']} color={'whiteAlpha.700'} fontSize={'sm'}>
            {new Date().getFullYear()} © Coursify | All Rights Reserved
          </Text>
        </Stack>
      </TransitionWrapper>
    </>
  )
}

export default Footer;
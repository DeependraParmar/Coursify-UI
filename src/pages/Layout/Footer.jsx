import { Grid, GridItem, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaCoins, FaMoneyCheck, FaPhoneAlt, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoDocumentLockSharp } from 'react-icons/io5';
import { MdCancelScheduleSend, MdInfo, MdLocalShipping } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/favicon.png';
import mastercard from '../../assets/images/mastercard.png';
import razorpay from '../../assets/images/razorpay.png';
import upi from '../../assets/images/upi.png';
import visa from '../../assets/images/visa.png';
import TransitionWrapper from '../../components/Transition';

const Footer = () => {
  return (
    <>
      <TransitionWrapper>
        <Grid p={['8', '8', '16', '16']} templateColumns={['1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} placeItems={['flex-start','center','center','center']} gap={6} background={`#1b1b1b`}>
          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={['flex-start']}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'} >Explore Learning</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
                <Link className='footer_links' to={'/courses'}><HStack><Text>Courses</Text></HStack></Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Important Links</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/terms-and-conditions'}><HStack><IoDocumentLockSharp /> <Text>Terms & Conditions</Text></HStack></Link>
                <Link className='footer_links' to={'/shipping'}><HStack><MdLocalShipping /> <Text>Shipping Policy</Text></HStack></Link>
                <Link className='footer_links' to={'/pricing'}><HStack><FaMoneyCheck /> <Text>Pricing</Text></HStack></Link>
                <Link className='footer_links' to={'/cancellation'}><HStack><MdCancelScheduleSend /> <Text>Cancellation</Text></HStack></Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Useful Links</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/about'}><HStack> <MdInfo /><Text>About Us</Text></HStack></Link>
                <Link className='footer_links' to={'/contact'}><HStack><FaPhoneAlt /> <Text>Contact Us</Text></HStack></Link>
                <Link className='footer_links' to={'/refunds'}><HStack><FaCoins /> <Text>Refund Policy</Text></HStack></Link>
                <Link className='footer_links' to={'/privacy-policy'}><HStack><FaShieldAlt /> <Text>Privacy Policy</Text></HStack></Link>
                <Link className='footer_links' to={'/faq'}><HStack><FaQuestionCircle /> <Text>FAQ</Text></HStack></Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <Text mb={'4'} fontWeight={'semibold'} fontSize={'sm'}>Social Media</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/about'}><HStack> <AiFillLinkedin /><Text>LinkedIn</Text></HStack></Link>
                <Link className='footer_links' to={'/contact'}><HStack><AiFillGithub /> <Text>Github</Text></HStack></Link>
                <Link className='footer_links' to={'/refunds'}><HStack><AiFillYoutube /> <Text>Youtube</Text></HStack></Link>
                <Link className='footer_links' to={'/privacy-policy'}><HStack><IoMdMail /> <Text>Email</Text></HStack></Link>
                <Link className='footer_links' to={'/faq'}><HStack><FaQuestionCircle /> <Text>FAQ</Text></HStack></Link>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        <Stack bg={'#1b1b1b'} gap={'6'} p={'8'} flexDir={['column', 'column', 'row', 'row']}>
          <HStack gap={'1'} width={['95%', '95%', '50%', '50%']} justifyContent={'center'} flexDirection={['column', 'column', 'row', 'row']}>
            <Text color={'white'} fontSize={'sm'}>Payments Secured with</Text>

            <Stack gap={'3'} flexDir={'row'} >
              <Image ml={'2'} display={'inline'} src={razorpay} width={'24'} />
              <Image src={mastercard} display={'inline'} width={'8'} />
              <Image src={visa} display={'inline'} width={'12'} />
              <Image src={upi} display={'inline'} width={'12'} />
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
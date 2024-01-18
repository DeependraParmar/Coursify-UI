import React from 'react'
import { MdOutlineBook } from "react-icons/md";
import { Box, Button, Grid, GridItem, HStack, Image, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import logo from '../../assets/images/favicon.png'
import { Link } from 'react-router-dom'
import razorpay from '../../assets/images/razorpay.png'
import mastercard from '../../assets/images/mastercard.png'
import visa from '../../assets/images/visa.png'
import upi from '../../assets/images/upi.png'
import TransitionWrapper from '../../components/Transition';

const Footer = () => {
  return (
    <>
      <TransitionWrapper>
        <Grid p={['8', '8', '16', '16']} templateColumns={['1fr', '2fr 1fr 1fr', '2fr 1fr 1fr', '2fr 1fr 1fr']} gap={6} background={`#1b1b1b`}>
          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <HStack>
                <Image src={logo} width={'12'} />
                <Text fontFamily={'Young Serif'} fontSize={['1.2rem', '1.5rem', '1.5rem', '1.8rem']}>Coursify</Text>
              </HStack>
              <UnorderedList pl={'2'} fontSize={'xs'}>
                <ListItem>Master in-demand skills and certifications with expert-led courses across diverse topics, from tech to personal growth.</ListItem>
                <ListItem>Learn on your terms, at your own pace, with on-demand formats that fit seamlessly into your busy schedule.</ListItem>
                <ListItem>Dive into a boundless ocean of knowledge, featuring thousands of courses tailored to your passions and goals.</ListItem>
                <ListItem>Join a vibrant network of learners and instructors, sharing experiences, forging connections, and fueling your growth.</ListItem>
              </UnorderedList>
            </VStack>
          </GridItem>

          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <Text mb={'2'} fontWeight={'semibold'} fontSize={'sm'}>Explore Learning</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem color={'white'} height={'100%'}>
            <VStack alignItems={'flex-start'}>
              <Text mb={'2'} fontWeight={'semibold'} fontSize={'sm'}>Explore Learning</Text>
              <VStack alignItems={'flex-start'} >
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
                <Link className='footer_links' to={'/courses'}>Courses</Link>
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
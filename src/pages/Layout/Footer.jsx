import React from 'react'
import { MdOutlineBook } from "react-icons/md";
import { Button, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'
import logo from '../../assets/images/favicon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Grid p={'8'} templateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)', 'repeat(4,1fr)']} gap={6} background={`#1b1b1b`}>
        <GridItem color={'white'}>
          <VStack border={'1px solid white'} alignItems={'flex-start'}>
            <HStack mb={'2'}>
              <Image src={logo} width={'12'} />
              <Text fontFamily={'Young Serif'} fontSize={['1.2rem', '1.5rem', '1.5rem', '2rem']}>Coursify</Text>
            </HStack>
            <Text fontWeight={'semibold'}>Learn What Matters</Text>
          </VStack>
        </GridItem>

        <GridItem color={'white'}>
          <VStack alignItems={'flex-start'} border={'1px solid white'}>
            <Text mb={'2'} fontWeight={'semibold'}>Explore Learning</Text>
            <VStack alignItems={'flex-start'} gap={'0'}>
              <Link className='footer_links' to={'/courses'}>
                <HStack gap={'1'}>
                  <MdOutlineBook />
                  <Text fontSize={'sm'}>Courses</Text>
                </HStack>
              </Link>
              <Link className='footer_links' to={'/courses'}>
                <HStack gap={'1'}>
                  <MdOutlineBook />
                  <Text fontSize={'sm'}>Popular Courses</Text>
                </HStack>
              </Link>
              <Link className='footer_links' to={'/courses'}>
                <HStack gap={'1'}>
                  <MdOutlineBook />
                  <Text fontSize={'sm'}>Courses</Text>
                </HStack>
              </Link>
              <Link className='footer_links' to={'/courses'}>
                <HStack gap={'1'}>
                  <MdOutlineBook />
                  <Text fontSize={'sm'}>Courses</Text>
                </HStack>
              </Link>

            </VStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack border={'1px solid white'} alignItems={'flex-start'}>
            <Image src={logo} width={'24'} />
          </VStack>
        </GridItem>

        <GridItem>
          <VStack border={'1px solid white'}>
            <Image src={logo} width={'24'} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  )
}

export default Footer

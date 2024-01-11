import { Box, Grid, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import contact_image from "../../assets/images/contact.jpg"
import MainWrapper from '../../components/MainWrapper'

const Contact = () => {
  return (
    <>
        <MainWrapper pt={'16'} >
              <Stack direction={['column', 'column', 'column', 'row']} alignItems={'center'} justifyContent={'center'} gap={[8,4,2,2]}>
                  <Box width={['100%','100%','100%','50%']} >
                      <Image src={contact_image} width={'100%'} height={'100%'} objectFit={'cover'} objectPosition={'center'} />
                  </Box>
                  <Box width={['100%', '100%', '100%', '50%']} >
                      <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.5rem','2rem','2.5rem','2.5rem']} mb={'2rem'} >Post us a Direct Message</Heading>
                      <form action="" className='contact_form'>
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="Email" />
                          <textarea name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
                            <button type='submit'>Send Message</button>
                      </form>
                  </Box>
              </Stack> 
        </MainWrapper>
    </>
  )
}

export default Contact

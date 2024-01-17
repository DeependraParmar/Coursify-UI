import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Heading } from '@chakra-ui/react'

const Blogs = () => {
  return (
    <>
        <TransitionWrapper>
            <MainWrapper pt={'24'} pb={'12'}>
                <Box width={['95%','95%','85%','85%']} height={'60vh'} margin={'auto'}>
                      <Heading textAlign={'center'} fontFamily={'Young Serif'}>No blogs at the moment😢</Heading>
                </Box>
            </MainWrapper>
        </TransitionWrapper> 
    </>
  )
}

export default Blogs

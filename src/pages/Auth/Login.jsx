import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <>
        <Box display={'grid'} gridTemplateColumns={['2','2','2','1']} >
            <Box bg={'#5000bb'}>
                <Heading color={'white'}>Welcome to <Text>Coursify</Text> </Heading>
            </Box>
            <Box>

            </Box>
        </Box> 
    </>
  )
}

export default Login

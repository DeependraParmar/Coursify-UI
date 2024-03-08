import React, { useState } from 'react'
import MainWrapper from '../../components/MainWrapper'
import { Box, Button,HStack, Heading, Input, InputGroup, InputLeftElement, List, ListIcon, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { FaLink } from 'react-icons/fa'
import TransitionWrapper from '../../components/Transition'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
  return (
    <>
        <TransitionWrapper>
              <MainWrapper pt={'24'} pb={'12'}>
                  <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                      <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Forgot Password</Heading>
                      <InputGroup spacing='4' >
                          <InputLeftElement pointerEvents={'none'}>
                              <AiOutlineMail size='18' />
                          </InputLeftElement>
                          <Input type='email' placeholder='johndoe@gmail.com' focusBorderColor='#8141bb' fontSize={'sm'} contentEditable='true' required={true} onChange={(e) => setEmail(e.target.value)} />
                      </InputGroup>


                      <HStack width={'full'} justifyContent={'center'}>
                          <Button fontSize={'sm'} width={['full', 'full', 'inherit', 'inherit']} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Get Reset Link <FaLink /></Button>
                      </HStack>

                      <Box
                          bg="#e2f2ff"
                          p={4}
                          border="1px"
                          borderColor="gray.100"
                          borderRadius="md"
                          textAlign="left"
                          width={'100%'}

                      >
                          <Text fontSize="md" mb={'2'} fontWeight={'semibold'} fontFamily={'Young Serif'}>Pro Tips: ✨</Text>
                          <UnorderedList fontSize={'sm'}>
                              <ListItem>At least 8 characters long</ListItem>
                              <ListItem>Contains uppercase letters</ListItem>
                              <ListItem>Contains lowercase letters</ListItem>
                              <ListItem>Includes at least one number</ListItem>
                              <ListItem>Includes at least one special character</ListItem>
                              <ListItem>Always save you passwords securely</ListItem>
                              <ListItem>Change your passwords frequently</ListItem>
                          </UnorderedList>
                      </Box>
                  </VStack>
              </MainWrapper>
        </TransitionWrapper>
    </>
  )
}

export default ForgotPassword

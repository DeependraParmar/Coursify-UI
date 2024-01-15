import React, { useState } from 'react'
import MainWrapper from '../../components/MainWrapper'
import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, List, ListIcon, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { FaLink } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { MdLoop } from 'react-icons/md'
import TransitionWrapper from '../../components/Transition'

const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show);

  return (
    <>
    <TransitionWrapper>
      <MainWrapper pt={'24'} pb={'12'}>
        <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'4'}>
          <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Reset Password</Heading>
          
          <InputGroup size='md'>
            <InputLeftElement>
              <RiLockPasswordLine />
            </InputLeftElement>
            <Input
              type={show ? 'text' : 'password'}
              placeholder='Enter your Old Password'
              focusBorderColor='#5000bb'
              fontSize={'sm'}
              required={true}
              onChange={e => setOldPassword(e.target.value)}
            />
            <InputRightElement textAlign={'center'}>
                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                {show ? <BiHide /> : <BiShowAlt />}
              </Button>
            </InputRightElement>
          </InputGroup>


          <InputGroup size='md'>
            <InputLeftElement>
              <RiLockPasswordLine />
            </InputLeftElement>
            <Input
              type={show ? 'text' : 'password'}
              placeholder='Enter you New Password'
              focusBorderColor='#5000bb'
              fontSize={'sm'}
              required={true}
              onChange={e => setNewPassword(e.target.value)}

            />
            <InputRightElement>
              <Button display={'flex'}  variant={'unstyled'} size='sm' onClick={handleClick}>
                {show ?<BiHide />:<BiShowAlt />}
              </Button>
            </InputRightElement>
          </InputGroup>


          <HStack width={'full'} justifyContent={'center'}>
            <Button fontSize={'sm'} width={['full', 'full', 'inherit', 'inherit']} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Reset Password<MdLoop /></Button>
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
              <ListItem>Always saves you passwords securely</ListItem>
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

import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Button, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import notfound from '../../assets/images/404.avif'

const NotFound = () => {
  return (
    <TransitionWrapper>
      <MainWrapper pt={24} pb={12}>
        <VStack width={['95%', '95%','30%', '35%']} margin={'auto'}>
          <Image src={notfound} />
          <Button><Link to={'/'}>Back to Home</Link></Button>
        </VStack>
      </MainWrapper>
      
    </TransitionWrapper>
  )
}

export default NotFound

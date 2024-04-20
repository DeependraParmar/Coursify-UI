import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Button, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <TransitionWrapper>
      <MainWrapper pt={24} pb={12}>
        <VStack width={['95%', '95%','30%', '35%']} margin={'auto'}>
          <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713617996/b9oyjhzrjdf9yeinucmp.avif'} />
          <Button><Link to={'/'}>Back to Home</Link></Button>
        </VStack>
      </MainWrapper>
      
    </TransitionWrapper>
  )
}

export default NotFound

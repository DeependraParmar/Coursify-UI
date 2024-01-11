import { Box } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({children, background,pt,pb}) => {
  return (
    <>
      <Box width={['100%','95%','95%','95%']} pt={pt} pb={pb} margin={'auto'} background={background}>
            {
                children
            }
      </Box>
    </>
  )
}

export default MainWrapper

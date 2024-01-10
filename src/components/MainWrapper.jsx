import { Box } from '@chakra-ui/react'
import React from 'react'

const MainWrapper = ({children, background}) => {
  return (
    <>
      <Box width={['95%','95%','95%','95%']} py={'20'} margin={'auto'} background={background}>
            {
                children
            }
      </Box>
    </>
  )
}

export default MainWrapper

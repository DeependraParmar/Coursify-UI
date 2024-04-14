import { Box } from '@chakra-ui/react'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const MainLoader = () => {
  return (
      <Box w={'full'} height={'60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}><ClipLoader color={'#8141bb'} size={60} /></Box>
  )
}

export default MainLoader

import { Grid, GridItem } from '@chakra-ui/react'


const GridCourseWrapper = ({children, paddingY}) => {
  return (
    <Grid templateColumns={['1fr', 'repeat(3,1fr)', 'repeat(4,1fr)', 'repeat(5,1fr)']} px={[5,8,12,18]} alignContent={'center'} justifyContent={'center'} margin={'auto'} py={paddingY} gap={6}>
        {children}
    </Grid>
  )
}

export default GridCourseWrapper

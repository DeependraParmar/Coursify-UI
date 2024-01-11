import { Grid, GridItem } from '@chakra-ui/react'


const GridCourseWrapper = ({children, paddingY}) => {
  return (
    <Grid templateColumns={['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)','repeat(3,1fr)', 'repeat(4,1fr)','repeat(5,1fr)']} alignContent={'center'} justifyContent={'center'} margin={'auto'} py={paddingY} gap={6} width={['85%','95%','95%','95%']}>
        {children}
    </Grid>
  )
}

export default GridCourseWrapper;

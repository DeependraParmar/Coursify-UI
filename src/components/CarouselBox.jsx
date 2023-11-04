import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CarouselBox({ title, description, button_url, banner, button_text }) {
    return (
        <>
            <Box height={'100%'} width={'90%'} bg={'#e2f2ff'} margin={'auto'} display={'flex'} flexDirection={['column-reverse','row','row','row']} alignItems={'center'} justifyContent={['space-around']} pb={['10','2','1','0']} >

                <Stack gap={['2','2','2','3']} bg={'white'} color={'black'} boxShadow={'0px 4px 35px #85858580'} width={['90%', '50%', '40%', '40%']} top={'23%'} left={'12'} textAlign={'left'} p={['6','6','6','8']}>
                    <Heading color={'blackAlpha.900'} fontFamily={"Young Serif"} fontSize={['lg','lg','xl','3xl']}>{title}</Heading>
                    <Text noOfLines={3} fontSize={['xs','xs','sm','sm']} fontWeight={'normal'}>{description}</Text>
                    <Link to={button_url}><Button colorScheme="purple" variant={'solid'} fontSize={['xs', 'xs', 'sm', 'sm']} fontWeight={['medium','medium','medium','bold']} size={['sm','sm','md','md']}>{button_text}</Button></Link>
                </Stack>
                <Box textAlign={'right'} width={['90%','30%','40%','40%']} >
                    <Image src={banner} filter={'saturate(1.5)'} />
                </Box>
            </Box>
        </>
    )
}

export default CarouselBox;
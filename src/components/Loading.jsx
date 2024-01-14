import {
    Box,
    Center,
    Spinner,
    Text,
} from '@chakra-ui/react';
import TransitionWrapper from './Transition';


function LoadingComponent() {

    return (
        <Box as="section" w="full" h="100vh" position={'fixed'} top={0} zIndex={'1000'} display="flex" alignItems="center" background={'rgba(0, 0, 0, 0.75)'} justifyContent="center">
            <Center py={6} px={8} background={'white'} rounded="md" shadow="md" display={'flex'} flexDir={'column'} gap={'2'}>
                <Spinner color='#8141bb' thickness="3px" size={'xl'} emptyColor='purple.100' />
                <Text fontWeight={'semibold'}>Loading</Text>
            </Center>
        </Box>
    );
}

export default LoadingComponent;

import { AspectRatio, Button, ButtonGroup, Image, Text, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const FreeCourseCard = ({ image, title, description, redirect_url }) => {
    return (
        <VStack width={['85%', '', '30%', '22%']} borderRadius={'lg'} height={'full'} bg={'white'} boxShadow={'2px 2px 10px #85858580'} gap={'1'} alignItems={'flex-start'} >
            <AspectRatio ratio={16 / 9} width={'full'} >
                <Image src={image} objectFit={'cover'} />
            </AspectRatio>
            <VStack width={'full'} gap={'3'} p={'3'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <VStack width={'full'} gap={0} alignItems={'flex-start'}>
                    <Text fontWeight={'semibold'} fontSize={'16'} noOfLines={2}>{title}</Text>
                    <Text width={'full'} fontSize={'xs'} noOfLines={2} dangerouslySetInnerHTML={{ __html: description }} />
                </VStack>
                <ButtonGroup>
                    <Link to={`${redirect_url}/home`}>
                        <Button size={'sm'} colorScheme='facebook' gap={2}>Watch<BiLinkExternal /> </Button>
                    </Link>
                    <Tooltip hasArrow label='Visit Channel' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                        <Button size={'sm'} colorScheme='red' rounded={'full'} gap={2}><Link to={'https://learnlogics.page.link/RtQw'} target='_blank'><AiFillYoutube size={18} /></Link></Button>
                    </Tooltip>
                </ButtonGroup>
            </VStack>
        </VStack>
    )
}

export default FreeCourseCard

import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbArrowBigUpLinesFilled } from 'react-icons/tb'

const BottomToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                showButton && <Button rounded={'full'} size={'lg'} className='navButton' colorScheme={'purple'} onClick={scrollToTop} position={'fixed'} bottom={[4, 4, 8, 8]} right={[4, 4, 8, 8]}><TbArrowBigUpLinesFilled /></Button>
            }
        </>
    )
}

export default BottomToTop;
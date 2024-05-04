import React, { useEffect } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Heading, Stack, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getYoutubeCourses } from '../../redux/actions/youtube'
import FreeCourseCard from '../../components/FreeCourseCard'
import { Link } from 'react-router-dom'
import MainLoader from '../../components/MainLoader'

const FreeCourses = () => {
    const { loading, error, message, courses } = useSelector(state => state.youtube);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getYoutubeCourses());
    }, []);

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <Heading size="xl" fontFamily={"Young Serif"} textAlign="center">Best Free Courses</Heading>
                <VStack width={['95%', '95%', '85%', '85%']} margin={'auto'}>
                    <Stack mt={'2rem'} width={'full'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'flex-start']}>
                        {
                            !loading && courses ? courses.map((course, index) => (
                                <FreeCourseCard image={course.poster.url} title={course.title} description={course.description} redirect_url={`/free-courses/${course._id}`} />
                            )):
                            <MainLoader />
                        }
                    </Stack>
                </VStack>

            </MainWrapper>

        </TransitionWrapper>
    )
}

export default FreeCourses

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Input, InputGroup, InputLeftElement, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCloudUploadFill } from 'react-icons/bs'
import { FaAngleRight } from 'react-icons/fa'
import { IoLinkOutline } from 'react-icons/io5'
import { MdOutlineSubtitles, MdVideocam } from 'react-icons/md'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { addLecture } from '../../redux/actions/instructor'
import { ChangeProfilePhoto } from '../Profile/Profile'
import { toast } from 'react-toastify'

const InstructorCourseAddLecture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.instructor);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    if (video && videoPrev)
      onClose();
  }

  const addLectureHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('notes', notes);
    formData.append('file', video);

    dispatch(addLecture(formData, id));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate(`/instructor/courses/${id}`);
    }
  }, [dispatch, error, message]);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['link'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'direction': 'rtl' }],
      [{ 'align': [] }],
    ],
  };
  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'header',
    'link',
    'direction',
    'align',
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <TransitionWrapper>
          {
            loading && <LoadingComponent message='Uploading...' />
          }
        <MainWrapper pt={24} pb={12}>
          <VStack gap={6}>
            <HStack justifyContent={'flex-start'}>
              <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                <BreadcrumbItem>
                  <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link className='hover-underline' to='/instructor/courses'>Courses</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link className='hover-underline' to={`/instructor/courses/${useParams().id}`}>Course</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink color={'purple'} href='#'>Add Lecture</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>

            <VStack width={'full'} gap={0}>
              <Heading textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Add New Lecture</Heading>
              <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, add lectures in the selected course.</Text>
            </VStack>

            <VStack width={['95%', '95%', '40%', '40%']} alignItems={'flex-start'} spacing={'2'}>
              <InputGroup spacing='4' >
                <InputLeftElement pointerEvents={'none'}>
                  <MdOutlineSubtitles size='18' />
                </InputLeftElement>
                <Input type='text' value={title} placeholder='Enter Lecture Title' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setTitle(e.target.value)} />
              </InputGroup>

              <Box width={'full'} borderRadius={'8px'} height={'150px'} border={'1px solid #e2e8f0'}>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  placeholder='Enter Lecture Description in a detailed manner...'
                  modules={modules}
                  formats={formats}
                  bounds={'#root'}
                  theme="snow"
                  className='quill'
                  style={{ height: '70%' }}
                />
              </Box>

              <InputGroup _focus={'none'} spacing='4' >
                <InputLeftElement pointerEvents={'none'}>
                  <IoLinkOutline size='18' />
                </InputLeftElement>
                <Input type='text' value={notes} placeholder='Enter Link to Notes' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setNotes(e.target.value)} />
              </InputGroup>

              <Button variant={'outline'} size={'sm'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><MdVideocam /> Select Video Lecture</Button>
              {
                videoPrev && <Box position={'relative'} width={'full'}>
                  <video src={videoPrev} controlsList='nodownload' controls onContextMenu={e => e.preventDefault()} />
                  <Button size={'sm'} rounded={'full'} colorScheme='blackAlpha' position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { setVideo(''); setVideoPrev('') }}><AiOutlineClose /></Button>
                </Box>
              }
              <ChangeProfilePhoto type='video' isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} image={video} setImage={setVideo} imagePrev={videoPrev} setImagePrev={setVideoPrev} AvatarType='square' ModalTitle='Select Lecture to Add' />

              <Button onClick={e => addLectureHandler(e)} isDisabled={title.length < 10 || description.length < 10 || !video || !videoPrev} fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Upload <BsCloudUploadFill /></Button>
            </VStack>

          </VStack>
        </MainWrapper>
      </TransitionWrapper >
    </>
  )
}

export default InstructorCourseAddLecture;

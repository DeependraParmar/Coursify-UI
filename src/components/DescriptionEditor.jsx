import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@chakra-ui/react';

const DescriptionEditor = ({ value, onChange, readOnly }) => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],['link'],

        ],
    };

    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'indent',
        'link',
        'color',
        'background',
        'align',
    ];

    return (
        <Box>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                theme="snow"
                className='quill'
                readOnly={readOnly}
            />
        </Box>
    );
};

export default DescriptionEditor;
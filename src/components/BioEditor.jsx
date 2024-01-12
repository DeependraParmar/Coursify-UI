import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@chakra-ui/react';

const BioEditor = ({ value, onChange,readOnly }) => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }]
        ],
    };

    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'lists',
        'bullet'
    ];

    return (
        <Box>
            <ReactQuill
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                modules={modules}
                formats={formats}
                theme="snow"
                className='quill'
            />
        </Box>
    );
};

export default BioEditor;

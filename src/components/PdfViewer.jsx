import { Box } from '@chakra-ui/react';
import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
    return (
        <Box w={'full'} h={['70vh', '90vh', '100vh','127vh']}>
            <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                type='application/pdf'
            >
                This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
        </Box>
    );
};

export default PdfViewer;

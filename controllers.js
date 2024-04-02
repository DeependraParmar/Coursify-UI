import DOMPurify from 'dompurify';


export const fileUploadCSS = {
    cursor: "pointer",
    marginLeft: "-5px",
    width: '110%',
    border: "none",
    height: '100%',
    backgroundColor: "transparent",
}

export const sanitizedHTML = (html) => {
    if(!html) return '';

    const regex = /^['"]+|['"]+$/g;
    const removedQuotes = html.replace(regex, '');
    const result = DOMPurify.sanitize(removedQuotes);
    return result;
}

import ReactQuill from "react-quill";

export default function Editor({value, onChange}) {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'size': ['small', false, 'large', 'huge'] }], 
            [{ 'font': [] }], 
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    };
    return (
        <ReactQuill value={value} theme={'snow'}onChange={onChange} modules={modules}/>
    );
}
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



function Write() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const write = () => {
        Axios.post("http://localhost:8000/insert",
            {
                title: title,
                content: content,
            })
            .then((res) => {
                alert('글등록 완료!');
                navigate('/');
                console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
    };


    const handleChangeTitle = (e: any) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    const handleChangeContent = (e: any) => {
        console.log(e.target.value);
        setContent(e.target.value);
    }





    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" onChange={handleChangeTitle} placeholder="제목을 입력하세요" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" onChange={handleChangeContent} placeholder="내용을 입력하세요" />
            </Form.Group>
            <Button variant="info" onClick={write}>
                작성완료
            </Button>
        </>
    );
}

export default Write;

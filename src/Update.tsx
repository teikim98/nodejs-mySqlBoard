import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

interface BoardType {
    BOARD_ID: number,
    BOARD_TITLE: string,
    BOARD_CONTENT: string,
    REGISTER_ID: string,
    REGISTER_DATE: string,
    UPDATER_ID: null,
    UPDATER_DATE: string
}

function Update() {

    const [board, setBoard] = useState<BoardType[]>([])
    const { id } = useParams();
    const numberId = Number(id);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");
    const navigate = useNavigate();



    const DetailId = (did: BoardType) => {
        return (did.BOARD_ID === numberId);
    }
    const detailInside = board.find(result);



    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/detail");
            setBoard(response.data);

        } catch (e) {
        }
    };


    const updateSet = () => {
        if (detailInside !== undefined) {
            setContent(detailInside?.BOARD_CONTENT);
        }
        if (detailInside !== undefined) {
            setContent(detailInside?.BOARD_TITLE);
        }
    }

    useEffect(() => {
        fetchData();
        updateSet();
    }, []);






    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const update = () => {
        Axios.post("http://localhost:8000/update", {
            title: title,
            content: content,
            id: id,
        })
            .then((res) => {
                console.log("수정 내용 : " + res);
                alert('글수정 완료!');
                navigate('/');
            })
            .catch((e) => {
                console.error(e);
            });
    };


    return (


        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" onChange={handleChangeTitle} placeholder="제목을 입력하세요" value={title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" onChange={handleChangeContent} placeholder="내용을 입력하세요" value={content} />
            </Form.Group>
            <Button variant="info" onClick={update}>
                작성완료
            </Button>
        </>
    );
}

export default Update;

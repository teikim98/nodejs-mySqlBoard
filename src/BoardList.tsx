import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { off } from "process";

interface BoardType {
    id: number;
    title: string;
    registerId: string;
    registerDate: string;
}

function BoardList(props: any) {
    const [error, setError] = useState<any>();
    const [boardList, setBoardList] = useState<any[]>([]);
    const [checkList, setCheckList] = useState<any>();
    const [modify, setModify] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/list");
                setBoardList(response.data);
                console.log(boardList);
            } catch (e) {
                setError(e);
                console.log(error);
            }
        };
        fetchData();
        console.log("loading over!");
    }, []);

    if (error) return <div>에러</div>;


    const onCheckChange = () => {
        setModify(prev => !prev);
        console.log(modify);
    }

    const Board = ({ id, title, registerId, registerDate }: BoardType) => {
        return (
            <tr>
                <td>
                    <input type="radio" onChange={onCheckChange} ></input>
                </td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{registerId}</td>
                <td>{registerDate}</td>
            </tr>
        );
    };

    return (
        <div className="mb-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((v: any, index) => {
                            return (
                                <Board
                                    id={v.BOARD_ID}
                                    title={v.BOARD_TITLE}
                                    registerId={v.REGISTER_ID}
                                    registerDate={v.REGISTER_DATE}
                                    key={index}
                                />
                            );
                        })}
                </tbody>
            </Table>
            <Button variant="info"><Link to='/write'>글쓰기</Link></Button>
            <Button variant="secondary" onClick={() => { }}><Link to='/write'>수정하기</Link></Button>
            <Button variant="danger">삭제하기</Button>
        </div>
    );
}



export default BoardList;

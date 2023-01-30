import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

interface BoardType {
    id: number;
    title: string;
    registerId: string;
    registerDate: string;
}

function BoardList(props: any) {
    const [error, setError] = useState<any>();
    const [boardList, setBoardList] = useState<BoardType[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/list");
                setBoardList(response.data);

            } catch (e) {
                setError(e);
                console.log(error);
            }
        };
        fetchData();
        console.log("loading over!");
    }, []);
    console.log(boardList);

    if (error) return <div>에러</div>;






    return (
        <div className="mb-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
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

const Board = ({ id, title, registerId, registerDate }: BoardType) => {
    return (
        <tr>
            <td>{id}</td>
            <td><Link to={`/detail/${id}`}>{title}</Link></td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};



export default BoardList;

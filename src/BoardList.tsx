import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

interface BoardType {
    id: number;
    title: string;
    registerId: string;
    registerDate: string;
}

function BoardList() {
    const [error, setError] = useState<any>();
    const [boardList, setBoardList] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/list");
                setBoardList(response.data);
                console.log(boardList);
            } catch (e) {
                setError(e);
            }
        };
        fetchData();
        console.log("loading over!");
    }, []);

    if (error) return <div>에러</div>;

    return (
        <div>
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
                        // eslint-disable-next-line
                        boardList.map((v: any) => {
                            return (
                                <Board
                                    id={v.BOARD_ID}
                                    title={v.BOARD_TITLE}
                                    registerId={v.REGISTER_ID}
                                    registerDate={v.REGISTER_DATE}
                                />
                            );
                        })}
                </tbody>
            </Table>
            <Button variant="info">글쓰기</Button>
            <Button variant="secondary">수정하기</Button>
            <Button variant="danger">삭제하기</Button>
        </div>
    );
}

const Board = ({ id, title, registerId, registerDate }: BoardType) => {
    return (
        <tr>
            <td>
                <input type="checkbox"></input>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

export default BoardList;

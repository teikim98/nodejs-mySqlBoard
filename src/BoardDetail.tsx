import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Button from "react-bootstrap/Button";

interface BoardType {
    BOARD_ID: number,
    BOARD_TITLE: string,
    BOARD_CONTENT: string,
    REGISTER_ID: string,
    REGISTER_DATE: string,
    UPDATER_ID: null,
    UPDATER_DATE: string
}

function BoardDetail() {

    const [board, setBoard] = useState<BoardType[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/detail");
            setBoard(response.data);
        } catch (e) {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const { id } = useParams();
    const numberId = Number(id);

    console.log(board);

    const DetailId = (did: BoardType) => {
        return (did.BOARD_ID === numberId);
    }
    const detailInside = board.find(DetailId);
    console.log(detailInside);

    return (
        <div>
            <h2>{detailInside?.BOARD_TITLE}</h2>
            <div>
                {detailInside?.BOARD_CONTENT}
            </div>
            <Button variant="secondary"><Link to='/update/1'>수정하기</Link></Button>
        </div>
    );
}
export default BoardDetail;
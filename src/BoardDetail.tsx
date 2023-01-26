
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

function BoardDetail() {

    const [board, setBoard] = useState<BoardType[]>([]);

    const { id } = useParams();

    const numberId = Number(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/detail");
                setBoard(response.data);
                console.log(board);
            } catch (e) {
            }
        };
        fetchData();
        console.log("loading over!");
    }, []);



    const DetailId = (did: BoardType) => {
        return (did.BOARD_ID === numberId);
    }

    const detailInside = board.find(DetailId);

    console.log(detailInside);

    return (
        <div>
            detail
        </div>
    );
}

export default BoardDetail;
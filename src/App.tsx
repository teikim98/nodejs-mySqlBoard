import "bootstrap/dist/css/bootstrap.min.css";
import BoardList from "./BoardList";
import Write from "./Write";
import { Route, Routes } from "react-router-dom";
import BoardDetail from "./BoardDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BoardList />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/detail" element={<BoardDetail />}></Route>
        <Route path="/detail/:id" element={<BoardDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

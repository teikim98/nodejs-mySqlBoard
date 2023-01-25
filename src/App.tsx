import "bootstrap/dist/css/bootstrap.min.css";
import BoardList from "./BoardList";
import Write from "./Write";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BoardList />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </>
  );
}

export default App;

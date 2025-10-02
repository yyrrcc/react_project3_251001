import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <div className="App">
      <div>
        {/* 네비게이션 링크 이동 */}
        <Link to={"/"}>홈 </Link>
        <Link to={"/new"}>일기쓰기 </Link>
        <Link to={"/diary"}>일기장 </Link>
        <Link to={"/edit"}>일기수정 </Link>
      </div>
      {/* path, element : Controller @requestMapping 느낌 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

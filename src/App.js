import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import React, { useEffect, useReducer, useRef, useState } from "react";

//  App.js에서 일기 State 값을 공급하기 위한 Context.. (일반 값, dispatch 함수 나누기)
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(data, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newDiary, ...data]; // [새로 만들어진 일기1개, ... 기존 일기 객체들의 배열]
    case "UPDATE":
      return data.map((it) =>
        // 기존 일기들 중에서 targetId와 동일한 일기 1개를 가져오고 updateDiary로 바꿔주기
        String(it.id) === String(action.updateDiary.id) ? { ...action.updateDiary } : it
      );
    case "DELETE":
      // id가 일치하지 않은 것들을 제외하고(필터링) 새로운 배열을 만들어서 반환해라
      return data.filter((it) => String(it.id) !== String(action.targetId));
    case "INIT":
      return action.data;
    default:
      return data;
  }
}

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false); // 데이터 로딩 상태 알려주기 위해서

  const idRef = useRef(0); // 기본키 id
  const [data, dispatch] = useReducer(reducer, []); // data : 일기 객체들의 배열

  // mockDate 넣어주기
  useEffect(() => {
    dispatch({ type: "INIT", data: mockData });
    setIsDataLoaded(true);
  }, []);

  // CRUD
  const onCreate = (date, content, emotionId) => {
    dispatch({ type: "CREATE", newDiary: { id: idRef.current, date: new Date(date).getTime(), content, emotionId } });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      updateDiary: {
        id: targetId, // 수정 할 일기 1개의 id
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  // 데이터 로딩 상태에 따라 (false)데이터 불러오는 중이라고 알려주거나 (true)데이터 보여주거나
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
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
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

const mockData = [
  { id: "mock1", date: new Date().getTime() - 1, content: "mock1mock1", emotionId: 3 },
  { id: "mock2", date: new Date().getTime() - 2, content: "mock2mock2", emotionId: 4 },
  { id: "mock3", date: new Date().getTime() - 3, content: "mock3mock3", emotionId: 1 },
];

export default App;

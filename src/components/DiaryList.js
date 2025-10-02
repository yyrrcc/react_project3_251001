import { useState } from "react";
import Button from "./Button";
import "./css/DiaryList.css";
import { useNavigate } from "react-router-dom";

// 정렬 기능
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const DiaryList = ({ data }) => {
  // 정렬 기준
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 이동을 위한 useNavigate
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <>
      <div className="DiaryList">
        <div className="menu_wrapper">
          <div className="left_col">
            <select value={sortType} onChange={onChangeSortType}>
              {/* 배열이기 때문에 key값도 필요함 따라서 idx 만들어서 넣어주기 */}
              {sortOptionList.map((it, idx) => (
                <option key={idx} value={it.value}>
                  {it.name}
                </option>
              ))}
            </select>
          </div>
          <div className="right_col">
            <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryList;

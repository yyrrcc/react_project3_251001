import { useEffect, useState } from "react";
import Button from "./Button";
import "./css/DiaryList.css";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

// 정렬 기능
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

// 정렬 참고
// let arr1 = [10, 2, 4, 30];
// arr1.sort((a, b) => a - b);
// console.log(arr1);

const DiaryList = ({ data }) => {
  // 정렬 기준
  const [sortType, setSortType] = useState("latest");
  // 정렬 데이터
  const [sortedData, setSortedData] = useState([]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 이동을 위한 useNavigate
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };

  // 데이터 정렬 (a와 b는 각각 일기 객체, 시간 순으로 비교, latest 내림차순)
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    // 깊은복사로 기존 data를 복사해서 만들어준다
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

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

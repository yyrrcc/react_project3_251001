import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../Utils";
import DiaryList from "../components/DiaryList";

// context 설정이 됐기 때문에 App에서 보내준 props 사용 가능
const Home = () => {
  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState([]); // 필터링한 데이터

  // 날짜 이동을 위한 변수
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  // []: 일기 데이터가 바뀌거나 날짜가 변경될 때 실행
  useEffect(() => {
    // 일기 개수가 0인 경우 대비해서
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp));
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onSubmit = () => {
    alert("일기 작성 완료");
  };

  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
      {/* <Editor
        initData={{ date: new Date().getTime(), emotionId: 1, content: "이전에 작성한 일기" }}
        onSubmit={onSubmit}
      /> */}
    </>
  );
};

export default Home;

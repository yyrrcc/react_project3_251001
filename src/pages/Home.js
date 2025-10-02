import { useContext, useState } from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";

// context 설정이 됐기 때문에 App에서 보내준 props 사용 가능
const Home = () => {
  // 날짜 이동을 위한 변수
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

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
      <Editor
        initData={{ date: new Date().getTime(), emotionId: 1, content: "이전에 작성한 일기" }}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Home;

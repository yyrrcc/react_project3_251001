import { replace, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  // App의 onCreate 함수를 호출하기 위해서 useContext 이용하기
  const { onCreate } = useContext(DiaryDispatchContext);

  // 작성 완료 버튼 (onSubmit) 함수 만들기. 매개변수 data : 사용자가 작성한 정보 담은 객체
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />} />
      <Editor onSubmit={onSubmit} />
    </>
  );
};

export default New;

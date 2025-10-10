import { replace, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";

const Edit = () => {
  // url 주소창에서 받아온 id의 값이 있는지
  const { id } = useParams();

  // 유저가 클릭한 글의 id와 일치하는 일기 객체
  const data = useDiary(id);

  // 글 삭제 & 수정 context 가져오기
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  // 글 삭제하기
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  // 글 수정하기 (매개변수로 사용자가 수정한 data 를 객체로 받는다)
  const onSubmit = (data) => {
    if (window.confirm("일기를 수정 할까요?")) {
      const { id, date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다..</div>;
  } else {
    return (
      <>
        <Header
          title={"일기 수정하기"}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />}
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </>
    );
  }
};

export default Edit;

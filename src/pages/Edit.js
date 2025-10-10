import { replace, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  // url 주소창에서 받아온 id의 값이 있는지
  const { id } = useParams();

  // 유저가 클릭한 글의 id와 일치하는 일기 객체
  const data = useDiary(id);

  // 글 삭제
  const { onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(id);
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
      </>
    );
  }
};

export default Edit;

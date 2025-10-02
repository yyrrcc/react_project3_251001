import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../Utils";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  const { id } = useParams(); // useParams()는 객체임 예) id:5 . 따라서 구조분해 할당으로 id만 가져오기
  const data = useDiary(id);

  // 뒤로가기, 수정하기 버튼
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, content, emotionId } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </>
    );
  }
};

export default Diary;

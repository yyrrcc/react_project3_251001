import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams(); // useParams()는 객체임 {id:5} 따라서 구조분해 할당으로 id만 가져오기
  return (
    <>
      <div>Diary 페이지입니다</div>
      <div>{id}번 일기를 보고 있습니다.</div>
    </>
  );
};

export default Diary;

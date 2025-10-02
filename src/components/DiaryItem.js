import "./css/DiaryItem.css";
import { getEmotionImgById } from "../Utils";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, content, date }) => {
  // 이미지 섹션을 클릭하면 해당 일기를 상세 조회할 수 있는 페이지로 이동
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <>
      <div className="DiaryItem">
        <div onClick={goDetail} className={["img_section", `img_section_${emotionId}`].join(" ")}>
          <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </div>
      </div>
    </>
  );
};

export default DiaryItem;

import "./css/DiaryItem.css";
import { getEmotionImgById } from "../Utils";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  // 이미지 섹션을 클릭하면 해당 일기를 상세 조회할 수 있는 페이지로 이동
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  // 수정하기 버튼 눌렀을 때
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="DiaryItem">
        <div onClick={goDetail} className={["img_section", `img_section_${emotionId}`].join(" ")}>
          <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </div>
        <div className="info_section" onClick={goDetail}>
          <div className="date_wrapper">{new Date(parseInt(date)).toLocaleDateString()}</div>
          <div className="content_wrapper">{content.slice(0, 25)}</div>
        </div>
        <div className="button_section">
          <Button onClick={goEdit} text={"수정하기"} />
        </div>
      </div>
    </>
  );
};

export default DiaryItem;

import { emotionList } from "../Utils";
import "./css/Viewer.css";

const Viewer = ({ content, emotionId }) => {
  // find 메서드 통해서 emotionId와 동일한 이미지의 객체를 가져오기
  // String으로 변환을 해줘야 오류 안 남!
  const emotionItem = emotionList.find((it) => String(it.id) === String(emotionId));

  return (
    <>
      <div className="Viewer">
        <section>
          <h4>오늘의 감정</h4>
          <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotionId}`].join(" ")}>
            <img src={emotionItem.img} alt={emotionItem.name} />
            <div className="emotion_descript">{emotionItem.name}</div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="content_wrapper">
            <p>{content}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Viewer;

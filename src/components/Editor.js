import "../components/css/Editor.css";
import { useEffect, useState, useCallback } from "react";
import { getFormattedDate, emotionList } from "../Utils";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

// props : initData (수정 할 기존 입력된 내용), onSubmit (작성 완료 버튼)
const Editor = ({ initData, onSubmit }) => {
  // 1개의 일기를 1개의 객체로 설정하기
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (e) => {
    // 객체 안에 있는 key를 가져와서 값 변경해주기!
    setState({ ...state, date: e.target.value });
  };

  const handleChangeContent = (e) => {
    setState({ ...state, content: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(state); // 유저가 입력한 1개의 일기 객체를 보내준다
  };

  // 클라이언트 사이드 렌더링 방식으로 페이지를 이동하는 함수를 반환
  const navigate = useNavigate();
  const handleOnGoBack = () => {
    navigate(-1); // 뒤로 가기 이벤트 1회 동작
  };

  // 감정 이미지 클릭하면 호출 할 이벤트 핸들러 (useCallBack 이용해서 최적화 시키기)
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({ ...state, emotionId }));
  }, []);

  // initData 변경 값이 있을 때마다(즉, 기존 값 존재하고 수정 버튼 눌렀을 때) useEffect 실행
  // date값 -> getTime() -> 정수 -> 날짜형식 -> yyyy-MM-dd 로 변경
  useEffect(() => {
    if (initData) {
      setState({ ...initData, date: getFormattedDate(new Date(parseInt(initData.date))) });
    }
  }, [initData]);

  return (
    <>
      <div className="Editor">
        <div className="editor_section">
          <h4>오늘의 날짜</h4>
          <div className="input_wrapper">
            <input type="date" value={state.date} onChange={handleChangeDate} />
          </div>
        </div>
        <div className="editor_section">
          <h4>오늘의 감정</h4>
          <div className="input_wrapper emotion_list_wrapper">
            {/* 이모지를 배열로 만들어서 map으로 가져오기 */}
            {emotionList.map((it) => (
              <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion} isSelected={it.id === state.emotionId} />
            ))}
          </div>
        </div>
        <div className="editor_section">
          <h4>오늘의 일기</h4>
          <div className="input_wrapper">
            <textarea
              value={state.content}
              onChange={handleChangeContent}
              placeholder="오늘 일기를 작성해보세요."
            ></textarea>
          </div>
        </div>
        <div className="editor_section">
          <div className="editor_section bottom_section">
            <Button text={"취소하기"} onclick={handleOnGoBack} />
            <Button type={"positive"} text={"작성완료"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;

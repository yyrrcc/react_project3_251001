import "../components/css/Editor.css";
import { useState } from "react";
import { getFormattedDate } from "../Utils";

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
        </div>
        <div className="editor_section">
          <h4>오늘의 일기</h4>
        </div>
        <div className="editor_section">
          <h4>작성 완료, 취소</h4>
        </div>
      </div>
    </>
  );
};

export default Editor;

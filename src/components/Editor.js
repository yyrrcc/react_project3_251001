import "../components/css/Editor.css";

// props : initData (수정 할 기존 입력된 내용), onSubmit (작성 완료 버튼)
const Editor = ({ initData, onSubmit }) => {
  return (
    <>
      <div className="Editor">
        <div className="editor_section">
          <h4>오늘의 날짜</h4>
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

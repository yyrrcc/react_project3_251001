import "./css/Button.css";

// props : text (버튼 이름), type, 이벤트 핸들러
const Button = ({ text, type, onclick }) => {
  return (
    <>
      <button className="Button" onClick={onclick}>
        {text}
      </button>
    </>
  );
};

export default Button;

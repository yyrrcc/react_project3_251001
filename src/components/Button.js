import "./css/Button.css";

// props : text (버튼 이름), type, 이벤트 핸들러
const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <>
      {/* Button type에 따라 스타일을 변경하고 싶어서. Button Button_positive */}
      <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;

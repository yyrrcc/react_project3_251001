import emotion1 from "./images/angry.png";
import emotion2 from "./images/cry.png";
import emotion3 from "./images/neutral.png";
import emotion4 from "./images/smile.png";
import emotion5 from "./images/best.png";

// 숫자에 맞게 이미지 가져오기
export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId); //  emotionId가 문자열이 아닌 숫자로 제공될 수도 있기 때문에 형 변환

  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

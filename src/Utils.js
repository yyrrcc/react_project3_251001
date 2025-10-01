import emotion1 from "./images/emotion1.png";
import emotion2 from "./images/emotion2.png";
import emotion3 from "./images/emotion3.png";
import emotion4 from "./images/emotion4.png";
import emotion5 from "./images/emotion5.png";

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

// 이미지 랜더링하기 (js에서 사용할 수 있는 데이터 형태로)
export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "완전나쁨",
    img: getEmotionImgById(5),
  },
];

// 날짜 포맷팅 해주는 함수 (yyyy-mm-dd)
export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

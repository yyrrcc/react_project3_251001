// 커스텀 훅 (custom hook)

import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// id로 일기를 불러오고 해당 id가 없으면 home으로 보내는 훅
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다.");
      navigate("/", { replace: true }); // 페이지를 이동한 후 다시 돌아올 수 없도록 뒤로 가기 아이콘이 비활성화
    }
  }, [id]); // [id, data] 에서 data 삭제해주기 (삭제 시 else-alert 안 뜨게 하기 위해서)
  return diary;
};

export default useDiary;

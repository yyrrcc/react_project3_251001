import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  // http://localhost:3000/?page=5&kw=hello
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams); // URLSearchParams {size: 2} 이런 식으로 나옴. 객체임!
  console.log(searchParams.get("page")); // get메서드를 이용해서 원하는 value값을 뽑을 수 있음
  console.log(searchParams.get("kw"));

  return (
    <>
      <h1>Home 페이지입니다</h1>
      <Button
        text={"홈버튼"}
        onclick={() => {
          alert("홈입니다.");
        }}
      />
    </>
  );
};

export default Home;

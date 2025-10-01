import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <h1>Home 페이지입니다</h1>
      <Button
        text={"기본 버튼"}
        onclick={() => {
          alert("default button");
        }}
      />
      <Button
        type={"positive"}
        text={"긍정 버튼"}
        onclick={() => {
          alert("positive button");
        }}
      />
      <Button
        type={"negative"}
        text={"부정 버튼"}
        onclick={() => {
          alert("negative button");
        }}
      />
    </>
  );
};

export default Home;

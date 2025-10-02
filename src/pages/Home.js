import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Home = () => {
  const onSubmit = () => {
    alert("일기 작성 완료");
  };

  return (
    <>
      <Header
        title={"HOME"}
        leftChild={
          <Button
            type={"positive"}
            text={"긍정 버튼"}
            onclick={() => {
              alert("positive btn");
            }}
          />
        }
        rightChild={
          <Button
            type={"negative"}
            text={"부정 버튼"}
            onclick={() => {
              alert("negative btn");
            }}
          />
        }
      />
      <Editor initData={{ date: new Date().getTime(), emotionId: 1, content: "이전에 작성한 일기" }} onSubmit={onSubmit} />
    </>
  );
};

export default Home;

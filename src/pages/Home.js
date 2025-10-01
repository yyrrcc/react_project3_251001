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
            type={"negative"}
            text={"부정 버튼"}
            onclick={() => {
              alert("negative btn");
            }}
          />
        }
        rightChild={
          <Button
            type={"positive"}
            text={"긍정 버튼"}
            onclick={() => {
              alert("positive btn");
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </>
  );
};

export default Home;

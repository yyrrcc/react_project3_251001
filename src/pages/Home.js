import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Home = () => {
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
      <Editor />
    </>
  );
};

export default Home;

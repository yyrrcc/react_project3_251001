import Button from "../components/Button";
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
      {/* <Button
        text={"기본 버튼"}
        onclick={() => {
          alert("default btn");
        }}
      />
      <Button
        type={"positive"}
        text={"긍정 버튼"}
        onclick={() => {
          alert("positive btn");
        }}
      />
      <Button
        type={"negative"}
        text={"부정 버튼"}
        onclick={() => {
          alert("negative btn");
        }}
      /> */}
    </>
  );
};

export default Home;

import homeimage from "../images/download.jpg";
import CommonLayout from "./CommonLayout";
import CustomButton from "./CustomButton";

const Home = () => {
  const buttonData = () => {
    return <CustomButton route="/about" buttonName="About" />;
  };
  return (
    <>
      <CommonLayout
        header="header1"
        greet=" Welcome to my "
        title="Portfolio."
        description="Hi, I'm Imran, get to know me."
        button={buttonData()}
        image={homeimage}
        animate="col-lg-6 order-1 order-lg-2 header-img"
      />
    </>
  );
};

export default Home;

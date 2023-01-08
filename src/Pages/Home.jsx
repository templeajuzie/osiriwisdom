import Footer from "../Components/Footer";
import HomeComp from "../Components/HomeComp";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import AboutmeComp from "../Components/AboutmeComp";
import VandM from "../Components/VandM";
import Letswork from "./Letswork";
import ServicesComp from "../Components/ServicesComp";
import Platforms from "../Components/Platforms";
import Navbar1 from "../Components/Navbar1";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeComp />
      <Platforms />
      <AboutmeComp />
      <VandM />
      <ServicesComp />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

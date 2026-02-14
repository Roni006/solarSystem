import Navigation from "./Components/shared/Navigation";
import Banner from "./Screens/Home/Banner";
import Experience from "./Screens/Home/Experience";
import WhyChoose from "./Screens/Home/WhyChoose";
const App = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Experience />
      <WhyChoose/>
    </>
  );
};

export default App;

import Navigation from "./Components/shared/Navigation";
import Banner from "./Screens/Home/Banner";
import Experience from "./Screens/Home/Experience";
import Footer from "./Screens/Home/footer";
import WhatWeDo from "./Screens/Home/WhatWeDo";
import WhoWe from "./Screens/Home/WhoWe";
import WhyChoose from "./Screens/Home/WhyChoose";
const App = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Experience />
      <WhyChoose/>
      <WhoWe/>
      <WhatWeDo/>
      <Footer/>
    </>
  );
};

export default App;

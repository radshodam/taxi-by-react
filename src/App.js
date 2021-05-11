import React from "react";
import Tab from "./components/tabs/TabsRad";
import Menu from "./components/menu/Menu";
import SliderRad from "./components/slider/SliderRad";
import "./App.css";
import Banner from "./components/banner/Banner";
import MainAdvocate from "./components/advocate/MainAdvocate";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Menu />
      <SliderRad />
      <Tab />
      <Banner/>
      <MainAdvocate/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;

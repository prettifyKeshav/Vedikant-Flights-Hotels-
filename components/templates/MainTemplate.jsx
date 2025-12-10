import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import AnimationWrapper from '../AnimationWrapper'

const MainTemplate = ({ children }) => {
  return (
    // <AnimationWrapper>
    <>
      <Header />
      {children}
      <Footer />
    </>
    // </AnimationWrapper>
  );
};

export default MainTemplate;

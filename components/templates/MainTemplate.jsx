
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import AnimationWrapper from '../AnimationWrapper'
import { Toaster } from 'react-hot-toast';

const MainTemplate = ({ children }) => {
  return (
    // <AnimationWrapper>
    <>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </>
    // </AnimationWrapper>
  );
};

export default MainTemplate;

// "use client"
// import { useEffect } from "react";
import "@/styles/home/home.css";
import Hero from './Hero'
// import ServiceSlider from './ServiceSlider';
// import About from './About';
// import Industries from './Industries';
import Certifications from './Certifications';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        {/* <ServiceSlider /> */}
        {/* <About /> */}
        {/* <Industries /> */}
        <Certifications />
      </main>
    </>
  )
}

export default HomePage
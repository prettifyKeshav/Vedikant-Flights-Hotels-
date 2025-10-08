
import "@/styles/home/home.css";

import Hero from './Hero'
import Home_SectionA from "./Home_SectionA";
import Home_SectionB from "./Home_SectionB";
import Home_SectionC from "./Home_SectionC";
import Home_SectionD from "./Home_SectionD";
import Home_SectionE from "./Home_SectionE";
import Home_SectionF from "./Home_SectionF";
import Home_SectionG from "./Home_SectionG";
import Home_SectionH from "./Home_SectionH";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Home_SectionA />
        <Home_SectionB />
        <Home_SectionC />
        <Home_SectionD />
        <Home_SectionE />
        <Home_SectionF />
        <Home_SectionG />
        <Home_SectionH />
      </main>
    </>
  )
}

export default HomePage
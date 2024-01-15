import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import '../styles/Explore.css';
import Header from "../components/Header";
import Footer from "./Footer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const Explore = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div id="explore">

      <div id="mainContainer" >
      <Particles id="tsparticles" url="https://raw.githubusercontent.com/matteobruni/tsparticles/main/websites/particles.js.org/presets/nyancat2.json" init={particlesInit} loaded={particlesLoaded} />
      <br>
      </br>
      <div id="list-container">
      <CardList list={exploreList} />     
       </div>
       </div>
      <Footer/>

    </div>
    
  );
};

export default Explore;

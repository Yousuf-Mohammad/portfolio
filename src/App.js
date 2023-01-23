import React from "react";
import AnimatedCursor from "react-animated-cursor"
import './App.css';
import About from './Components/About/About';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Particles from "react-tsparticles";
import Projects from './Components/Projects/Projects';
import Top from './Components/Top/Top';


function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#FFFFF",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 250,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#1f4277",
            },
            links: {
              color: "#ffffff",
              distance: 450,
              enable: true,
              opacity: 0.1,
              width: .05,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 3000,
              },
              value: 80,
            },
            opacity: {
              value: .7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      <AnimatedCursor
        innerSize={20}
        outerSize={80}
        color='91, 112, 182'
        outerAlpha={0.7}
        innerScale={1}
        outerScale={3}
      />
      <Top></Top>

      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>

    </div>
  );
}

export default App;

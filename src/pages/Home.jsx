import { Suspense } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import { useEffect, useRef } from "react";

import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { contact, soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreensize = () => {
    let screenscale = null;
    let screePosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innnerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9];
    } else {
      screenscale = [1, 1, 1];
    }

    return [screenscale, screePosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenscale, screenPosition;

    if (window.innnerWidth < 768) {
      screenscale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenscale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenscale, screenPosition];
  };

  const [islandScale, islandPosition, islandrotation] =
    adjustIslandForScreensize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />

          <Bird />
          <Plane />

          <Sky isRotating={isRotating}/>

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandrotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, -80, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;

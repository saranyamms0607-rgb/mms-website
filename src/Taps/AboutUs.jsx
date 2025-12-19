
import { useEffect, useState } from "react";
import "../styles/AboutUs.css";
import sampleVideo from "../assets/videos/about/hero_optim.mp4";


export const AboutUs = () =>{
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Control shrink speed
      const newScale = Math.max(0.2, 1 - scrollY / 600);
      const moveX = Math.min(scrollY * 0.8, window.innerWidth / 2 - 20);
      const moveY = Math.min(scrollY * 0.8, window.innerHeight / 2 - 20);

    setScale(newScale);
    setPosition({ x: -moveX, y: -moveY });
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="video-wrapper">
        <video
          className="scroll-video"
          style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>

      {/* Dummy content to enable scrolling */}
      <div className="content">
        <h1>Scroll Down</h1>
        <p>
          This is content below the video. Scroll to see the video shrink.
        </p>
      </div>
    </>
  );
}

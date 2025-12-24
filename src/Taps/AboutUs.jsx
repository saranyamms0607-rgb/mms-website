import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = videoWrapperRef.current;
    const video = videoRef.current;

    // Split text into letters for smooth "Bus Meet" arrival
    if (headlineRef.current) {
      const text = "MediaMatic Studio Pvt. Ltd., (MMS) could be a perfect one-stop solution to manage all your Branding Activities.";
      headlineRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
    }

    let videoDuration = 0;
    if (video) {
      video.pause();
      const setDuration = () => (videoDuration = video.duration || 0);
      video.addEventListener("loadedmetadata", setDuration);
      if (video.readyState >= 1) setDuration();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=6000", 
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (video && videoDuration) {
            video.currentTime = self.progress * videoDuration;
          }
        }
      }
    });

    // 1. Video shrinks and goes to bottom position
    tl.fromTo(wrapper, 
      { width: "100vw", height: "100vh", borderRadius: 0, top: 0, left: 0 },
      { 
        width: "380px", 
        height: "240px", 
        borderRadius: "20px", 
        top: "70vh", 
        left: "6vw", 
        duration: 2,
        ease: "power2.inOut"
      }
    );

    // 2. Video and Text rise together (The "Bus Meet")
    tl.to([wrapper, contentRef.current], {
      y: "-=40vh", 
      duration: 1.5,
      ease: "sine.inOut"
    }, "-=0.5");

    // 3. Letters reveal
    tl.fromTo(".letter",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.01, duration: 0.8 },
      "-=1"
    );

    // 4. Detailed text reveals sequentially
    tl.fromTo(".reveal-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1.5 },
      "+=0.2"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        .about-section { 
          background: #fdf3b7; /* Updated Background */
          height: 100vh; 
          width: 100%;
          position: relative; 
          overflow: hidden;
          font-family: 'Inter', Arial, sans-serif;
          color: rgb(83, 19, 27); /* Updated Primary Text Color */
        }
        
        .video-wrapper { 
          position: absolute; 
          z-index: 100; 
          background: #000; 
          overflow: hidden; 
          /* Shadow adjusted for the warmer background */
          box-shadow: 0 20px 40px rgba(83, 19, 27, 0.15); 
        }

        .scroll-video { width: 100%; height: 100%; object-fit: cover; }

        .content-container { 
          position: absolute;
          top: 75vh; 
          padding: 0 6vw;
          width: 100%;
          z-index: 50;
        }

        .text-wrapper {
          margin-left: 420px; 
          max-width: 900px;
          padding-bottom: 150px;
        }

        .headline { 
          font-size: clamp(2rem, 4.5vw, 4.8rem); 
          line-height: 1.1; 
          font-weight: 700; 
          margin-bottom: 50px;
          color: rgb(83, 19, 27);
        }

        .letter { display: inline-block; white-space: pre; }

        .sub-content { 
          font-size: 1.2rem; 
          line-height: 1.6; 
          color: rgba(83, 19, 27, 0.9); 
        }
        
        .info-section { 
          margin-top: 60px; 
          border-top: 1px solid rgba(83, 19, 27, 0.2); 
          padding-top: 40px; 
        }

        .grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        
        h2 { 
          font-size: 1.6rem; 
          text-transform: uppercase; 
          margin-bottom: 20px; 
          color: rgb(83, 19, 27); 
          font-weight: 800;
        }

        .item { margin-bottom: 12px; font-weight: 500; }

        .strategy-step { 
          margin-top: 20px; 
          background: rgba(255, 255, 255, 0.4); 
          padding: 25px; 
          border-radius: 12px; 
          border: 1px solid rgba(83, 19, 27, 0.1);
        }

        @media (max-width: 1024px) {
            .text-wrapper { margin-left: 0; margin-top: 300px; }
            .content-container { top: 20vh; }
        }
      `}</style>

      <section ref={sectionRef} className="about-section">
        <div ref={videoWrapperRef} className="video-wrapper">
          <video ref={videoRef} className="scroll-video" muted playsInline src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </div>

        <div ref={contentRef} className="content-container">
          <div className="text-wrapper">
            <h1 ref={headlineRef} className="headline"></h1>
            
            <div className="reveal-content sub-content">
              <p>Since our journey began in 2017, the one thing we have been hugely passionate about is always delivering exceptional services focused on connecting ideas to audiences globally.</p>
              
              <div className="info-section">
                <h2>Legacy</h2>
                <p>MediaMatic Studio, incorporated in 2017 – one of India’s eminent start-up Branding firms supporting the arena in fields of Branding Services.</p>
              </div>

              <div className="grid-layout info-section">
                <div>
                  <h2>Our Mission</h2>
                  <div className="item">2017 – Start-Up</div>
                  <div className="item">2024 – Registered as Private Limited Company</div>
                  <div className="item">2025 – Aiming to be Global Fortune by 2030</div>
                </div>
                <div>
                  <h2>2026 Vision</h2>
                  <div className="item">100+ : Corporate Video Shoots</div>
                  <div className="item">500+ : Website & App Development</div>
                  <div className="item">2000+: Clients on Webhosting Server</div>
                </div>
              </div>

              <div className="info-section">
                <h2>Our Strategy</h2>
                <div className="strategy-step">
                  <strong>Stage 1: Discovery Phase</strong>
                  <p>We delve deep into understanding business goals, target audience, and market landscape to identify opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
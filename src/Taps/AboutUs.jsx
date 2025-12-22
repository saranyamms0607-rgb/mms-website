import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AboutUs.css";
import sampleVideo from "../assets/videos/about/hero_optim.mp4";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = videoWrapperRef.current;
    const video = videoRef.current;

    let videoDuration = 0;

    /* 🎬 VIDEO SETUP */
    if (video) {
      const setDuration = () => (videoDuration = video.duration || 0);
      video.pause();
      video.addEventListener("loadedmetadata", setDuration);
      if (video.readyState >= 1) setDuration();
    }

    /* 🧠 TIMELINE */
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=1200", // Optimized: Reduced from 1800 for shorter scroll distance and better performance
        scrub: 1, // Optimized: Changed from 0.8 to 1 for smoother scrubbing
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (video && videoDuration) {
            video.currentTime = self.progress * videoDuration;
          }
        }
      }
    });

    /* 🎥 VIDEO RESIZE (FULL → CARD) */
    tl.fromTo(
      wrapper,
      {
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        borderRadius: 0
      },
      {
        width: 240,
        height: 160,
        top: 80,
        left: 80,
        borderRadius: 12,
        duration: 0.4
      },
      0
    );

    /* 📝 TEXT ENTER */
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.4 },
      0.2
    );

    /* 🧹 CLEANUP */
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      {/* 🎥 VIDEO */}
      <div ref={videoWrapperRef} className="video-wrapper">
        <video
          ref={videoRef}
          className="scroll-video"
          muted
          playsInline
          preload="auto"
        >
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>

      {/* 📄 TEXT */}
      <div ref={contentRef} className="content">
        <h1 className="big-text"><strong> MediaMatic Studio (MMS)</strong> could be a perfect one-stop solution to manage all your Branding Activities.</h1>

        <p className="eyebrow">
          Since our journey began in 2017, the one thing we have been hugely passionate about is always delivering exceptional services focused on connecting ideas to audiences globally. And over the years, we have built a reputation for being innovative, reliable, and committed to excellence. This milestone marked a new chapter in our journey, allowing us to streamline operations and offer our clients the best branding service.
</p>
      </div>
    </section>
  );
};

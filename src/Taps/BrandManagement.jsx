import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BrandManagement = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const caseStudyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const list = listRef.current;
    const caseStudy = caseStudyRef.current;

    // Create a timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Start when section is 80% into view
        end: 'bottom 20%', // End when section is 20% from bottom
        toggleActions: 'play none none reverse', // Play on enter, reverse on leave
      },
    });

    // Animate heading: fade in and slide from left
    tl.fromTo(
      heading,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    );

    // Animate paragraph: fade in and slide from right
    tl.fromTo(
      paragraph,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3' // Overlap with previous animation
    );

    // Animate list: fade in and slide up
    tl.fromTo(
      list,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Animate case study: fade in and slide up
    tl.fromTo(
      caseStudy,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section id="brand" ref={sectionRef} style={{ padding: '3rem 1rem', maxWidth: 900 }}>
      <h2 ref={headingRef}>Brand Management</h2>
      <p ref={paragraphRef} style={{ color: 'var(--muted, rgb(83, 19, 27))' }}>
        We help businesses build cohesive brands — from naming and positioning
        to visual systems and launch strategy.
      </p>

      <ul ref={listRef} style={{ color: 'var(--muted, rgb(83, 19, 27))' }}>
        <li>Brand strategy & messaging</li>
        <li>Visual identity & guidelines</li>
        <li>Campaigns & activation</li>
      </ul>

      <div ref={caseStudyRef} style={{ marginTop: 12 }}>
        <strong>Case study:</strong> Rebuilt a fintech brand identity that
        increased user signups by 28% in three months.
      </div>
    </section>
  );
};
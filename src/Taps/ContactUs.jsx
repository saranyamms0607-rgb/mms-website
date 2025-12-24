import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [sendStatus, setSendStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [animationFinished, setAnimationFinished] = useState(false);
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const finalizedRef = useRef(false);

  // finalize UI when both animation and sending are complete
  const finalizeSuccess = (button) => {
    if (finalizedRef.current) return;
    finalizedRef.current = true;
    // keep the original final fade-in effect that was in the animation
    setTimeout(() => {
      if (button) button.removeAttribute('style');
      gsap.fromTo(button, {
        opacity: 0,
        y: -8
      }, {
        opacity: 1,
        y: 0,
        clearProps: true,
        duration: .3,
        onComplete() {
          if (button) button.classList.remove('active');
          setLoading(false);
          setSent(true);
          setSendStatus('success');
          // reset after a short while so user can send again
          setTimeout(() => {
            setSent(false);
            setSendStatus('idle');
            finalizedRef.current = false;
          }, 3000);
        }
      })
    }, 1800);
  };

  const finalizeError = (button, message = 'Failed to send message. Please try again.') => {
    if (finalizedRef.current) return;
    finalizedRef.current = true;
    // small shake to indicate failure then reset
    gsap.to(button, {
      x: -8,
      duration: .06,
      yoyo: true,
      repeat: 3,
      onComplete() {
        if (button) button.classList.remove('active');
        setLoading(false);
        setError(message);
        setSendStatus('error');
        setTimeout(() => {
          setError('');
          setSendStatus('idle');
          finalizedRef.current = false;
        }, 3000);
      }
    })
  };

  const handleAnimationComplete = (button) => {
    setAnimationFinished(true);
    if (sendStatus === 'success') {
      finalizeSuccess(button);
    } else if (sendStatus === 'error') {
      finalizeError(button);
    }
  };

  const sendRequest = async (formData) => {
    // use formData so it's not unused; convert to a plain object for potential real requests
    const payload = formData ? Object.fromEntries(formData.entries()) : null;
    try {
      // simulate network request
      await new Promise((r) => setTimeout(r, 1000));
      console.debug('Sending contact form', payload);
      // simulate success (change to random or actual fetch if you have an API)
      const ok = true;
      if (ok) {
        setSendStatus('success');
        if (animationFinished) finalizeSuccess(buttonRef.current);
      } else {
        setSendStatus('error');
        if (animationFinished) finalizeError(buttonRef.current, 'Server rejected the request.');
      }
    } catch (err) {
      setSendStatus('error');
      if (animationFinished) finalizeError(buttonRef.current, err.message || 'Network error');
    }
  };

  const handleClick = () => {
    const button = buttonRef.current;
    if (!button || button.classList.contains('active')) return;
    if (sendStatus === 'sending') return;

    const getVar = (variable) => getComputedStyle(button).getPropertyValue(variable);

    setLoading(true);
    setError('');
    setSent(false);
    setSendStatus('sending');
    setAnimationFinished(false);
    finalizedRef.current = false;

    // start sending in background
    const formEl = formRef.current;
    const formData = formEl ? new FormData(formEl) : null;
    sendRequest(formData);

    button.classList.add('active');

    gsap.to(button, {
      keyframes: [{
        '--left-wing-first-x': 50,
        '--left-wing-first-y': 100,
        '--right-wing-second-x': 50,
        '--right-wing-second-y': 100,
        duration: .2,
        onComplete() {
          gsap.set(button, {
            '--left-wing-first-y': 0,
            '--left-wing-second-x': 40,
            '--left-wing-second-y': 100,
            '--left-wing-third-x': 0,
            '--left-wing-third-y': 100,
            '--left-body-third-x': 40,
            '--right-wing-first-x': 50,
            '--right-wing-first-y': 0,
            '--right-wing-second-x': 60,
            '--right-wing-second-y': 100,
            '--right-wing-third-x': 100,
            '--right-wing-third-y': 100,
            '--right-body-third-x': 60
          })
        }
      }, {
        '--left-wing-third-x': 20,
        '--left-wing-third-y': 90,
        '--left-wing-second-y': 90,
        '--left-body-third-y': 90,
        '--right-wing-third-x': 80,
        '--right-wing-third-y': 90,
        '--right-body-third-y': 90,
        '--right-wing-second-y': 90,
        duration: .2
      }, {
        '--rotate': 50,
        '--left-wing-third-y': 95,
        '--left-wing-third-x': 27,
        '--right-body-third-x': 45,
        '--right-wing-second-x': 45,
        '--right-wing-third-x': 60,
        '--right-wing-third-y': 83,
        duration: .25
      }, {
        '--rotate': 60,
        '--plane-x': -8,
        '--plane-y': 40,
        duration: .2
      }, {
        '--rotate': 40,
        '--plane-x': 45,
        '--plane-y': -300,
        '--plane-opacity': 0,
        duration: .375,
        onComplete() {
          // wait until animation end; finalize logic will check send status
          handleAnimationComplete(button);
        }
      }]
    })

    gsap.to(button, {
      keyframes: [{
        '--text-opacity': 0,
        '--border-radius': 0,
        '--left-wing-background': getVar('--primary-dark'),
        '--right-wing-background': getVar('--primary-dark'),
        duration: .11
      }, {
        '--left-wing-background': getVar('--primary'),
        '--right-wing-background': getVar('--primary'),
        duration: .14
      }, {
        '--left-body-background': getVar('--primary-dark'),
        '--right-body-background': getVar('--primary-darkest'),
        duration: .25,
        delay: .1
      }, {
        '--trails-stroke': 171,
        duration: .22,
        delay: .22
      }, {
        '--success-opacity': 1,
        '--success-x': 0,
        duration: .2,
        delay: .15
      }, {
        '--success-stroke': 0,
        duration: .15
      }]
    })
  };

  return (
    <>
    <style>{`
      .button {
        --primary: rgb(83, 19, 27);
        --primary-dark: #D1D6EE;
        --primary-darkest: #8A91B4;
        --shadow: rgba(0, 0, 0, 0.3);
        --text: #ffe7a9;
        --text-opacity: 1;
        --success: rgb(83, 19, 27);
        --success-x: -12;
        --success-stroke: 14;
        --success-opacity: 0;
        --border-radius: 7;
        --overflow: hidden;
        --x: 0;
        --y: 0;
        --rotate: 0;
        --plane-x: 0;
        --plane-y: 0;
        --plane-opacity: 1;
        --trails: rgba(255, 255, 255, 0.15);
        --trails-stroke: 57;
        --left-wing-background: var(--primary);
        --left-wing-first-x: 0;
        --left-wing-first-y: 0;
        --left-wing-second-x: 50;
        --left-wing-second-y: 0;
        --left-wing-third-x: 0;
        --left-wing-third-y: 100;
        --left-body-background: var(--primary);
        --left-body-first-x: 51;
        --left-body-first-y: 0;
        --left-body-second-x: 51;
        --left-body-second-y: 100;
        --left-body-third-x: 0;
        --left-body-third-y: 100;
        --right-wing-background: var(--primary);
        --right-wing-first-x: 49;
        --right-wing-first-y: 0;
        --right-wing-second-x: 100;
        --right-wing-second-y: 0;
        --right-wing-third-x: 100;
        --right-wing-third-y: 100;
        --right-body-background: var(--primary);
        --right-body-first-x: 49;
        --right-body-first-y: 0;
        --right-body-second-x: 49;
        --right-body-second-y: 100;
        --right-body-third-x: 100;
        --right-body-third-y: 100;
        display: block;
        cursor: pointer;
        position: relative;
        border: 0;
        padding: 8px 0;
        min-width: 100px;
        text-align: center;
        margin: 0;
        line-height: 24px;
        font-family: inherit;
        font-weight: 600;
        font-size: 14px;
        background: #ffe7a9;
        outline: none;
        color: var(--text);
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      }
      .button:focus {
        outline: none;
      }
      .button .plane,
      .button .trails {
        pointer-events: none;
        position: absolute;
      }
      .button .plane {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        filter: drop-shadow(0 3px 6px var(--shadow));
        transform: translate(calc(var(--x) * 1px), calc(var(--y) * 1px)) rotate(calc(var(--rotate) * 1deg)) translateZ(0);
      }
      .button .plane .left,
      .button .plane .right {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: var(--plane-opacity);
        transform: translate(calc(var(--plane-x) * 1px), calc(var(--plane-y) * 1px)) translateZ(0);
      }
      .button .plane .left:before,
      .button .plane .left:after,
      .button .plane .right:before,
      .button .plane .right:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: calc(var(--border-radius) * 1px);
        transform: translate(var(--part-x, 0.4%), var(--part-y, 0)) translateZ(0);
        z-index: var(--z-index, 2);
        background: var(--background, var(--left-wing-background));
        clip-path: polygon(calc(var(--first-x, var(--left-wing-first-x)) * 1%) calc(var(--first-y, var(--left-wing-first-y)) * 1%), calc(var(--second-x, var(--left-wing-second-x)) * 1%) calc(var(--second-y, var(--left-wing-second-y)) * 1%), calc(var(--third-x, var(--left-wing-third-x)) * 1%) calc(var(--third-y, var(--left-wing-third-y)) * 1%));
      }
      .button .plane .left:after {
        --part-x: -1%;
        --z-index: 1;
        --background: var(--left-body-background);
        --first-x: var(--left-body-first-x);
        --first-y: var(--left-body-first-y);
        --second-x: var(--left-body-second-x);
        --second-y: var(--left-body-second-y);
        --third-x: var(--left-body-third-x);
        --third-y: var(--left-body-third-y);
      }
      .button .plane .right:before {
        --part-x: -1%;
        --z-index: 2;
        --background: var(--right-wing-background);
        --first-x: var(--right-wing-first-x);
        --first-y: var(--right-wing-first-y);
        --second-x: var(--right-wing-second-x);
        --second-y: var(--right-wing-second-y);
        --third-x: var(--right-wing-third-x);
        --third-y: var(--right-wing-third-y);
      }
      .button .plane .right:after {
        --part-x: 0;
        --z-index: 1;
        --background: var(--right-body-background);
        --first-x: var(--right-body-first-x);
        --first-y: var(--right-body-first-y);
        --second-x: var(--right-body-second-x);
        --second-y: var(--right-body-second-y);
        --third-x: var(--right-body-third-x);
        --third-y: var(--right-body-third-y);
      }
      .button .trails {
        display: block;
        width: 33px;
        height: 64px;
        top: -4px;
        left: 16px;
        fill: none;
        stroke: var(--trails);
        stroke-linecap: round;
        stroke-width: 2;
        stroke-dasharray: 57px;
        stroke-dashoffset: calc(var(--trails-stroke) * 1px);
        transform: rotate(68deg) translateZ(0);
      }
      .button span {
        display: block;
        position: relative;
        z-index: 4;
        opacity: var(--text-opacity);
      }
      .button span.success {
        z-index: 0;
        position: absolute;
        left: 0;
        right: 0;
        top: 8px;
        transform: translateX(calc(var(--success-x) * 1px)) translateZ(0);
        opacity: var(--success-opacity);
        color: var(--success);
      }
      .button span.success svg {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;
        margin: 4px 8px 0 0;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 14px;
        stroke: var(--success);
        stroke-dashoffset: calc(var(--success-stroke) * 1px);
      }
      #contact {
        color: rgb(83, 19, 27);
        background-color: #ffe7a9;
      }
    `}</style>
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <div><span>Let's</span> <span className="description-title">Connect</span></div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 mb-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="info-content">
                <h4>Our Address</h4>
                <p>COVAI TECH PARK,KALAPATTI, COIMBATORE.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>support@mediamaticstudio.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-headset"></i>
              </div>
              <div className="info-content">
                <h4>Hours of Operation</h4>
                <p>Sunday-Fri: 9.00am - 8.30pm</p>
                <p>Saturday: 10.00am - 6.30pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container form-container-overlap">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form action="" method="post" className="email-form" ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-person"></i>
                        <input type="text" className="form-control" name="name" placeholder="First Name" required="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-envelope"></i>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-text-left"></i>
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-chat-dots message-icon"></i>
                        <textarea className="form-control" name="message" placeholder="Write Message..."
                          style={{height: 180}} required=""></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`loading ${loading ? 'd-block' : ''}`} aria-hidden={!loading}>Loading</div>
                    <div className={`error-message ${error ? 'd-block' : ''}`} role="status" aria-live="polite">{error}</div>
                    <div className={`sent-message ${sent ? 'd-block' : ''}`} role="status" aria-live="polite">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="button" className="button" ref={buttonRef} onClick={handleClick}>
                      <span className="default">Send Message</span>
                      <span className="success">
                        <svg viewBox="0 0 16 16">
                          <polyline points="3.75 9 7 12 13 5"></polyline>
                        </svg>Sent
                      </span>
                      <svg className="trails" viewBox="0 0 33 64">
                        <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                        <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
                      </svg>
                      <div className="plane">
                        <div className="left"></div>
                        <div className="right"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

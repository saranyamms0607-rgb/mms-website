import React from 'react'
import aboutPortrait from '../assets/img/about/about-portrait-1.webp'
import defaultDp from '../assets/img/person/default-dp.jpg'

export const AboutUs = () => {
  return (
    <section id="about" style={{padding: '3rem 1rem', maxWidth: 800}}>
      <h2>About MMS</h2>
      <p style={{color: 'var(--muted, rgb(83, 19, 27)'}}>
        MMS is a creative studio focused on brand strategy, design, and
        digital products. We partner with startups and established companies to
        shape identity and deliver measurable results.
      </p>

      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image position-relative">
              <img src={aboutPortrait} className="img-fluid rounded-4 shadow-sm" alt="About Image" loading="lazy" />
              <div className="experience-badge">
                <span className="years">8+</span>
                <span className="text">Years of Expertise</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <h2>MediaMatic Studio (MMS) could be a perfect one-stop solution to manage all your Branding Activities.</h2>
              <p className="lead">Since our journey began in 2017, the one thing we have been hugely passionate about is always delivering exceptional services focused on connecting ideas to audiences globally. And over the years, we have built a reputation for being innovative, reliable, and committed to excellence. This milestone marked a new chapter in our journey, allowing us to streamline operations and offer our clients the best branding service.</p>
              <p>While our progression has been steady, it has been fuelled by a crystal-clear vision and unwavering dedication to meeting the evolving needs of our clients. Now, MediaMatic Studio is ready to scale new heights. We are taking our expertise to the global stage, ensuring businesses and individuals worldwide can benefit from our top-notch Branding service.</p>

              <div className="row g-4 mt-3">
                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <h5>Our Mission</h5>
                    <p>2017 – Start-Up</p>
                    <p>2022 – As a Registered Company</p>
                    <p>2024 – Aiming to be one of the Global Fortune Company by 2030</p>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                  <div className="feature-item">
                    <i className="bi bi-lightbulb-fill"></i>
                    <h5>Forward-Thinking Approach</h5>
                    <p>We embrace innovative methodologies to develop unique strategies that drive lasting success.</p>
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary mt-4">Explore Our Services</a>
            </div>
          </div>
        </div>

        <div className="testimonial-section mt-5 pt-5" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
              <div className="testimonial-intro">
                <h3>Our Clients Speak Highly</h3>
                <p>Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.</p>
                <div className="swiper-nav-buttons mt-4">
                  <button className="slider-prev"><i className="bi bi-arrow-left"></i></button>
                  <button className="slider-next"><i className="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
              <div className="testimonial-slider swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="rating mb-3">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>"Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has significantly improved."</p>
                      <div className="client-info d-flex align-items-center mt-4">
                        <img src={defaultDp} className="client-img" alt="Client" loading="lazy" />
                        <div>
                          <h6 className="mb-0">Eleanor</h6>
                          <span>Operations Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="rating mb-3">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                      <p>"Collaborating with their team was a revelation. Their innovative strategies guided us toward achieving our objectives with precision and speed."</p>
                      <div className="client-info d-flex align-items-center mt-4">
                        <img src={defaultDp} className="client-img" alt="Client" loading="lazy" />
                        <div>
                          <h6 className="mb-0">David</h6>
                          <span>Product Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="rating mb-3">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>"The depth of knowledge and unwavering dedication they bring to every project is exceptional. They've become an essential ally in driving our expansion."</p>
                      <div className="client-info d-flex align-items-center mt-4">
                        <img src={defaultDp} className="client-img" alt="Client" loading="lazy" />
                        <div>
                          <h6 className="mb-0">Isabella</h6>
                          <span>Research Analyst</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="rating mb-3">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                      <p>"Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory."</p>
                      <div className="client-info d-flex align-items-center mt-4">
                        <img src={defaultDp} className="client-img" alt="Client" loading="lazy" />
                        <div>
                          <h6 className="mb-0">Olivia</h6>
                          <span>Development Strategist</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

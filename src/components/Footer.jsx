import React from "react";
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      
      {/* LEFT SIDE – SOCIAL ICONS */}
      <div className="footer-social">
        <a href="#" aria-label="X">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>

      {/* RIGHT SIDE – OFFICE DETAILS */}
      <div className="footer-content">
        <div className="footer-block">
          <h4>Corporate Office</h4>
          <p>
            COVAI TECH PARK, Site No: 90,<br />
            Kovai Thiru Nagar, Kalapatty Village,<br />
            Coimbatore – 641 014
          </p>
        </div>

        <div className="footer-block">
          <h4>Branch Office</h4>
          <p>
            Civil Aerodrome Post, No. 97,<br />
            Dr Jaganathanagar,<br />
            Coimbatore – 641 014
          </p>
        </div>

        <div className="footer-block">
          <p><strong>Office Direct:</strong> 0422-4772362</p>
          <p><strong>Office Mobile:</strong> +91 96295 93615</p>
          <p><strong>US Toll Free:</strong> (+1) (888) 219 5755</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@mediamaticstudio.com">
              support@mediamaticstudio.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

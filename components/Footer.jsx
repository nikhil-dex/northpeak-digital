import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__giant">
        NORTH<span>PEAK</span>
      </h1>

      <div className="footer__cols">
        <div className="footer__col">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Shopify</li>
            <li>SEO</li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="https://github.com/nikhil-dex"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://nikhil-dex.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 NorthPeak Digital</span>

        <span>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built for Digital Heroes Training Task
          </a>
        </span>

        <span>Designed & Developed by Nikhil</span>
      </div>
    </footer>
  );
}

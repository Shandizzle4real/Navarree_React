import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <p className="footer-text">
          © {new Date().getFullYear()} Navarre Appliance Company
        </p>

        <div className="social-icons">
          
          {/* Facebook */}
          <a
            href="https://facebook.com/navarreappliancecompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="icon-btn facebook"
          >
            {/* Facebook SVG */}
            <svg viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.4v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>

          {/* Nextdoor */}
          <a
            href="https://nextdoor.com/page/navarre-appliance-company"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nextdoor"
            className="icon-btn nextdoor"
          >
            {/* Simple house icon */}
            <svg viewBox="0 0 24 24">
              <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
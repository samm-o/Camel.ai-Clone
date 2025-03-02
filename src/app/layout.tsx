import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "camelAI: AI-powered Data Analysis | SQL-Free Business Intelligence",
  description: "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights, charts, and dashboards from your database. Connect to PostgreSQL, Snowflake, BigQuery & more. No SQL needed.",
  keywords: "camelAI, AI data analyst, natural language BI tool, SQL alternative, business intelligence software, data visualization tool, database chat interface, AI analytics platform, real-time data insights, automated data analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/qaml-favicon.png" type="image/png" sizes="64x64" />
        <script defer src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script defer src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Script id="show-animation">
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                  }
                });
              });
              
              const hiddenElements = document.querySelectorAll('.hidden, .hidden-slide, .hidden-drop');
              hiddenElements.forEach((el) => observer.observe(el));
            });
          `}
        </Script>
        <footer>
          <div className="footer-section-holder">
            <div className="footer-header-section">
              <div className="footer-header-section-left">
                <div className="footer-header">
                  <img src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI logo" width={150} height={40} />
                </div>
                <div className="footer-subheader">
                  <form id="signup-form">
                    <label htmlFor="email"><p>Subscribe to our newsletter for product updates</p></label>
                    <div className="footer-newsletter-signup">
                      <input className="input-field" type="email" id="email" name="email" placeholder="email" required />
                      <button className="primary-button footer" type="submit" id="submit-button">
                        Subscribe
                        <img className="button-icon" src="https://camelai.com/assets/images/chevron-right-black.png" alt="chevron right" width={20} height={20} />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="footer-social-links-section">
                  <a href="https://x.com/usecamelai">
                    <img src="https://camelai.com/assets/images/x.com.png" alt="x logo" width={24} height={24} />
                  </a>
                  <a href="https://discord.gg/juNYATfJTZ">
                    <img src="https://camelai.com/assets/images/discord.png" alt="discord logo" width={24} height={24} />
                  </a>
                  <a href="https://www.linkedin.com/company/usecamelai">
                    <img src="https://camelai.com/assets/images/linkedin.png" alt="linkedin logo" width={24} height={24} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw">
                    <img src="https://camelai.com/assets/images/youtube.png" alt="youtube logo" width={24} height={24} />
                  </a>
                  <a href="https://github.com/qaml-ai">
                    <img src="https://camelai.com/assets/images/github.png" alt="github logo" width={24} height={24} />
                  </a>
                </div>
              </div>
              <div className="footer-header-section-right">
                <div className="footer-docs-list">
                  <p className="footer-docs-header">Company</p> 
                  <a href="/about-us"><p>About Us</p></a>
                  <a href="https://cal.com/ipr-camelai/book-a-demo"><p>Schedule a call</p></a>
                  <a href="mailto:contact@camelai.com"><p>Email Us</p></a>
                </div>
                <div className="footer-docs-list">
                  <p className="footer-docs-header">Links</p> 
                  <a href="/data-sources"><p>Data Sources</p></a>
                  <a href="https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw"><p>Demo Videos</p></a>
                  <a href="/blog"><p>Blog</p></a>
                  <a href="https://www.producthunt.com/products/camelai"><p>Product Hunt</p></a>
                </div>
                <div className="footer-docs-list">
                  <p className="footer-docs-header">Legal</p> 
                  <a href="/terms"><p>Terms</p></a>
                  <a href="/privacy-policy"><p>Privacy Policy</p></a>
                  <a href="/security"><p>Security</p></a>
                  <a href="/acceptable-use"><p>Acceptable Use</p></a>
                </div>
              </div>
            </div>
            <div className="footer-bottom-space">
              <div className="footer-bottom">
                <p>© 2024 camelQA (DBA camelAI) | All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize particles
              if (typeof particlesJS !== 'undefined') {
                particlesJS('particles-js', {
                  particles: {
                    number: { value: 5 },
                    size: { value: 250 },
                    color: { value: ["#58F1FF", "#5F83F0", "#E54BDA", "#FF8D29", "#F83A31"] },
                    move: { speed: 5 },
                    line_linked: { enable: true, color: '#ffffff', opacity: 1 }
                  }
                });
              }
              
              // Hamburger menu functionality
              const dropdownMenu = document.querySelector('.dropdown-menu');
              const hamburgerMenu = document.querySelector('.hamburger-menu');
              
              if (hamburgerMenu && dropdownMenu) {
                hamburgerMenu.addEventListener('click', function() {
                  dropdownMenu.classList.toggle('show');
                });
                
                document.addEventListener('click', function(event) {
                  if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                    dropdownMenu.classList.remove('show');
                  }
                });
              }
              
              // Navbar scroll effect
              window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (navbar) {
                  if (window.scrollY > 70) {
                    navbar.classList.add('scrolled');
                  } else {
                    navbar.classList.remove('scrolled');
                  }
                }
              });
            });
          `
        }} />
      </body>
    </html>
  );
} 
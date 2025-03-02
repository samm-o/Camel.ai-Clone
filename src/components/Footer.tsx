import Script from 'next/script';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-section-holder">
          <div className="footer-header-section">
            <div className="footer-header-section-left">
              <div className="footer-header">
                <img src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI logo" width={100} height={80} />
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
                  <img src="https://camelai.com/assets/images/x.com.png" alt="x logo" width={24} height={30} />
                </a>
                <a href="https://discord.gg/juNYATfJTZ">
                  <img src="https://camelai.com/assets/images/discord.png" alt="discord logo" width={24} height={30} />
                </a>
                <a href="https://www.linkedin.com/company/usecamelai">
                  <img src="https://camelai.com/assets/images/linkedin.png" alt="linkedin logo" width={24} height={30} />
                </a>
                <a href="https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw">
                  <img src="https://camelai.com/assets/images/youtube.png" alt="youtube logo" width={24} height={30} />
                </a>
                <a href="https://github.com/qaml-ai">
                  <img src="https://camelai.com/assets/images/github.png" alt="github logo" width={24} height={30} />
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
    </>
  );
} 
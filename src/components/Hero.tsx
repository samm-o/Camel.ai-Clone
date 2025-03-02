import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-container-centered">
      <div id="particles-js"></div>
      <div className="blur-layer"></div>
      <div className="container">
        <section>
          <div className="hero" style={{ position: 'relative', overflow: 'show' }}>
            <div className="hero-header">
              <h1>The AI Data Analyst</h1>
            </div>
            <div className="second-line-hero">
              <h3>Ask questions, get instant charts and insights from your data.</h3>
            </div>
            <div className="hero-button-container">
              <Link href="https://app.camelai.com/" className="primary-button press-me-animation">
                Try free
                <Image 
                  className="button-icon" 
                  src="https://camelai.com/assets/images/chevron-right-black.png" 
                  alt="chevron right"
                  width={16}
                  height={28}
                />
              </Link>
              <Link href="https://cal.com/ipr-camelai/book-a-demo" className="secondary-button">
                Book demo
                <Image 
                  className="button-icon white" 
                  src="https://camelai.com/assets/images/chevron-right-black.png" 
                  alt="chevron right"
                  width={16}
                  height={28}
                />
              </Link>
            </div>
            <div className="hero-tags">
              <div className="yc-backed-tag">
                <Image 
                  src="https://camelai.com/assets/images/yc-logo.png" 
                  alt="yc logo" 
                  width={24} 
                  height={24} 
                />
                <p className="yc-text">Y Combinator backed</p>
              </div>
              <div className="yc-backed-tag">
                <Image src="https://camelai.com/assets/images/lock-icon.png" alt="lock" width={24} height={24} />
                <p className="yc-text">Enterprise Security</p>
              </div>
              <div className="yc-backed-tag">
                <Image src="https://camelai.com/assets/images/shield-icon.png" alt="shield" width={24} height={24} />
                <p className="yc-text">100% Data Privacy</p>
              </div>
            </div>
          </div>

		  <div className="video-section"> 
        <div className="video-wrapper" id="demo-video">
          <div className="video-container">
            <Link href="/demo" className="">
              <Image 
                className="" 
                src="https://camelai.com/assets/images/play-icon-2.png" 
                alt="play icon" 
                width={64} 
                height={64}
              />
            </Link>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ pointerEvents: 'none' }}
              poster="https://camelai.com/assets/images/camelai-gif-poster.jpg"
              className="demo-video"
            >
              <source src="https://camelai.com/assets/images/camelai-gif.mp4" type="video/mp4" />
            </video>
          </div>
        </div>						
      </div>
        </section>
      </div>
    </div>
  );
} 
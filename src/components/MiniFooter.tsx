import Image from "next/image";
import Link from "next/link";

export default function MiniFooter() {
  return (
    <div className="container-centered black">
      <div className="container">
        <section className="show">
          <div className="mini-footer-section-holder">
            <div className="mini-footer-left">
              <h2>Get started for <span className="gradient3-text">free.</span></h2>
            </div>
            <div className="mini-footer-right"> 
              <Link href="https://app.camelai.com/" className="primary-button">
                Try Free
                <Image 
                  className="button-icon" 
                  src="https://camelai.com/assets/images/chevron-right-black.png" 
                  alt="chevron right" 
                  width={8} 
                  height={20}
                />
              </Link>
              <Link href="https://cal.com/ipr-camelai/book-a-demo" className="secondary-button">
                Contact us
                <Image 
                  className="button-icon white" 
                  src="https://camelai.com/assets/images/chevron-right-black.png" 
                  alt="chevron right" 
                  width={8} 
                  height={20}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
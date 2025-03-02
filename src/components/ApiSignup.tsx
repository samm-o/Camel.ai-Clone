import Image from "next/image";

export default function ApiSignup() {
  return (
    <section className="show">
      <div className="api-signup-section-holder">
        <div className="api-signup-section">
          <div className="api-signup-left">
            <h2>Want to build with camelAI?</h2>
            <h3>Embed AI-powered analytics directly in your application with our API</h3>
            <button 
              className="primary-button variable-width" 
              data-tally-open="mV49Ba" 
              data-tally-emoji-text="👋" 
              data-tally-emoji-animation="wave"
            >
              Join API Waitlist
              <Image 
                className="button-icon" 
                src="https://camelai.com/assets/images/chevron-right-black.png" 
                alt="chevron right" 
                width={20} 
                height={20}
              />
            </button>
          </div>
          <div className="api-signup-right">
            <div className="api-signup-vp">
              <h3>Natural Language → SQL</h3>
              <p>Same powerful query engine that powers camelAI</p>
            </div>
            <div className="api-signup-vp">
              <h3>Secure Integration</h3>
              <p>Enterprise-grade security and permissions</p>
            </div>
            <div className="api-signup-vp">
              <h3>Flexible Integration</h3>
              <p>Full control over the user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
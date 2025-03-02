import Image from "next/image";

export default function DemoChat() {
  return (
    <section className="show">
      <div className="demo-ss-section-holder">
        <div className="demo-ss-header">
          <Image src="https://camelai.com/assets/images/code-icon.png" alt="code icon" width={32} height={32} />
          <h2>Ask any question</h2>
        </div>
        <div className="demo-ss-subheader"> 
          <h3>Camel uses your live data.<br/>Get tables and charts instantly.</h3>
        </div>
        <div className="demo-ss-image">
          <Image 
            src="https://camelai.com/assets/images/chat-demo-ss.png" 
            alt="Chat demo screenshot" 
            width={200} 
            height={450} 
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
} 
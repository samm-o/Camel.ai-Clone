import Image from "next/image";
import { FaCode } from "react-icons/fa6";

export default function DemoDash() {
  return (
    <section className="show">
      <div className="demo-ss-section-holder">
        <div className="demo-ss-header">
          <Image 
            src="https://camelai.com/assets/images/light-bulb-icon.png" 
            alt="light bulb icon" 
            width={32} 
            height={32}
          />
          <h2>Powerful Dashboards</h2>
        </div>
        <div className="demo-ss-subheader"> 
          <h3>Save any graph to a live dashboard.<br/>Start a chat to answer ad hoc questions.</h3>
        </div>
        <div className="demo-ss-image">
          <Image 
            src="https://camelai.com/assets/images/dashboard-demo-ss.png" 
            alt="Dashboard demo screenshot" 
            width={800} 
            height={450} 
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
} 
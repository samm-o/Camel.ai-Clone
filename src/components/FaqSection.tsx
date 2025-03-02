"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How is my data stored?",
      answer: <>camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our <Link href="/security">Security Policy</Link> and our <Link href="https://camelai.com/blog/FAQ-security/">security blog post</Link>.</>
    },
    {
      question: "Do you train on my data?",
      answer: <>No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies <Link href="https://openai.com/enterprise-privacy/">here</Link>.</>
    },
    {
      question: "Are my app connections secure?",
      answer: "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application."
    },
    {
      question: "How do you pull my data?",
      answer: "camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision."
    }
  ];

  return (
    <div className="container-centered grey-to-black">
      <div className="container">
        <section className="show">
          <div className="faqs-section-holder">
            <div className="centered-header">
              <h2>FAQs</h2>
            </div>
            <div className="questions-container-holder">
              {faqData.map((faq, index) => (
                <div className="question-box" key={index}>
                  <button 
                    className="question-box-header" 
                    onClick={() => toggleQuestion(index)}
                  >
                    <p>{faq.question}</p>
                    <Image 
                      className="chevron-up" 
                      src="https://camelai.com/assets/images/chevron-up-white.png" 
                      alt="Expand" 
                      width={20} 
                      height={20}
                      style={{ 
                        transform: activeQuestion === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  <div className="qb-separator"></div>
                  <div className={`question-box-body ${activeQuestion === index ? 'active' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
"use client"
import Link from "next/link";
import { useEffect } from "react";

function animateCount(el, to) {
    const duration = 1000;
    const start = 0;
    const end = parseInt(to);
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
export default function CounterBanner({ classname="", videoSrc="", heading, subHeading, count1, cnt1desc, count2, cnt2desc, count3, cnt3desc, count4, cnt4desc }){
    useEffect(() => {
            const elements = document.querySelectorAll('[data-count]');
            const options = {
              threshold: 0.5
            };
        
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                const el = entry.target;
        
                if (entry.isIntersecting) {
                  const countTo = el.getAttribute('data-count');
                  animateCount(el, countTo);
                  observer.unobserve(el); // Only animate once
                } else {
                  el.textContent = '0';
                }
              });
            }, options);
        
            elements.forEach(el => observer.observe(el));
        
            return () => observer.disconnect(); // Clean up on unmount
          }, []);
    return (
      <div className={`counter-sec banner ${classname}`}>
        <div className="bg">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="banner-wrapper">
            <div className="container">
              <h2>{heading}</h2>
              <p className="subhead">
                {subHeading}
              </p>
              <div className="counter-wrapper">
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count={count1}>0</span>+
                  </h5>
                  <p>{cnt1desc}</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count={count2}>0</span>+
                  </h5>
                  <p>{cnt2desc}</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count={count3}>0</span>+
                  </h5>
                  <p>{cnt3desc}</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count={count4}>0</span>+
                  </h5>
                  <p>{cnt4desc}</p>
                </div>
              </div>
              <Link href="javascript:;" className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
'use client';
import { useModalStore } from '@/store/modalStore';
import { useEffect, useState } from 'react';

export default function VideoPopup() {
  const isOpen = useModalStore((state) => state.isVideoOpen)
  const closeVideo = useModalStore((state) => state.closeVideo)
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const handleClick = (event) => {
      const videoTarget = event.target.closest("[data-video]");
      console.log(videoTarget);
      if (videoTarget) {
        let src = videoTarget.getAttribute("data-video");
        console.log(src);
        if (src.includes("youtube.com/embed/")) {
          const videoId = src.split("embed/")[1].split("?")[0];
          src += `&autoplay=1&mute=1&loop=1&playlist=${videoId}`;
        }
        setVideoSrc(src);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);


  return (
    <div className={`model video-pop ${isOpen ? "is-open" : ""}`}>
      <div className="model-body">
        <button className="close-video" onClick={closeVideo}>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {
          videoSrc && (
            <iframe id="iframe1" allow="autoplay;fullscreen" allowFullScreen src={videoSrc} />
          )
        }
      </div>
    </div>
  );
};
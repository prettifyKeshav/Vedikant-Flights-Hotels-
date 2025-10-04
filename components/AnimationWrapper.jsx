"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import enterView from "enter-view";
import "../public/assets/css/animate.css";

const AnimationWrapper = ({ children, delay = 500 }) => {
  const pathname = usePathname();
  const evRef = useRef(null);

  const initAnimations = () => {
    if (window.innerWidth <= 1007) return;

    if (evRef.current) {
      evRef.current.destroy();
      evRef.current = null;
    }

    evRef.current = enterView({
      selector: "[data-animate]",
      offset: 0,
      enter: (el) => el.classList.add("kmr-animate"),
      exit: (el) => el.classList.remove("kmr-animate"),
    });
  };

  useEffect(() => {
    const timer = setTimeout(initAnimations, delay);

    return () => {
      clearTimeout(timer);
      if (evRef.current) evRef.current.destroy();
    };
  }, [pathname, delay]);

  return <>{children}</>;
};

export default AnimationWrapper;

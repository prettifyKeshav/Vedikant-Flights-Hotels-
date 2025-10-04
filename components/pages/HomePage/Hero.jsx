"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useModalStore } from "@/store/modalStore"
// import AnimationWrapper from "@/components/AnimationWrapper";


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const openEnquire = useModalStore((state) => state.openEnquire)
    const swiperRef = useRef(null);

    const slidesData = [
        {
            heading: "Fighter Jet Standards",
            subheading: "Where Electronic Circuits Meet",
            video: "assets/video/vector-bg1.mp4",
            description:
                "Built with unmatched precision, our electronic circuits are engineered to meet the rigorous demands of aerospace-grade performance",
        },
        {
            heading: "Smart Circuits. Brilliant Lighting.",
            subheading: "Where Electronic Circuits Meet2",
            video: "assets/video/industries-banner.mp4",
            description:
                "Built with unmatched precision, our electronic circuits are engineered to meet the rigorous demands of aerospace-grade performance",
        },
        {
            heading: "Heading 3",
            video: "assets/video/contact-us-banner.mp4",
            subheading: "Default Subheading",
            description: "Default Description",
        },
        {
            heading: "Heading 4",
            video: "assets/video/Holding-Earth.mp4",
            subheading: "Default Subheading",
            description: "Default Description",
        },
        {
            heading: "Heading 5",
            video: "assets/video/Holding-Earth.mp4",
            subheading: "Default Subheading",
            description: "Default Description",
        },
        {
            heading: "Heading 6",
            video: "assets/video/Holding-Earth.mp4",
            subheading: "Default Subheading",
            description: "Default Description",
        },
    ];

    const updatePaginationClasses = () => {
        const bullets = document.querySelectorAll(".swiper-pagination-bullet");
        bullets.forEach((bullet, index) => {
            if (index < activeIndex) {
                bullet.classList.add("fill");
            } else {
                bullet.classList.remove("fill");
            }
        });
    };

    useEffect(() => {
        updatePaginationClasses();
    }, [activeIndex]);

    return (
        // <AnimationWrapper>
            <div className="banner home-banner">
                <div className="bg">
                    <figure className="bg-video">
                        <video playsInline autoPlay muted loop width="100%" height="100%" style={{ opacity: '15%' }}>
                            <source src="assets/video/home-bg-banner.mp4" type="video/mp4" />
                        </video>
                        <div className="x-vector-icon" data-animate="zoom-in">
                            <video
                                key={activeIndex}
                                src={slidesData[activeIndex].video}
                                autoPlay
                                muted
                                loop
                                className="video-box"
                            />
                        </div>
                    </figure>
                    <div className="banner-wrapper">
                        <div className="container-fluid">
                            <div className="heading-wrapper" data-animate="fade-right">
                                {slidesData.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`heading ${activeIndex === index ? "active" : ""}`}
                                    >
                                        <h2>{slide.subheading || "Default Subheading"}</h2>
                                        <h1>{slide.heading}</h1>
                                        <p>{slide.description || "Default Description"}</p>
                                        <button onClick={openEnquire}>{slide.customBtn || "GET IN TOUCH"}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            const isActive = index < activeIndex ? "fill" : "";
                            return `<span class="${className} ${isActive}"></span>`;
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                        updatePaginationClasses();
                    }}
                    className="mySwiper"
                    autoplay={{ delay: 11000 }}
                >
                    {slidesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-box">&nbsp;</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        // </AnimationWrapper>
    );
};

export default Hero;
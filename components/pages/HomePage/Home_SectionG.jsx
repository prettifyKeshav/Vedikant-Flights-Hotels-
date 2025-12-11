"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useModalStore } from "@/store/modalStore";


const flightDeals = [
    {
        id: 1,
        mainImage: "/assets/images/home/Business-Travellers/1.jpg",
        name: "Name Here",
        city: "Gurugram",
    },
    {
        id: 2,
        mainImage: "/assets/images/home/Business-Travellers/2.jpg",
        name: "Name Here",
        city: "Gurugram",
    },
    {
        id: 3,
        mainImage: "/assets/images/home/Business-Travellers/3.jpg",
        name: "Name Here",
        city: "Gurugram",
    },
    {
        id: 4,
        mainImage: "/assets/images/home/Business-Travellers/4.jpg",
        name: "Name Here",
        city: "Gurugram",
    },
    {
        id: 5,
        mainImage: "/assets/images/home/Business-Travellers/1.jpg",
        name: "Name Here",
        city: "Gurugram",
    },

];

const Home_SectionG = () => {
    const swiperRef = useRef(null);
    const openVideo = useModalStore((state) => state.openVideo)

    const handleSwiperInit = (swiper) => {
        if (swiper.slides.length <= 1) {
            swiper.navigation.destroy();
            document.querySelector(".homesecG-nav-prev").style.display = "none";
            document.querySelector(".homesecG-nav-next").style.display = "none";
        }
    };

    return (
        <div className="home-secG">
            <div className="container">
                <div className="heading">
                    <div className="col">
                        <h2>Business Travellers Love Us</h2>
                    </div>

                    <div className="col">
                        <div className="swiper-nav">
                            <button className="homesecG-nav-prev">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="#232963"
                                        d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                                        strokeWidth="25.5"
                                        stroke="#232963"
                                    />
                                </svg>
                            </button>
                            <button className="homesecG-nav-next">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="#232963"
                                        d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                                        strokeWidth="25.5"
                                        stroke="#232963"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".homesecG-nav-next",
                        prevEl: ".homesecG-nav-prev",
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        540: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    loop={flightDeals.length > 1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleSwiperInit(swiper);
                    }}
                >
                    {flightDeals.map((deal) => (
                        <SwiperSlide key={deal.id}>
                            <figure>
                                <Image
                                    src={deal.mainImage}
                                    alt="Cheapest flight deal"
                                    width={390}
                                    height={248}
                                />
                                <div className="content">
                                    <div className="flex-box">
                                        <div className="col">
                                            <p>{deal.name}</p>
                                            <p>{deal.city}</p>
                                        </div>
                                        <div className="col">
                                            <div className="play-button" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z">
                                                <button type="button" className="play-btn"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Home_SectionG;
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const flightDeals = [
    {
        id: 1,
        link: "/",
        mainImage: "/assets/images/home/first-slider/1.jpg",
        city: "Name Here",
        country: "Gurugram",
    },
   
];

const Home_SectionG = () => {
    const swiperRef = useRef(null);

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
                        <div className="swiper-nav" data-animate="zoom-in">
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
                    slidesPerView={4}
                    loop={flightDeals.length > 1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleSwiperInit(swiper);
                    }}
                >
                    {flightDeals.map((deal) => (
                        <SwiperSlide key={deal.id}>
                            <Link href={deal.link}>
                                <figure>
                                    <Image
                                        src={deal.mainImage}
                                        alt="Cheapest flight deal"
                                        width={390}
                                        height={248}
                                    />
                                    <div className="content">
                                        <p>{deal.city}</p>
                                        <p>{deal.country}</p>
                                    </div>
                                </figure>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Home_SectionG;
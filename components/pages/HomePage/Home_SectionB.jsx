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
        city: "Kathmandu",
        country: "Nepal",
        details: [
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/1.png",
                type: "Direct",
            },
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/1.png",
                type: "Direct",
            },
        ],
        price: "12,002",
        currency: "₹",

    },
    {
        id: 2,
        link: "/",
        mainImage: "/assets/images/home/first-slider/2.jpg",
        city: "Muscat",
        country: "Oman",
        details: [
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/2.png",
                type: "Direct",
            },
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/2.png",
                type: "Direct",
            },
        ],
        price: "12,002",
        currency: "₹",

    },
    {
        id: 3,
        link: "/",
        mainImage: "/assets/images/home/first-slider/3.jpg",
        city: "Bangkok",
        country: "Thailand",
        details: [
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/3.png",
                type: "Direct",
            },
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/3.png",
                type: "Direct",
            },
        ],
        price: "12,002",
        currency: "₹",
    },
    {
        id: 4,
        link: "/",
        mainImage: "/assets/images/home/first-slider/1.jpg",
        city: "Kathmandu",
        country: "Nepal",
        details: [
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/1.png",
                type: "Direct",
            },
            {
                date: "Sun, 30 Nov",
                route: "DEL - KTM with Air India",
                icon: "/assets/images/home/first-slider/map/1.png",
                type: "Direct",
            },
        ],
        price: "12,002",
        currency: "₹",

    },
];

const Home_SectionB = () => {
    const swiperRef = useRef(null);

    const handleSwiperInit = (swiper) => {
        if (swiper.slides.length <= 1) {
            swiper.navigation.destroy();
            document.querySelector(".homesecB-nav-prev").style.display = "none";
            document.querySelector(".homesecB-nav-next").style.display = "none";
        }
    };

    return (
        <div className="home-secB">
            <div className="container">
                <div className="heading">
                    <div className="col">
                        <h2>Cheapest Fares From</h2>
                        <p>Here are the flight deals with the lowest prices.</p>
                    </div>

                    <div className="col">
                        <div className="swiper-nav" data-animate="zoom-in">
                            <button className="homesecB-nav-prev">
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
                            <button className="homesecB-nav-next">
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
                        nextEl: ".homesecB-nav-next",
                        prevEl: ".homesecB-nav-prev",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        540: { slidesPerView: 1.2 },
                        768: { slidesPerView: 1.4 },
                        991: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                    // slidesPerView={3}
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
                                <figcaption>
                                    <div className="flex-box">
                                        {deal.details.map((detail, index) => (
                                            <div className="col" key={index}>
                                                <div className="left">
                                                    <figure>
                                                        <Image
                                                            src={detail.icon}
                                                            width={44}
                                                            height={35}
                                                            alt="ico"
                                                        />
                                                    </figure>
                                                    <div className="info">
                                                        <p>{detail.date}</p>
                                                        <p>{detail.route}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <p>{detail.type}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col">
                                            <p>
                                                from {deal.currency} <span>{deal.price}</span>
                                            </p>
                                            <Image
                                                src="/assets/images/home/first-slider/right-arrow.svg"
                                                width={15}
                                                height={15}
                                                alt="right arrow"
                                            />
                                        </div>
                                    </div>
                                </figcaption>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Home_SectionB;
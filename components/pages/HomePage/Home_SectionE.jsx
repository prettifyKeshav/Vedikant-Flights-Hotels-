"use client";

import React, { useRef, useState } from "react";
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
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Bloomrooms @ Link Road",
        desc: "Jungpura Extension",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "newdelhi"
    },
    {
        id: 2,
        link: "/",
        mainImage: "/assets/images/home/second-slider/2.jpg",
        title: "Seaside Serenity Hotel",
        desc: "Mumbai Beachfront",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "newdelhi"
    },
    {
        id: 3,
        link: "/",
        mainImage: "/assets/images/home/second-slider/3.jpg",
        title: "Urban Escape Bengaluru",
        desc: "Koramangala",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "newdelhi"
    },
    {
        id: 4,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "newdelhi"
    },
    {
        id: 5,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "mumbai"
    },
    {
        id: 6,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "mumbai"
    },
    {
        id: 7,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "mumbai"
    },
    {
        id: 8,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "mumbai"
    },
    {
        id: 9,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "bengaluru"
    },
    {
        id: 10,
        link: "/",
        mainImage: "/assets/images/home/second-slider/1.jpg",
        title: "Hyderabad Haven",
        desc: "Banjara Hills",
        figcaption: {
            rating: 4.5,
            ratingText: "Excellent",
            userCount: "676 Users",
            price: "₹ 5,002",
        },
        category: "bengaluru"
    },
];

const Home_SectionE = () => {
    const swiperRef = useRef(null);
    const [isActiveTab, setIsActiveTab] = useState("newdelhi");

    const handleTabClick = (tab) => {
        setIsActiveTab(tab);
    };

    const handleSwiperInit = (swiper) => {
        if (swiper.slides.length <= 1) {
            swiper.navigation.destroy();
            document.querySelector(".homesecE-nav-prev").style.display = "none";
            document.querySelector(".homesecE-nav-next").style.display = "none";
        }
    };

    const tabs = [
        { name: "New Delhi", value: "newdelhi" },
        { name: "Mumbai", value: "mumbai" },
        { name: "Bengaluru", value: "bengaluru" },
        { name: "Hyderabad", value: "hyderabad" },
        { name: "View All", value: "viewall" },
    ];

    return (
        <div className="home-secE">
            <div className="container">
                <div className="heading">
                    <div className="col">
                        <h2>Best Deals for Hotels</h2>
                    </div>

                    <div className="col">
                        <ul className="tab-nav">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.value}
                                    className={isActiveTab === tab.value ? "active" : ""}
                                    data-tab={tab.value}
                                    onClick={() => handleTabClick(tab.value)}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>

                        <div className="swiper-nav">
                            <button className="homesecE-nav-prev">
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
                            <button className="homesecE-nav-next">
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

                <div className="tab-nav-content">
                    <div className={`tabs ${isActiveTab === "newdelhi" ? 'active' : ""}`} data-tab="newdelhi">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".homesecE-nav-next",
                                prevEl: ".homesecE-nav-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            // loop={flightDeals.filter((deal) => deal.category === "newdelhi").length > 1}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                handleSwiperInit(swiper);
                            }}
                        >
                            {flightDeals
                                .filter((deal) => deal.category === "newdelhi")
                                .map((deal) => (
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
                                                <h4>{deal.title}</h4>
                                                <p>{deal.desc}</p>
                                                <div className="grid-box">
                                                    <div className="col">
                                                        <span>{deal.figcaption.rating}</span>
                                                        <Image src="/assets/images/home/icon/star.svg" width={15} height={15} alt="star image" />
                                                    </div>
                                                    <div className="col">{deal.figcaption.ratingText}</div>
                                                    <div className="col">{deal.figcaption.userCount}</div>
                                                    <div className="col">{deal.figcaption.price}</div>
                                                </div>
                                            </figcaption>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                    <div className={`tabs ${isActiveTab === "mumbai" ? 'active' : ""}`} data-tab="mumbai">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".homesecE-nav-next",
                                prevEl: ".homesecE-nav-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            // loop={flightDeals.filter((deal) => deal.category === "mumbai").length > 1}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                handleSwiperInit(swiper);
                            }}
                        >
                            {flightDeals
                                .filter((deal) => deal.category === "mumbai")
                                .map((deal) => (
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
                                                <h4>{deal.title}</h4>
                                                <p>{deal.desc}</p>
                                                <div className="grid-box">
                                                    <div className="col">
                                                        <span>{deal.figcaption.rating}</span>
                                                        <Image src="/assets/images/home/icon/star.svg" width={15} height={15} alt="star image" />
                                                    </div>
                                                    <div className="col">{deal.figcaption.ratingText}</div>
                                                    <div className="col">{deal.figcaption.userCount}</div>
                                                    <div className="col">{deal.figcaption.price}</div>
                                                </div>
                                            </figcaption>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                    <div className={`tabs ${isActiveTab === "bengaluru" ? 'active' : ""}`} data-tab="bengaluru">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".homesecE-nav-next",
                                prevEl: ".homesecE-nav-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            // loop={flightDeals.filter((deal) => deal.category === "bengaluru").length > 1}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                handleSwiperInit(swiper);
                            }}
                        >
                            {flightDeals
                                .filter((deal) => deal.category === "bengaluru")
                                .map((deal) => (
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
                                                <h4>{deal.title}</h4>
                                                <p>{deal.desc}</p>
                                                <div className="grid-box">
                                                    <div className="col">
                                                        <span>{deal.figcaption.rating}</span>
                                                        <Image src="/assets/images/home/icon/star.svg" width={15} height={15} alt="star image" />
                                                    </div>
                                                    <div className="col">{deal.figcaption.ratingText}</div>
                                                    <div className="col">{deal.figcaption.userCount}</div>
                                                    <div className="col">{deal.figcaption.price}</div>
                                                </div>
                                            </figcaption>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                    <div className={`tabs ${isActiveTab === "viewall" ? 'active' : ""}`} data-tab="viewall">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".homesecE-nav-next",
                                prevEl: ".homesecE-nav-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            // loop={flightDeals.length > 1}
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
                                            <h4>{deal.title}</h4>
                                            <p>{deal.desc}</p>
                                            <div className="grid-box">
                                                <div className="col">
                                                    <span>{deal.figcaption.rating}</span>
                                                    <Image src="/assets/images/home/icon/star.svg" width={15} height={15} alt="star image" />
                                                </div>
                                                <div className="col">{deal.figcaption.ratingText}</div>
                                                <div className="col">{deal.figcaption.userCount}</div>
                                                <div className="col">{deal.figcaption.price}</div>
                                            </div>
                                        </figcaption>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home_SectionE;
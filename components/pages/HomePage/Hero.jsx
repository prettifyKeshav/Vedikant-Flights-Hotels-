"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    const swiperRef = useRef(null);

    const slidesData = [
        { image: "assets/images/home/banner/swiper-1.jpg", },
        { image: "assets/images/home/banner/swiper-1.jpg", },
        { image: "assets/images/home/banner/swiper-1.jpg", },
        { image: "assets/images/home/banner/swiper-1.jpg", },
    ];

    return (
        <div className="banner home-banner">
            <div className="bg">
                <div className="banner-wrapper">
                    <div className="container">
                        <div className="banner-heading">
                            <ul>
                                <li>
                                    <Link href="/" className="active">
                                        <figure>
                                            <Image src="assets/images/home/icon/checked.svg" width={11} height={8} alt="check icon"></Image>
                                        </figure>
                                        <span>One Way</span>
                                    </Link>
                                </li>

                                <li>

                                    <Link href="/" className="">
                                        <figure>
                                            <Image src="assets/images/home/icon/checked.svg" width={11} height={8} alt="check icon"></Image>
                                        </figure>
                                        <span>Round Trip</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-box">

                            <div className="col">
                                <div className="flight-search-container">
                                    <div className="location-row">
                                        <div className="location-section">
                                            <p className="location-label">From</p>
                                            <p className="location-name">Delhi</p>
                                            <p className="location-code">DEL, Delhi Airport India...</p>
                                        </div>
                                        <Link href="/" className="switch-location">
                                            <figure>
                                                <Image src="assets/images/home/icon/switch-icon.svg" width={25} height={25} alt="switch icon"></Image>
                                            </figure>
                                        </Link>
                                        <div className="location-section">
                                            <p className="location-label">To</p>
                                            <p className="location-name">Kochi</p>
                                            <p className="location-code">COK, Cochin International...</p>
                                        </div>
                                    </div>

                                    <div className="details-row">
                                        <div className="detail-section">
                                            <p className="detail-label">Departure</p>
                                            <p className="detail-value"><b>16</b> <span>Sep'25</span></p>
                                            <p className="detail-text">Tuesday</p>
                                        </div>
                                        <div className="detail-section">
                                            <p className="detail-label">Return</p>
                                            <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                        </div>
                                        <div className="detail-section">
                                            <p className="detail-label">Travellers & Class</p>
                                            <p className="detail-value"><b>1</b> <span>Traveller</span></p>
                                            <p className="detail-text">Economy/Premium Economy</p>
                                        </div>
                                    </div>
                                    <button className="search-button">SEARCH</button>
                                </div>
                            </div>


                            {/* <div className="flight-search-container">
                                <div className="flight-search-card">
                                    <div className="location-row">
                                        <div className="location-section">
                                            <p className="location-label">From</p>
                                            <p className="location-name">Delhi</p>
                                            <p className="location-code">DEL, Delhi Airport India...</p>
                                        </div>
                                        <div className="location-arrow">
                                            <svg className="arrow-icon" fill="#8B5CF6" viewBox="0 0 24 24">
                                                <path d="M10 6l6 6-6 6V6z" />
                                            </svg>
                                        </div>
                                        <div className="location-section">
                                            <p className="location-label">To</p>
                                            <p className="location-name">Kochi</p>
                                            <p className="location-code">COK, Cochin International...</p>
                                        </div>
                                    </div>
                                    <div className="details-row">
                                        <div className="detail-section">
                                            <p className="detail-label">Departure</p>
                                            <p className="detail-value">16 Sep'25</p>
                                            <p className="detail-day">Tuesday</p>
                                        </div>
                                        <div className="detail-section">
                                            <p className="detail-label">Return</p>
                                            <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                        </div>
                                        <div className="detail-section">
                                            <p className="detail-label">Travellers & Class</p>
                                            <p className="detail-value">1 Traveller</p>
                                            <p className="detail-text">Economy/Premium Economy</p>
                                        </div>
                                    </div>
                                    <button className="search-button">SEARCH</button>
                                </div>
                            </div> */}

                            <div className="col">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    className="mySwiper"
                                    autoplay={{ delay: 5000 }}
                                    loop={true}
                                >
                                    {slidesData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slide-box">
                                                <img
                                                    src={item.image}
                                                    alt={`Slide ${index + 1}`}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
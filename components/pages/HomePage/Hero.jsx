"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import FlightSearchDropdown from "@/components/FlightSearchDropdown";

const Hero = () => {
    const swiperRef = useRef(null);

    const [locations, setLocations] = useState({
        from: { name: "Delhi", code: "DEL, Delhi Airport India..." },
        to: { name: "Kochi", code: "COK, Cochin International..." },
    });

    const handleFromSelect = (item) => {
        setLocations((prev) => ({
            ...prev,
            from: { name: item.name.split(",")[0], code: `${item.code}, ${item.subtitle}...` },
        }));
    };

    const handleToSelect = (item) => {
        setLocations((prev) => ({
            ...prev,
            to: { name: item.name.split(",")[0], code: `${item.code}, ${item.subtitle}...` },
        }));
    };

    const handleSwitch = (e) => {
        e.preventDefault();
        setLocations((prev) => ({
            from: prev.to,
            to: prev.from,
        }));
    };

    const slidesData = [
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
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
                                <form action="">
                                    <div className="flight-search-container">
                                        <div className="location-row">
                                            <FlightSearchDropdown
                                                label="From"
                                                name={locations.from.name}
                                                code={locations.from.code}
                                                onSelect={handleFromSelect}
                                            />
                                            <div className="switch-location" onClick={handleSwitch} style={{ cursor: "pointer" }}>
                                                <figure>
                                                    <Image src="assets/images/home/icon/switch-icon.svg" width={25} height={25} alt="switch icon"></Image>
                                                </figure>
                                            </div>
                                            <FlightSearchDropdown
                                                label="To"
                                                name={locations.to.name}
                                                code={locations.to.code}
                                                onSelect={handleToSelect}
                                            />
                                        </div>

                                        <div className="details-row">
                                            <Link href="/" className="detail-section">
                                                <p className="detail-label">Departure</p>
                                                <p className="detail-value"><b>16</b> <span>Sep'25</span></p>
                                                <p className="detail-text">Tuesday</p>
                                            </Link>

                                            <Link href="/" className="detail-section">
                                                <p className="detail-label">Return</p>
                                                <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                            </Link>
                                            <Link href="/" className="detail-section">
                                                <p className="detail-label">Travellers & Class</p>
                                                <p className="detail-value"><b>1</b> <span>Traveller</span></p>
                                                <p className="detail-text">Economy/Premium Economy</p>
                                            </Link>
                                        </div>

                                        <button className="search-button">SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            {/*  */}
                            <div className="col">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
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
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
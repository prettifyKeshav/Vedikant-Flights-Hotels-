"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/components/serviceslider.css"
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSlider() {
    const swiperRef = useRef(null);
    return (
        <div className="service-slider">
            <div className="swiper-nav service-nav">
                <button className="service-prev"><Image src="/assets/icon/swiper-nav-left.svg" width={37} height={37} alt="swiper icon"></Image></button>
                <button className="service-next"><Image src="/assets/icon/swiper-nav-right.svg" width={37} height={37} alt="swiper icon"></Image></button>
            </div>
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                speed={1000}
                navigation={{
                    prevEl: ".service-prev",
                    nextEl: ".service-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    540: {
                        slidesPerView: 2.1,
                    },
                    991: {
                        slidesPerView: 2.2,
                    },
                    1200: {

                    }
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <Link href="#">
                        <div className="item-md">
                            <figure>
                                <img src="/assets/images/home/service-slider/1.jpg"></img>
                            </figure>
                            <figcaption>
                                <h5>SMT PCB Assembly</h5>
                                <p>One of the most valuable services that an EMS can provide to a customer is engineering and design support.</p>
                                <button><span>Explore</span></button>
                            </figcaption>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">
                        <div className="item-md">
                            <figure>
                                <img src="/assets/images/home/service-slider/2.jpg"></img>
                            </figure>
                            <figcaption>
                                <h5>Design for Manufacturing</h5>
                                <p>One of the most valuable services that an EMS can provide to a customer is engineering and design support.</p>
                                <button><span>Explore</span></button>
                            </figcaption>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">
                        <div className="item-md">
                            <figure>
                                <img src="/assets/images/home/service-slider/3.jpg"></img>
                            </figure>
                            <figcaption>
                                <h5>Engineering and Design</h5>
                                <p>One of the most valuable services that an EMS can provide to a customer is engineering and design support.</p>
                                <button><span>Explore</span></button>
                            </figcaption>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#">
                        <div className="item-md">
                            <figure>
                                <img src="/assets/images/home/service-slider/1.jpg"></img>
                            </figure>
                            <figcaption>
                                <h5>SMT PCB Assembly</h5>
                                <p>One of the most valuable services that an EMS can provide to a customer is engineering and design support.</p>
                                <button><span>Explore</span></button>
                            </figcaption>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

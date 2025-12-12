"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Business_Partner = [
    { id: 1, image: "/assets/images/home/business-partner/1.png", alt: "Certification One" },
    { id: 2, image: "/assets/images/home/business-partner/2.png", alt: "Certification Two" },
    { id: 3, image: "/assets/images/home/business-partner/3.png", alt: "Certification Three" },
    { id: 4, image: "/assets/images/home/business-partner/4.png", alt: "Certification Four" },
    { id: 5, image: "/assets/images/home/business-partner/5.png", alt: "Certification Five" },
];

const Home_SectionA = () => {
    return (
        <section>
            <div className="home-secA">
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <p>Corporate Partner to</p>
                            <p>20,648</p>
                            <p>Businesses</p>
                        </div>

                        <div className="col">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={0}
                                loop={true}
                                speed={2000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                breakpoints={{
                                    0: { slidesPerView: 2.2 },
                                    540: { slidesPerView: 2.1 },
                                    768: { slidesPerView: 4 },
                                    991: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                            >
                                {Business_Partner.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <figure>
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                width={136}
                                                height={48}
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                        </figure>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_SectionA;

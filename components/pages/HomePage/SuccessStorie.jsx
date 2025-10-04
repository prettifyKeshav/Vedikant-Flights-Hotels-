"use client";

import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/components/successstories.css"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SuccessStorie = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <section>
                <div className="home-secE" data-animate="fade-up">
                    <div className="heading">
                        <h2>Success Stories</h2>
                    </div>
                    {/* <SuccessStories /> */}

                    <div className="sucess-slider">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            spaceBetween={80}
                            slidesPerView={2.3}
                            speed={1000}
                            centeredSlides={true}
                            navigation={{
                                prevEl: ".sucess-prev",
                                nextEl: ".sucess-next",
                            }}
                            pagination={{
                                type: "progressbar",
                                el: ".swiper-pagination",
                                clickable: true,
                                progressbarFillClass: "swiper-pagination-progressbar-fill",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,

                                },
                                768: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 20,
                                },
                                991: {
                                    slidesPerView: 2.2,
                                },
                                1024: {
                                    spaceBetween: 20,
                                },
                                1280: {
                                    spaceBetween: 80,
                                    
                                }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            <SwiperSlide>
                                <Link href="#">
                                    <div className="item-md">
                                        <figure>
                                            <Image src="/assets/images/home/user-image.jpg" width={37} height={37} alt="user image" />
                                        </figure>
                                        <p>Great job to you and your team. All boards were completed way ahead of schedule and the work was very professional. It’s great to have such a trusted partner to work with.</p>
                                        <div className="user-name">
                                            <span>Don C.</span>
                                            <span>Senior Program Manager</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="#">
                                    <div className="item-md">
                                        <figure>
                                            <Image src="/assets/images/home/user-image.jpg" width={37} height={37} alt="user image" />
                                        </figure>
                                        <p>Great job to you and your team. All boards were completed way ahead of schedule and the work was very professional. It’s great to have such a trusted partner to work with.</p>
                                        <div className="user-name">
                                            <span>Don C.</span>
                                            <span>Senior Program Manager</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="#">
                                    <div className="item-md">
                                        <figure>
                                            <Image src="/assets/images/home/user-image.jpg" width={37} height={37} alt="user image" />
                                        </figure>
                                        <p>Great job to you and your team. All boards were completed way ahead of schedule and the work was very professional. It’s great to have such a trusted partner to work with.</p>
                                        <div className="user-name">
                                            <span>Don C.</span>
                                            <span>Senior Program Manager</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="#">
                                    <div className="item-md">
                                        <figure>
                                            <Image src="/assets/images/home/user-image.jpg" width={37} height={37} alt="user image" />
                                        </figure>
                                        <p>Great job to you and your team. All boards were completed way ahead of schedule and the work was very professional. It’s great to have such a trusted partner to work with.</p>
                                        <div className="user-name">
                                            <span>Don C.</span>
                                            <span>Senior Program Manager</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            
                            <div className="custom-pagination">
                                <div className="swiper-pagination"></div>
                                <div className="swiper-nav">
                                    <button className="sucess-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1" /></svg></button>
                                    <button className="sucess-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1" /></svg></button>
                                </div>
                            </div>
                        </Swiper>


                    </div>

                </div>
            </section>
        </>
    )
}

export default SuccessStorie
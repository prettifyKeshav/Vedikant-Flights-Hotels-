"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useModalStore } from "@/store/modalStore";
export default function TestimonySlider() {
    const openVideo = useModalStore((state) => state.openVideo)
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100)
    }, [])
    return(
        <div className="testimony_slider_wrapper sec-pad">
                    <div className="container-fluid slider-section">
                        <div className="upper-sec">
                        <div className="heading">
                            <h2>Experiences Shared, Bonds Strengthened.</h2>
                        </div>
                        <div className="slider-nav">
                            <button type="button" className="swiper-prev testimony-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                            <button type="button" className="swiper-next testimony-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                        </div>
                        </div>
                    <Swiper 
                        ref={swiperRef}
                        className="testimony_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".testimony-prev",
                            nextEl: ".testimony-next"
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 7,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <div className="item-md testimony_col">
                                <figure>
                                    <Image src="/assets/images/category/category1.jpg" width="344" height="439" alt="Product Image"></Image>
                                </figure>
                                <figcaption>
                                    <div className="content">
                                        <h6>Chung Eui-sun</h6>
                                        <p>Chairman Hundai</p>
                                    </div>
                                    <button className="play-btn" onClick={openVideo} data-video="https://youtube.com/embed/e3LWqqmP2Rw?si=tPBfRz7aCqX-pRUq"></button>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item-md testimony_col">
                                <figure>
                                    <Image src="/assets/images/category/category2.jpg" width="344" height="439" alt="Product Image"></Image>
                                </figure>
                                <figcaption>
                                    <div className="content">
                                        <h6>Chung Eui-sun</h6>
                                        <p>Chairman Hundai</p>
                                    </div>
                                    <button className="play-btn" onClick={openVideo} data-video="https://youtube.com/embed/e3LWqqmP2Rw?si=tPBfRz7aCqX-pRUq"></button>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item-md testimony_col">
                                <figure>
                                    <Image src="/assets/images/category/category3.jpg" width="344" height="439" alt="Product Image"></Image>
                                </figure>
                                <figcaption>
                                    <div className="content">
                                        <h6>Chung Eui-sun</h6>
                                        <p>Chairman Hundai</p>
                                    </div>
                                    <button className="play-btn" onClick={openVideo} data-video="https://youtube.com/embed/e3LWqqmP2Rw?si=tPBfRz7aCqX-pRUq"></button>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item-md testimony_col">
                                <figure>
                                    <Image src="/assets/images/category/category1.jpg" width="344" height="439" alt="Product Image"></Image>
                                </figure>
                                <figcaption>
                                    <div className="content">
                                        <h6>Chung Eui-sun</h6>
                                        <p>Chairman Hundai</p>
                                    </div>
                                    <button className="play-btn" onClick={openVideo} data-video="https://youtube.com/embed/e3LWqqmP2Rw?si=tPBfRz7aCqX-pRUq"></button>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
    )
}
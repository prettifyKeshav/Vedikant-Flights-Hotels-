"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import CategoryItem from "./CategoryItem";

export default function CategorySlider({ classname }){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className={`category_slider_wrapper ${classname}`}>
            <div className="container-fluid slider-section">
                <div className="upper-sec">
                <div className="heading">
                    <h2>Shop By Categories</h2>
                </div>
                <div className="slider-nav">
                    <button type="button" className="swiper-prev category-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                    <button type="button" className="swiper-next category-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                </div>
                </div>
            <Swiper 
                ref={swiperRef}
                className="category_slider"
                modules={[Navigation]}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".category-prev",
                    nextEl: ".category-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
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
                    <CategoryItem
                        imgSrc="/assets/images/category/category1.jpg"
                        videoSrc="/assets/images/category/category1_video.mp4"
                        heading="Corporate Uniforms"
                        subHeading="Where Uniform Meets Professionalism"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem
                        imgSrc="/assets/images/category/category2.jpg"
                        videoSrc="/assets/images/category/category2_video.mp4"
                        heading="Beauty & Wellness Uniforms"
                        subHeading="Where Uniform Meets Professionalism"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem 
                        imgSrc="/assets/images/category/category3.jpg"
                        videoSrc="/assets/images/category/category3_video.mp4"
                        heading="Hospitality Uniforms"
                        subHeading="Where Uniform Meets Professionalism"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem 
                        imgSrc="/assets/images/category/category1.jpg"
                        videoSrc="/assets/images/category/category1_video.mp4"
                        heading="Corporate Uniforms"
                        subHeading="Where Uniform Meets Professionalism"
                    />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}
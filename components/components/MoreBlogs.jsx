"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { useEffect, useRef } from "react";
import BlogsItem from "./BlogsItem";
export default function MoreBlogs() {
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100)
    }, [])
    return(
        <div className="more_blogs sec-pad">
                    <div className="container slider-section">
                        <div className="upper-sec">
                        <div className="heading">
                            <h2>More Blogs</h2>
                        </div>
                        <div className="slider-nav">
                            <button type="button" className="swiper-prev moreBlog-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                            <button type="button" className="swiper-next moreBlog-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                        </div>
                        </div>
                    <Swiper 
                        ref={swiperRef}
                        className="moreBlog_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".moreBlog-prev",
                            nextEl: ".moreBlog-next"
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs1.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs2.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs3.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs1.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs2.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs3.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
    )
}
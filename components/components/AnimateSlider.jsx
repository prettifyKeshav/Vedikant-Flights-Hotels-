"use client"
import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Pagination } from "swiper/modules"
import Link from "next/link"

export default function AnimateSlider(){
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperEl = swiperRef.current?.el
        const handleMouseEnter = () => {
            swiperRef.current?.autoplay?.stop()
        }
        const handleMouseLeave = () => {
            swiperRef.current?.autoplay?.start()
        }
         if (swiperEl) {
            swiperEl.addEventListener("mouseenter", handleMouseEnter);
            swiperEl.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (swiperEl) {
                swiperEl.removeEventListener("mouseenter", handleMouseEnter);
                swiperEl.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [])
    return(
        <div className="animate_slider_wrapper">
            <Swiper
                className="animate_slider"
                loop = {true}
                ref={swiperRef}
                modules={[Autoplay, Pagination]}
                pagination= {{
                    enabled: true, 
                    el: '.fraction',
                    type: 'fraction'
                }}
                slidesPerView={1.5}
                spaceBetween={-100}
                centeredSlides={true}
                speed={2000}
                autoplay = {{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide className="animate-slide">
                    <Link href="">
                        <figure>
                            <img src="/assets/images/home/animate1.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <Link href="">
                        <figure>
                            <img src="/assets/images/home/animate2.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <Link href="">
                        <figure>
                            <img src="/assets/images/home/animate3.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <Link href="">
                        <figure>
                            <img src="/assets/images/home/animate1.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <Link href="">
                        <figure>
                            <img src="/assets/images/home/animate2.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                   <Link href="">
                         <figure>
                            <img src="/assets/images/home/animate3.jpg" alt="Slider Image" />
                        </figure>
                        <figcaption>
                            <p>Hotel Aprons</p>
                        </figcaption>
                   </Link>
                </SwiperSlide>
            </Swiper>
            <div className="fraction"></div>
        </div>
    )
}
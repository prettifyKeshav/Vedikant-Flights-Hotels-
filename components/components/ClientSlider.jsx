"use client"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
export default function ClientSlider(){
    const swiperRef = useRef(null);
    return(
        <div className="client_slider_wrapper sec-pad">
            <div className="container">
                <div className="heading">
                    <h2>Brands We've Worked With</h2>
                </div>
                <Swiper
                    className="client_slider"
                    loop = {true}
                    ref={swiperRef}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={40}
                    speed={2000}
                    autoplay = {{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        540: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        991: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client1.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client2.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client3.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client4.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client5.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client6.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client3.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client4.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/assets/images/client/client5.jpg" alt="Client Logo" width="170" height="80"></Image>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
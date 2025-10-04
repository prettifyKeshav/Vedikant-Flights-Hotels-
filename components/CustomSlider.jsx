"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/components/serviceslider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useId } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CustomSlider({
    items = [],
    slidesPerView = 3,
    space = 20,
    breakpoints = {},
    autoplay = false,
    loop = false,
    showContent = true,
}) {
    const swiperRef = useRef(null);

    const id = useId();
    const prevBtnClass = `slider-prev-${id}`;
    const nextBtnClass = `slider-next-${id}`;

    return (
        <div className="custom-slider">
            {!autoplay && (
                <div className="swiper-nav slider-nav">
                    <button className={prevBtnClass}>
                        <Image
                            src="/assets/icon/swiper-nav-left.svg"
                            width={37}
                            height={37}
                            alt="prev"
                        />
                    </button>
                    <button className={nextBtnClass}>
                        <Image
                            src="/assets/icon/swiper-nav-right.svg"
                            width={37}
                            height={37}
                            alt="next"
                        />
                    </button>
                </div>
            )}

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={space}
                slidesPerView={slidesPerView}
                speed={2000}
                loop={loop}
                autoplay={
                    autoplay
                        ? { delay: 0, disableOnInteraction: false }
                        : false
                }
                navigation={
                    !autoplay
                        ? { prevEl: `.${prevBtnClass}`, nextEl: `.${nextBtnClass}` }
                        : false
                }
                breakpoints={breakpoints}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="item-md">
                            <figure>
                                <Image
                                    src={item.image}
                                    alt={item.alternate || item.title || `Slide ${i + 1}`}
                                    width={400}
                                    height={250}
                                />
                                {showContent && (
                                    <figcaption>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                        {item.buttonText && (
                                            <Link href={item.link || "/"}>
                                                <button>
                                                    <span>{item.buttonText}</span>
                                                </button>
                                            </Link>
                                        )}
                                    </figcaption>
                                )}
                            </figure>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const LeftCard = () => {
    // Accordion states
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    // Independent tab states   
    const [activeTab1, setActiveTab1] = useState("flightDetails");

    // Accordion refs for height animation
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    // Handle dynamic accordion height
    useEffect(() => {
        if (ref1.current) {
            ref1.current.style.maxHeight = open1
                ? ref1.current.scrollHeight + "px"
                : "0px";
        }
        if (ref2.current) {
            ref2.current.style.maxHeight = open2
                ? ref2.current.scrollHeight + "px"
                : "0px";
        }
    }, [open1, open2]);

    return (
        <div className="flight-card">
            {/* ================= CARD 1 ================= */}
            <div className="left-card-container">
                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Review Flight Details</h3>
                    </div>
                </div>


                <div className="col travel-insurance">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Travel Insurance</h3>
                        <div className="recommended-info">
                            Recommended
                        </div>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <p>Ensure Your Trip with</p>
                                <h2>ACKO Travel Insurance for Just ₹249 <span>per person</span></h2>
                            </div>
                            <figure>
                                <Image src="/assets/images/Flight-Detail/insurance_logo_acko_new.png" width={141} height={32} alt="acko img"></Image>
                            </figure>
                        </div>
                        <div className="bottom">
                            <div className="flex-box">
                                <p><span className="green">75% of our flyers secure their trip with Acko.</span> Its cover include:</p>
                                <Link href="">View Policy Coverage</Link>
                            </div>

                            <div className="travel-insurance-swiper-slide">
                                <Swiper
                                    slidesPerView={4}
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: ".travel-insurance-nav-next",
                                        prevEl: ".travel-insurance-nav-prev",
                                    }} >
                                    <SwiperSlide>
                                        <Link href="/">

                                            <figure>
                                                
                                            </figure>

                                            <div className="title">
                                                <p>Accidental Death</p>
                                            </div>
                                            <div className="price">
                                                <p>₹7,171</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                </Swiper>
                            </div>


                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Web Check-in</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Make My Booking Refundable</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Price Details</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Contact Details</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Enter Traveller Details</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>TOTAL TICKET AMOUNT</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftCard;

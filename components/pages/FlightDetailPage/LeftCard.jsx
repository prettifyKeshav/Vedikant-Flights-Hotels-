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
                                <Link href="" target="_blank">View Policy Coverage</Link>
                            </div>

                            <div className="travel-insurance-swiper-slide">
                                <div className="swiper-nav">
                                    <button className="travel-insurance-nav-prev">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path
                                                fill="#611BA7"
                                                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                                                strokeWidth="25.5"
                                                stroke="#611BA7"
                                            />
                                        </svg>
                                    </button>
                                    <button className="travel-insurance-nav-next">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path
                                                fill="#611BA7"
                                                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                                                strokeWidth="25.5"
                                                stroke="#611BA7"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: ".travel-insurance-nav-next",
                                        prevEl: ".travel-insurance-nav-prev",
                                    }} >
                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/1.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/2.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/3.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/4.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/1.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Link href="/">
                                            <figure>
                                                <Image src="assets/icon/flight-detail-icon/travel-insurance-swiper/2.svg" width={48} height={45} alt="icc"></Image>
                                            </figure>
                                            <p className="tit">Accidental Death</p>
                                            <p className="price">INR 5,00,000</p>
                                        </Link>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="flex-box-bottom">
                                <div className="form-group">
                                    <input type="checkbox" id="yesYes" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label for="yesYes">Yes, Secure my trip</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="noNo" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label for="noNo">No, I will book without trip secure.</label>
                                </div>
                            </div>

                            <div className="disclaimer">
                                <p>By selecting Travel Insurance, you accept the <Link href="/">T&Cs</Link> of the travel insurance policy</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col web-check-in">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Web Check-in</h3>
                        <div className="recommended-info">
                            Recommended
                        </div>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <h2>Web Check-in Assistance Just for ₹199 <span>per person</span></h2>
                                <p>Embark on a seamless travel journey with our exclusive Web Check-in Assistance Service !</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="grid-box">
                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/flight-detail-icon/web-check-in/1.svg" width={56} height={56} alt="icon"></Image>
                                    </figure>
                                    <h4>Fly Hassle Free</h4>
                                    <p>Skip the queues with our web check-in service. Enjoy a seamless travel experience!</p>
                                </div>
                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/flight-detail-icon/web-check-in/2.svg" width={56} height={56} alt="icon"></Image>
                                    </figure>
                                    <h4>Web Check-in Done on Time</h4>
                                    <p>For a small fee, we handle your web check-in smoothly and effortlessly. Sit back and relax!</p>
                                </div>
                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/flight-detail-icon/web-check-in/3.svg" width={56} height={56} alt="icon"></Image>
                                    </figure>
                                    <h4>Boarding Pass Delivered</h4>
                                    <p>Get your boarding pass easily via e-Mail or WhatsApp, sent 6-72 hrs before departure!</p>
                                </div>
                            </div>

                            <div className="flex-box">
                                <div className="flex-box-bottom">
                                    <div className="form-group">
                                        <input type="checkbox" id="yesYes" name="stopsfrom" value="Non Stop" />
                                        <span className="checkmark"></span>
                                        <label for="yesYes">OPT FOR WEB CHECK IN</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="checkbox" id="noNo" name="stopsfrom" value="Non Stop" />
                                        <span className="checkmark"></span>
                                        <label for="noNo">I'LL DO IT MYSELF</label>
                                    </div>
                                </div>
                                <Link href="/">Terms & Conditions</Link>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="col booking-refundable">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Make My Booking Refundable</h3>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <h2>Get full refund at just ₹630 <span>per person</span></h2>
                                <p>Assured refund ₹6298</p>
                            </div>
                            <figure>
                                <Image src="/assets/icon/flight-detail-icon/Booking-Refundable/1.png" height={50} width={109} alt="s"></Image>
                            </figure>
                        </div>
                        <div className="bottom">
                            <div className="grid-box">
                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Last Minute emergency</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Pre-existing Medical Conditions</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Personal Emergency</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Adverse Weather</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Accident, Sickness & Injury</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Court Summons</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Transport Failure</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>Theft of Documents</p>
                                </div>

                                <div className="grid-box-item">
                                    <figure>
                                        <Image src="/assets/icon/right-green-icon.svg" height={18} width={18} alt="asdf"></Image>
                                    </figure>
                                    <p>And Many More</p>
                                </div>
                            </div>

                            <div className="disclaimer">
                                <p>Upgrade your booking and receive a 100% refund if you cannot attend and can evidence one of the many reasons in our <Link href="">Terms of Use</Link>, which you accept when you select a Refundable Booking.</p>
                            </div>


                            <div className="flex-box-bottom">
                                <div className="form-group">
                                    <input type="checkbox" id="yesYes" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label for="yesYes">OPT FOR WEB CHECK IN</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="noNo" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label for="noNo">I'LL DO IT MYSELF</label>
                                </div>
                            </div>

                        </div>
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

        </div >
    );
};

export default LeftCard;

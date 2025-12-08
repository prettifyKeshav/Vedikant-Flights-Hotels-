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
    const [open4, setOpen4] = useState(false);

    // Accordion refs for height animation
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref4 = useRef(null);

    // Independent tab states
    const [activeTab1, setActiveTab1] = useState("flightDetails");;

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
        if (ref4.current) {
            ref4.current.style.maxHeight = open4
                ? ref4.current.scrollHeight + "px"
                : "0px";
        }
    }, [open1, open2, open4]);

    return (
        <div className="flight-card">
            {/* ================= CARD 1 ================= */}
            <div className="left-card-container">

                <div className="col review-flight-details">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Review Flight Details</h3>
                    </div>

                    {/* ===== Accordion 1 ===== */}

                    <div className="tab-section">
                        {/* Tabs Navigation */}
                        <ul className="tab-nav">
                            <li
                                className={activeTab1 === "flightDetails" ? "active" : ""}
                                onClick={() => setActiveTab1("flightDetails")}
                            >
                                <span>Flight Details</span>
                            </li>
                            <li
                                className={activeTab1 === "fareSummary" ? "active" : ""}
                                onClick={() => setActiveTab1("fareSummary")}
                            >
                                <span>Fare Summary</span>
                            </li>
                            <li
                                className={activeTab1 === "cancellation" ? "active" : ""}
                                onClick={() => setActiveTab1("cancellation")}
                            >
                                <span>Cancellation</span>
                            </li>
                        </ul>

                        {/* Tabs Content */}
                        <div className="tab-nav-content">
                            {/* --- Flight Details --- */}
                            <div
                                className={`tabs ${activeTab1 === "flightDetails" ? "active" : ""
                                    }`}
                            >
                                <div className="head">
                                    <h4>New Delhi to Bengaluru, 30 Sep</h4>
                                </div>
                                <div className="bottom">
                                    <div className="col">
                                        <figure>
                                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                                        </figure>
                                        <h5>IndiGo</h5>
                                        <p>6E 2562</p>
                                    </div>

                                    <div className="grid-box">
                                        <div className="col">
                                            <div className="content">
                                                <h5>07:50</h5>
                                                <p>Tue, 30 Sep 25</p>
                                            </div>

                                            <div className="bott">
                                                <h5>Terminal T1</h5>
                                                <p>IGI New Delhi, India</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="content">
                                                <h4><span>02</span> h <span>35</span> m</h4>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="content">
                                                <h5>07:50</h5>
                                                <p>Tue, 30 Sep 25</p>
                                            </div>

                                            <div className="bott">
                                                <h5>Terminal T1</h5>
                                                <p>IGI New Delhi, India</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="grid-box2">
                                                <div className="content">
                                                    <h5>Baggage</h5>
                                                    <p>Adult</p>
                                                </div>

                                                <div className="content">
                                                    <h5>Check in</h5>
                                                    <p>15 Kgs(1 piece only)</p>
                                                </div>

                                                <div className="content">
                                                    <h5>Cabin</h5>
                                                    <p>7 Kgs(1 piece only)</p>
                                                </div>
                                            </div>

                                            <p className="info">
                                                The baggage information is just for reference. Please Check with airline
                                                before check-in. For more information, visit Indigo Website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Fare Summary --- */}
                            <div
                                className={`tabs fare-summary ${activeTab1 === "fareSummary" ? "active" : ""
                                    }`}
                            >
                                <div className="head">
                                    <h4>Fare breakup</h4>
                                </div>
                                <div className="bottom">
                                    <div className="flex-box">
                                        <div className="col">
                                            <div className="title">TOTAL</div>
                                            <span>₹ 9,318</span>
                                        </div>
                                        <div className="col">
                                            <div className="title">Base Fare</div>
                                            <span>₹ 8,164</span>
                                        </div>
                                        <div className="col">
                                            <div className="title">Surcharges</div>
                                            <span>₹ 1,154</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Cancellation --- */}
                            <div
                                className={`tabs cancellation ${activeTab1 === "cancellation" ? "active" : ""}`}>
                                <div className="head">
                                    <h4>DEL-BLR</h4>
                                </div>
                                <div className="bottom">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Time frame{" "}
                                                    <span>(From Scheduled flight departure)</span>
                                                </th>
                                                <th>
                                                    Airline Fee + Goibibo Fee{" "}
                                                    <span>(Per passenger)</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0 hours to 2 hours*</td>
                                                <td>ADULT: Non Refundable</td>
                                            </tr>
                                            <tr>
                                                <td>2 hours to 365 days*</td>
                                                <td>ADULT: ₹9030 + ₹400</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`accordian ${open4 ? "open" : ""}`}>
                        <div className="accordian-title" onClick={() => setOpen4(!open4)}>
                            <div className="grid-box">
                                <div className="col">
                                    <p>Refundable</p>
                                    <span className="point"></span>
                                    <p>Free Meals</p>
                                </div>
                                <div className="col">
                                    <p>
                                        Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong>
                                    </p>
                                </div>
                                <div className="col">
                                    <p>VIEW FLIGHT DETAILS</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div className="accordian-description" ref={ref4}>

                        </div>
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
                                    <input type="checkbox" id="esSecuremytrip" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="esSecuremytrip">Yes, Secure my trip</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="noNo" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="noNo">No, I will book without trip secure.</label>
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
                                        <input type="checkbox" id="OPTFORWEBCHECKIN" name="stopsfrom" value="Non Stop" />
                                        <span className="checkmark"></span>
                                        <label htmlFor="OPTFORWEBCHECKIN">OPT FOR WEB CHECK IN</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="checkbox" id="ILLDOITMYSELF" name="stopsfrom" value="Non Stop" />
                                        <span className="checkmark"></span>
                                        <label htmlFor="ILLDOITMYSELF">I'LL DO IT MYSELF</label>
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
                                    <Link href=""><p>And Many More</p></Link>
                                </div>
                            </div>

                            <div className="disclaimer">
                                <p>Upgrade your booking and receive a 100% refund if you cannot attend and can evidence one of the many reasons in our <Link href="">Terms of Use</Link>, which you accept when you select a Refundable Booking.</p>
                            </div>


                            <div className="flex-box-bottom">
                                <div className="form-group">
                                    <input type="checkbox" id="RefundableBooking" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="RefundableBooking">Refundable Booking</label>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="NonRefundableBooking" name="stopsfrom" value="Non Stop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="NonRefundableBooking">Non Refundable Booking</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col have-coupon">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Have Coupon?</h3>
                    </div>


                    <div className="card">
                        <form action="">
                            <div className="search-wrap">
                                <input type="text" placeholder="Coupon code" />
                                <button className="btn custom-name">Apply</button>
                            </div>

                            <div className="bottom">
                                <div className="grid-box">
                                    <div className="grid-box-item">
                                        <input type="radio" name="copencode" />
                                        <span className="circle">
                                            <Image src="assets/icon/charm_tick.svg" width={9} height={9} alt="ico"></Image>
                                        </span>
                                        <p className="copen-title">₹100 INSTANT OFF</p>
                                        <p className="copen-code">100OFF</p>
                                        <p className="remove">Remove</p>

                                    </div>
                                    <div className="grid-box-item">
                                        <input type="radio" name="copencode" />
                                        <span className="circle">
                                            <Image src="assets/icon/charm_tick.svg" width={9} height={9} alt="ico"></Image>
                                        </span>
                                        <p className="copen-title">Coupon Applied Successfully.</p>
                                        <p className="copen-code">100OFF</p>
                                        <p className="remove">Remove</p>
                                    </div>
                                    <div className="grid-box-item">
                                        <input type="radio" name="copencode" />
                                        <span className="circle">
                                            <Image src="assets/icon/charm_tick.svg" width={9} height={9} alt="ico"></Image>
                                        </span>
                                        <p className="copen-title">DOMESTIC SALE UPTO ₹5000</p>
                                        <p className="copen-code">100OFF</p>
                                        <p className="remove">Remove</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col price-details">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Price Details</h3>
                    </div>

                    <div className="card">
                        <div className="top">
                            {/* ===== Accordion 1 ===== */}
                            <div className={`accordian ${open1 ? "open" : ""}`}>
                                <div className="accordian-title" onClick={() => setOpen1(!open1)}>
                                    <div className="flex-box space-between align-item-center">
                                        <p>
                                            <span className="circle"></span>
                                            Base Fare
                                        </p>
                                        <p>₹5484</p>
                                    </div>
                                </div>

                                <div className="accordian-description" ref={ref1}>
                                    <div className="tab-nav-content">
                                        <div className="flex-box space-between align-item-center">
                                            <p>1 x Adult Fare</p>
                                            <p> ₹3000</p>
                                        </div>
                                        <div className="flex-box space-between align-item-center">
                                            <p>1 x Child Fare</p>
                                            <p> ₹2484</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordian ${open2 ? "open" : ""}`}>
                                <div className="accordian-title" onClick={() => setOpen2(!open2)}>
                                    <div className="flex-box space-between align-item-center">
                                        <p>
                                            <span className="circle"></span>
                                            Taxes
                                        </p>
                                        <p>₹ 814</p>
                                    </div>
                                </div>

                                <div className="accordian-description" ref={ref2}>
                                    <div className="tab-nav-content">
                                        <div className="flex-box space-between align-item-center">
                                            <p>1 x Adult Fare</p>
                                            <p> ₹3000</p>
                                        </div>
                                        <div className="flex-box space-between align-item-center">
                                            <p>1 x Child Fare</p>
                                            <p> ₹2484</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="middle">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Total Fare</th>
                                        <th>₹6298</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Insurance (Not Included)</td>
                                        <td>₹0</td>
                                    </tr>

                                    <tr>
                                        <td>Web Check-in Fee</td>
                                        <td>₹0</td>
                                    </tr>

                                    <tr className="green">
                                        <td>Coupon Applied</td>
                                        <td>₹100 OFF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bottom">
                            <div className="highlight">
                                <p>You PAY</p>
                                <p>₹6298</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col contact-details">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Contact Details</h3>
                    </div>

                    <div className="card">
                        <form action="">
                            <div className="form">
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label htmlFor="">Name*</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label htmlFor="">Phone</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" />
                                    <label htmlFor="">Phone</label>
                                </div>
                            </div>
                        </form>
                        <div className="info flex-box align-item-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#611BA7" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                            </figure>
                            <p>Your booking details will be sent to this email address and mobile number.</p>
                        </div>
                    </div>
                </div>

                <div className="col enter-traveller-details">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <h3>Enter Traveller Details</h3>
                    </div>

                    <div className="card">
                        <form action="">
                            <div className="form">
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label htmlFor="">Name*</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label htmlFor="">First Name</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label htmlFor="">Last Name</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" />
                                    <label htmlFor="">Phone</label>
                                </div>
                            </div>
                        </form>
                        <div className="info flex-box align-item-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#611BA7" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                            </figure>
                            <p>Your booking details will be sent to this email address and mobile number.</p>
                        </div>
                    </div>
                </div>

                <div className="col total-ticket-amount">
                    <div className="title">
                        <figure>
                            <Image src="/assets/icon/flight-detail-icon/flight-icon.svg" width={20} height={20} alt="ico "></Image>
                        </figure>
                        <div className="card">
                            <div className="flex-box space-between align-item-center">
                                <h3>TOTAL TICKET AMOUNT</h3>
                                <p>You Pay</p>
                            </div>
                            <div className="flex-box space-between align-item-center">
                                <p>for all passengers</p>
                                <p className="total-amount">₹6298</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="final-check">
                    <div className="flex-box-bottom">
                        <div className="form-group">
                            <input type="checkbox" id="NonRefundableBosdfsdfsdfoking" name="stopsfrom" value="Non Stop" />
                            <span className="checkmark"></span>
                            <label htmlFor="NonRefundableBosdfsdfsdfoking">By selecting pay now, I agree to the Booking <span>Terms and Conditions</span> and <span>Privacy Policy</span></label>
                        </div>
                    </div>
                </div>

                <button className="submit">
                    proceed to payment
                </button>
            </div>
        </div>

    );
};

export default LeftCard;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFilterStore } from "@/store/filterStore";

import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import MySelect from "@/components/MySelect";

const FlightCard = () => {
    const [sortBy, setSortBy] = ""

    // Accordion states
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    // Independent tab states
    const [activeTab1, setActiveTab1] = useState("flightDetails");
    const [activeTab2, setActiveTab2] = useState("flightDetails2");

    // Accordion refs for height animation
    const ref1 = useRef(null);
    const ref2 = useRef(null);


    const { selectedFilters, priceRange, clearFilters, toggleFilter, setPriceRange } = useFilterStore();

    const sortby_option = [
        { value: "A to Z", label: "A to Z" },
        { value: "Z to A", label: "Z to A" },
        { value: "Low to High", label: "Low to High" },
        { value: "High to Low", label: "High to Low" }
    ]

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
            <figure>
                <Image
                    src="/assets/images/Flight-Listing/discount-image.PNG"
                    width={881}
                    height={85}
                    alt="discount image"
                />
            </figure>

            <div className="selected-filter">
                <div className="flex-box">
                    <h4>Flights from New Delhi to Bengaluru</h4>

                    <div className="sort-by">
                        <MySelect
                            options={sortby_option}
                            selectedValue={sortBy}
                            onValueChange={setSortBy}
                            placeholder={"Sort by"}
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    backgroundColor: "#fff",
                                    borderRadius: "5px",
                                    borderColor: state.isFocused ? "#802BD6" : "#802BD6",
                                    boxShadow: state.isFocused ? "0 0 0 1px none" : "none",
                                    padding: "0px 6px",
                                    marginRight: "10px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        borderColor: "#802BD6"
                                    },
                                    "&:focus": {
                                        borderColor: "transparent",
                                        outline: "none",
                                        boxShadow: "none"
                                    }
                                }),
                                menu: (base) => ({
                                    ...base,
                                    borderRadius: "8px",
                                    marginTop: "5px",
                                    padding: "6px 0",
                                    zIndex: 9999,
                                }),
                                menuList: (base) => ({
                                    ...base,
                                    padding: "0",
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    padding: "10px 12px",
                                    cursor: "pointer",
                                    backgroundColor: state.isSelected
                                        ? "#802BD6"
                                        : state.isFocused
                                            ? "#f2e9ff"
                                            : "white",
                                    color: state.isSelected ? "white" : "#333",
                                    "&:active": {
                                        backgroundColor: "#e0c8ff"
                                    }
                                }),
                                singleValue: (base) => ({
                                    ...base,
                                    color: "#000",
                                    fontSize: "14px",
                                }),
                                placeholder: (base) => ({
                                    ...base,
                                    fontSize: "14px",
                                    color: "#000",
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    color: "#802BD6",
                                    "&:hover": {
                                        color: "#802BD6"
                                    }
                                }),
                                indicatorSeparator: () => ({
                                    display: "none",
                                })
                            }}
                        />
                    </div>
                </div>

                {(selectedFilters.length > 0 || JSON.stringify(priceRange) !== JSON.stringify([0, 10000])) && (
                    <>
                        <ul className="applied-filter">
                            {selectedFilters?.map((item, index) => (
                                <li key={index}>
                                    {item}
                                    <span
                                        className="filterCross"
                                        onClick={() => toggleFilter(item, false)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src="/assets/icon/crose-icon.svg"
                                            width={8}
                                            height={8}
                                            alt="remove filter"
                                        />
                                    </span>
                                </li>
                            ))}

                            {/* price filter */}
                            {JSON.stringify(priceRange) !== JSON.stringify([0, 10000]) && (
                                <li>
                                    ₹{priceRange[0]} - ₹{priceRange[1]}
                                    <span
                                        className="filterCross"
                                        onClick={() => setPriceRange([0, 10000])}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src="/assets/icon/crose-icon.svg"
                                            width={8}
                                            height={8}
                                            alt="remove price filter"
                                        />
                                    </span>
                                </li>
                            )}
                        </ul>

                        <div className="applied-filter-clear-all" onClick={clearFilters} style={{ cursor: 'pointer' }}>Clear all filters</div>
                    </>
                )}

            </div>


            {/* ===================================== Swiper here ===================================== */}
            <div className="date-price-swiper">

                <div className="swiper-nav">
                    <button className="date-price-nav-prev">
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
                    <button className="date-price-nav-next">
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
                    slidesPerView={7}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".date-price-nav-next",
                        prevEl: ".date-price-nav-prev",
                    }}
                >
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/" className="active">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p className="green">₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <div className="date">
                                <p>Mon, Dec 28</p>
                            </div>
                            <div className="price">
                                <p>₹7,171</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* ===================================== Swiper here ===================================== */}

            {/* ================= CARD 1 ================= */}
            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image
                                src="/assets/images/Flight-Listing/flight-image.png"
                                width={44}
                                height={44}
                                alt="flight image"
                            />
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h4>
                                <span>02</span> h <span>35</span> m
                            </h4>
                            <p>Non stop</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="selct-btn-div">
                            <Link href="/" className="btn">
                                <span>SELECT</span>
                                <Image
                                    src="/assets/icon/white-right-arrow.svg"
                                    width={12}
                                    height={12}
                                    alt="ico"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ===== Accordion 1 ===== */}
                <div className={`accordian ${open1 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen1(!open1)}>
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

                    <div className="accordian-description" ref={ref1}>
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
                    </div>
                </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image
                                src="/assets/images/Flight-Listing/flight-image.png"
                                width={44}
                                height={44}
                                alt="flight image"
                            />
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2563</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>12:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h4>
                                <span>02</span> h <span>40</span> m
                            </h4>
                            <p>Non stop</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>15:30</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,450</h5>
                            <p>per adult</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="selct-btn-div">
                            <Link href="/" className="btn">
                                <span>SELECT</span>
                                <Image
                                    src="/assets/icon/white-right-arrow.svg"
                                    width={12}
                                    height={12}
                                    alt="ico"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ===== Accordion 2 ===== */}
                <div className={`accordian ${open2 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen2(!open2)}>
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

                    <div className="accordian-description" ref={ref2}>
                        <div className="tab-section">
                            {/* Tabs Navigation */}
                            <ul className="tab-nav">
                                <li
                                    className={activeTab2 === "flightDetails2" ? "active" : ""}
                                    onClick={() => setActiveTab2("flightDetails2")}
                                >
                                    <span>Flight Details</span>
                                </li>
                                <li
                                    className={activeTab2 === "fareSummary2" ? "active" : ""}
                                    onClick={() => setActiveTab2("fareSummary2")}
                                >
                                    <span>Fare Summary</span>
                                </li>
                                <li
                                    className={activeTab2 === "cancellation2" ? "active" : ""}
                                    onClick={() => setActiveTab2("cancellation2")}
                                >
                                    <span>Cancellation</span>
                                </li>
                            </ul>

                            {/* Tabs Content */}
                            <div className="tab-nav-content">
                                {/* --- Flight Details --- */}
                                <div
                                    className={`tabs ${activeTab2 === "flightDetails2" ? "active" : ""
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
                                    className={`tabs fare-summary ${activeTab2 === "fareSummary2" ? "active" : ""
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
                                    className={`tabs cancellation ${activeTab2 === "cancellation2" ? "active" : ""
                                        }`}
                                >
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
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FlightCard;

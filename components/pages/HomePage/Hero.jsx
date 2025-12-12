"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import FlightSearchDropdown from "@/components/FlightSearchDropdown";
import CustomFlightCalendar from "@/components/CustomFlightCalendar";
import TravellersAndClass from "@/components/TravellersAndClass";
import toast from "react-hot-toast";

const Hero = () => {
    const swiperRef = useRef(null);

    // const [calendarOpenFor, setCalendarOpenFor] = useState(null);
    const [showReturn, setShowReturn] = useState(false);
    const [tripType, setTripType] = useState("oneway");

    const [locations, setLocations] = useState({
        from: { name: "Delhi", code: "DEL, Delhi Airport India..." },
        to: { name: "Kochi", code: "COK, Cochin International..." },
    });

    const [travellerData, setTravellerData] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        travelClass: "Economy/Premium Economy",
    });

    const [calendarOpenFor, setCalendarOpenFor] = useState(null); // "departure" | "return" | null
    const [selectedDates, setSelectedDates] = useState({
        start: null,
        end: null,
    });

    // const handleReturn = (e) => {
    //     e.stopPropagation();
    //     setShowReturn(true);
    //     setTripType("roundtrip");
    // };

    const handleReturn = (e) => {
        e.stopPropagation();
        setShowReturn(true);
        setTripType("roundtrip");

        setSelectedDates((prev) => {
            // If user already selected a return date, keep it
            if (prev.end) return prev;
            // Otherwise auto-select next day after departure (or tomorrow)
            const startDate = prev.start || new Date();
            const nextDay = new Date(startDate);
            nextDay.setDate(startDate.getDate() + 1);
            return { ...prev, end: nextDay };
        });
    };

    const handleCloseReturn = (e) => {
        e.stopPropagation();
        setShowReturn(false);
        setTripType("oneway");
    };

    const handleFromSelect = (item) => {
        setLocations((prev) => ({
            ...prev,
            from: { name: item.name.split(",")[0], code: `${item.code}, ${item.subtitle}...` },
        }));
    };

    const handleToSelect = (item) => {
        setLocations((prev) => ({
            ...prev,
            to: { name: item.name.split(",")[0], code: `${item.code}, ${item.subtitle}...` },
        }));
    };

    const handleSwitch = (e) => {
        e.preventDefault();
        setLocations((prev) => ({
            from: prev.to,
            to: prev.from,
        }));
    };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     alert(`
    //         FROM Location = 
    //         TO Location = 
    //         Depature =
    //         Return =
    //         Travellers & Class =
    //         `)
    // }

    const handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const dep = selectedDates.start
            ? selectedDates.start.toLocaleDateString("en-GB")
            : "Not selected";
        const ret = selectedDates.end
            ? selectedDates.end.toLocaleDateString("en-GB")
            : "Not selected";
        
        alert(`
            FLIGHT SEARCH DETAILS =======>>>>>>>>
            
            From := ${locations.from.name} (${locations.from.code})
            To := ${locations.to.name} (${locations.to.code})

            Departure := ${dep}
            Return := ${tripType === "roundtrip" ? ret : "One Way"}

            Travellers := 
            Adults := ${travellerData.adults}
            Children := ${travellerData.children}
            Infants := ${travellerData.infants}

            Class := ${travellerData.travelClass}
            `);
    };


    const slidesData = [
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
        { image: "assets/images/home/banner/swiper-1.jpg" },
    ];

    return (
        <div className="banner home-banner">
            <div className="bg">
                <div className="banner-wrapper">
                    <div className="container">
                        <div className="banner-heading">
                            {/* <ul>
                                <li>
                                    <Link href="/" className="active">
                                        <figure>
                                            <Image src="assets/images/home/icon/checked.svg" width={11} height={8} alt="check icon"></Image>
                                        </figure>
                                        <span>One Way</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="">
                                        <figure>
                                            <Image src="assets/images/home/icon/checked.svg" width={11} height={8} alt="check icon"></Image>
                                        </figure>
                                        <span>Round Trip</span>
                                    </Link>
                                </li>
                            </ul> */}

                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className={tripType === "oneway" ? "active" : ""}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setTripType("oneway");
                                            setShowReturn(false); // hides return section for one way
                                        }}
                                    >
                                        <figure>
                                            <Image
                                                src="assets/images/home/icon/checked.svg"
                                                width={11}
                                                height={8}
                                                alt="check icon"
                                            />
                                        </figure>
                                        <span>One Way</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className={tripType === "roundtrip" ? "active" : ""}
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     setTripType("roundtrip");
                                        //     setShowReturn(true); // shows return section for round trip
                                        //     // e.stopPropagation();
                                        //     // handleReturn(e);
                                        //     // setCalendarOpenFor("return");
                                        // }}

                                        onClick={(e) => {
                                            e.preventDefault();
                                            setTripType("roundtrip");
                                            setShowReturn(true);

                                            setSelectedDates((prev) => {
                                                const startDate = prev.start || new Date();
                                                const nextDay = new Date(startDate);
                                                nextDay.setDate(startDate.getDate() + 1);
                                                return { ...prev, end: nextDay };
                                            });
                                        }}
                                    >
                                        <figure>
                                            <Image
                                                src="assets/images/home/icon/checked.svg"
                                                width={11}
                                                height={8}
                                                alt="check icon"
                                            />
                                        </figure>
                                        <span>Round Trip</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-box">
                            <div className="col">
                                <form action="">
                                    <div className="flight-search-container">
                                        <div className="location-row">
                                            <FlightSearchDropdown
                                                label="From"
                                                name={locations.from.name}
                                                code={locations.from.code}
                                                onSelect={handleFromSelect}
                                            />
                                            <div className="switch-location" onClick={handleSwitch} style={{ cursor: "pointer" }}>
                                                <figure>
                                                    <Image src="assets/images/home/icon/switch-icon.svg" width={25} height={25} alt="switch icon"></Image>
                                                </figure>
                                            </div>
                                            <FlightSearchDropdown
                                                label="To"
                                                name={locations.to.name}
                                                code={locations.to.code}
                                                onSelect={handleToSelect}
                                            />
                                        </div>

                                        <div className="details-row">
                                            {/* <Link href="/" className="detail-section">
                                                <p className="detail-label">Departure</p>
                                                <p className="detail-value"><b>16</b> <span>Sep'25</span></p>
                                                <p className="detail-text">Tuesday</p>
                                            </Link> */}
                                            <div className="detail-section">
                                                <CustomFlightCalendar
                                                    isRoundTrip={tripType === "roundtrip"}
                                                    open={!!calendarOpenFor}
                                                    onOpen={() => { }}
                                                    onClose={() => setCalendarOpenFor(null)}
                                                    initialDate={
                                                        calendarOpenFor === "return"
                                                            ? selectedDates.end
                                                            : selectedDates.start
                                                    }
                                                    onSelect={({ start, end }) => {
                                                        setSelectedDates({ start, end });
                                                        if (start && !end && tripType === "oneway") setShowReturn(false);
                                                        if (start && end && tripType === "roundtrip") setCalendarOpenFor(null);
                                                    }}
                                                />
                                            </div>

                                            {/* <Link href="/" className="detail-section" onClick={handleReturn}>
                                                <div className="calendar-label">
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                                </div>
                                                <div className="calendar-return hide">
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-value"><b>16</b> <span>Sep'25</span></p>
                                                    <p className="detail-text">Tuesday</p>
                                                    <button className="cross-icon"><span></span></button>
                                                </div>
                                            </Link> */}

                                            {/* <div className="detail-section">
                                                <div
                                                    className={`calendar-label ${showReturn ? "hide" : ""}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleReturn(e); }}>
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                                </div>

                                                <div className={`calendar-return ${!showReturn ? "hide" : ""}`}>
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-value"><b>16</b> <span>Sep'25</span></p>
                                                    <p className="detail-text">Tuesday</p>
                                                    <button className="cross-icon" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCloseReturn(e); }} > <span></span></button>
                                                </div>
                                            </div> */}

                                            <div className="detail-section">
                                                <div
                                                    className={`calendar-label ${showReturn ? "hide" : ""}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleReturn(e);
                                                        setCalendarOpenFor("return");
                                                    }}
                                                >
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-text">Tap to add a return date for bigger discounts</p>
                                                </div>

                                                <div className={`calendar-return ${!showReturn ? "hide" : ""}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleReturn(e);
                                                        setCalendarOpenFor("return");
                                                    }}>
                                                    <p className="detail-label">Return</p>
                                                    <p className="detail-value">
                                                        {selectedDates.end ? (
                                                            <>
                                                                <b>{selectedDates.end.getDate()}</b>{" "}
                                                                <span>
                                                                    {selectedDates.end.toLocaleDateString("en-US", { month: "short" })}'25
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <b>—</b> <span>—</span>
                                                            </>
                                                        )}
                                                    </p>

                                                    {/* <p className="detail-text">
                                                        {selectedDates.end
                                                            ? selectedDates.end.toLocaleDateString("en-US", { weekday: "long" })
                                                            : "Tuesday"}
                                                    </p> */}
                                                    <p className="detail-text">
                                                        {(() => {
                                                            if (selectedDates.end) {
                                                                return selectedDates.end.toLocaleDateString("en-US", { weekday: "long" });
                                                            } else if (selectedDates.start) {
                                                                const nextDay = new Date(selectedDates.start);
                                                                nextDay.setDate(selectedDates.start.getDate() + 1);
                                                                return nextDay.toLocaleDateString("en-US", { weekday: "long" });
                                                            } else {
                                                                return new Date(Date.now() + 86400000).toLocaleDateString("en-US", { weekday: "long" }); // Tommorw date will be select automatic here okay babu
                                                            }
                                                        })()}
                                                    </p>
                                                    <button
                                                        className="cross-icon"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleCloseReturn(e);
                                                            setCalendarOpenFor(null);
                                                            setSelectedDates((prev) => ({ ...prev, end: null }));
                                                        }}
                                                    >
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>

                                            <Link href="/" className="detail-section">
                                                {/* <p className="detail-label">Travellers & Class</p>
                                                <p className="detail-value"><b>1</b> <span>Traveller</span></p>
                                                <p className="detail-text">Economy/Premium Economy</p> */}
                                                {/* < TravellersAndClass /> */}
                                                <TravellersAndClass onApply={(data) => setTravellerData(data)} />
                                            </Link>
                                        </div>

                                        <button className="search-button" onClick={handleSearch}>SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            {/*  */}
                            <div className="col">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                    className="mySwiper"
                                    autoplay={{ delay: 3335000 }}
                                    loop={true}
                                >
                                    {slidesData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slide-box">
                                                <img
                                                    src={item.image}
                                                    alt={`Slide ${index + 1}`}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ReviewFlightDetails = () => {
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
            <div className="card-container">

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

        </div>
    );
};

export default ReviewFlightDetails;

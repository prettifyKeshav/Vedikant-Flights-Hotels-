'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const RightCard = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);


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
        <>
            <div className="filters-wrapper">
                <div className="head">
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

            <figure className="sale-image">
                <Image src="/assets/images/Flight-Detail/sale-img.jpg" height={269} width={281} alt="sale image"></Image>
            </figure>
        </>
    );
};

export default RightCard;

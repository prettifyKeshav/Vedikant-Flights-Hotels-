"use client";
import React, { useState, useEffect, useRef } from "react";

const TravellersAndClass = ({ onApply }) => {
    const [open, setOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [travelClass, setTravelClass] = useState("Economy/Premium Economy");

    const dropdownRef = useRef(null);

    // close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const totalTravellers = adults + children + infants;

    return (
        <div className="travellers-wrapper" ref={dropdownRef}>
            <div
                className="detail-section"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                }}
            >
                <p className="detail-label">Travellers & Class</p>
                <p className="detail-value">
                    <b>{totalTravellers}</b> <span>Traveller{totalTravellers > 1 ? "s" : ""}</span>
                </p>
                <p className="detail-text">{travelClass}</p>
            </div>

            {open && (
                <div className="travellers-dropdown">
                    <div className="travellers-group">
                        <p className="group-label">
                            ADULTS (12y+) <span>on the day of travel</span>
                        </p>
                        <div className="number-row">
                            {[...Array(10)].map((_, i) => {
                                const num = i + 1;
                                return (
                                    <button
                                        key={num}
                                        className={`num-btn ${adults === num ? "active" : ""}`}
                                        onClick={() => setAdults(num)}
                                    >
                                        {num <= 9 ? num : ">9"}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="travellers-group">
                        <p className="group-label">
                            CHILDREN (2y–12y) <span>on the day of travel</span>
                        </p>
                        <div className="number-row">
                            {[...Array(7)].map((_, i) => {
                                const num = i;
                                return (
                                    <button
                                        key={num}
                                        className={`num-btn ${children === num ? "active" : ""}`}
                                        onClick={() => setChildren(num)}
                                    >
                                        {num < 6 ? num : ">6"}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="travellers-group">
                        <p className="group-label">
                            INFANTS (below 2y) <span>on the day of travel</span>
                        </p>
                        <div className="number-row">
                            {[...Array(7)].map((_, i) => {
                                const num = i;
                                return (
                                    <button
                                        key={num}
                                        className={`num-btn ${infants === num ? "active" : ""}`}
                                        onClick={() => setInfants(num)}
                                    >
                                        {num < 6 ? num : ">6"}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="class-section">
                        <p className="group-label">CHOOSE TRAVEL CLASS</p>
                        <div className="class-buttons">
                            {["Economy/Premium Economy", "Premium Economy", "Business", "First Class"].map((cls) => (
                                <button
                                    key={cls}
                                    className={`class-btn ${travelClass === cls ? "active" : ""}`}
                                    onClick={() => setTravelClass(cls)}
                                >
                                    {cls}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="apply-btn"
                        onClick={() => {
                            setOpen(false);
                            if (onApply) onApply({ adults, children, infants, travelClass });
                        }}
                    >
                        APPLY
                    </button>
                </div>
            )}
        </div>
    );
};

export default TravellersAndClass;

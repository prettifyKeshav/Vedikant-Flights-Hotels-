"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Simulate prices (fetch from API in real app)
const getPrices = () => ({
    "2025-10-15": 6004,
    "2025-10-16": 6049,
    // ... add more from your data
});

const DepartureCalendar = ({ isRoundTrip = false, onDateSelect }) => {
    const [startDate, setStartDate] = useState(new Date("2025-09-16")); // Initial: 16 Sep 25
    const [endDate, setEndDate] = useState(null);
    const prices = getPrices();

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateSelect?.({ start, end });
    };

    const CustomDay = ({ date, className }) => {
        const price = prices[date.toISOString().split("T")[0]];
        return (
            <div className={className}>
                <div className="day-content">
                    <span className="day-number">{date.getDate()}</span>
                    {price && <span className="day-price">₹{price}</span>}
                </div>
            </div>
        );
    };

    return (
        <div className="departure-wrapper">
            <div className="detail-section" style={{ cursor: "pointer" }}>
                <p className="detail-label">Departure</p>
                <p className="detail-value">
                    <b>{startDate.getDate()}</b> <span>{startDate.toLocaleDateString("en-US", { month: "short", year: "2-digit" })}</span>
                </p>
                <p className="detail-text">{startDate.toLocaleDateString("en-US", { weekday: "long" })}</p>
            </div>
            <DatePicker
                selectsRange={isRoundTrip} // true for round-trip range
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                monthsShown={2} // Key: Shows two months side-by-side
                inline // Full calendar view (no input trigger)
                minDate={new Date("2025-10-14")} // Today onward
                dateFormat="d MMM 'yy"
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                    <div className="dual-header">
                        <button className="nav-left" onClick={decreaseMonth}>←</button>
                        <span className="month-title">{date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                        <button className="nav-right" onClick={increaseMonth}>→</button>
                    </div>
                )}
                renderDayContents={(date, className) => <CustomDay date={date} className={className} />}
            />
            {isRoundTrip && endDate && (
                <div className="round-trip-note">Book round trip for great savings</div>
            )}
        </div>
    );
};

export default DepartureCalendar;
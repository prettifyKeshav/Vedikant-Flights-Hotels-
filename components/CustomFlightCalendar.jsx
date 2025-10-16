"use client";
import React, { useState, useEffect } from "react";

const CustomFlightCalendar = ({ isRoundTrip = false, open = false, onOpen, onClose, initialDate, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 1)); // Oct 2025
    const [selectedEnd, setSelectedEnd] = useState(null);
    // const [selectedStart, setSelectedStart] = useState(null);
    // const [selectedStart, setSelectedStart] = useState(new Date(2025, 9, 15));
    const [selectedStart, setSelectedStart] = useState(new Date());

    const prices = {
        "2025-10-15": 6004,
        "2025-10-16": 6049,
        "2025-10-17": 6377,
        "2025-10-18": 6536,
        "2025-10-19": 6006,
        "2025-10-20": 6357,
        "2025-10-21": 7243,
        "2025-10-22": 7243,
        "2025-10-23": 7243,
        "2025-10-24": 7847,
        "2025-10-25": 8155,
        "2025-10-26": 5998,
        "2025-10-27": 5998,
        "2025-10-28": 5998,
        "2025-10-29": 5998,
        "2025-10-30": 5998,
        "2025-10-31": 5998,
        "2025-11-02": 6849,
        "2025-11-03": 6849,
        "2025-11-04": 6999,
        "2025-11-05": 6498,
        "2025-11-06": 6248,
        "2025-11-07": 5998,
        "2025-11-08": 7898,
        "2025-11-09": 5998,
        "2025-11-10": 1797,
        "2025-11-11": 11997,
        "2025-11-12": 12947,
        // Add more as needed
    };

    // Set initial selected date on mount
    // useEffect(() => {
    //     if (initialDate && !selectedStart) {
    //         setSelectedStart(initialDate);
    //         onSelect({ start: initialDate });
    //     }
    // }, [initialDate, onSelect]);

    useEffect(() => {
        if (initialDate && !(selectedStart instanceof Date)) {
            setSelectedStart(initialDate);
            onSelect({ start: initialDate });
        }
    }, [initialDate, onSelect, selectedStart]); // Added selectedStart to deps for reactivity



    const generateMonthDays = (month) => {
        const year = month.getFullYear();
        const mon = month.getMonth();
        const firstDay = new Date(year, mon, 1).getDay(); // 0=Sun
        const daysInMonth = new Date(year, mon + 1, 0).getDate();
        const days = [];
        // Padding for first row
        for (let i = 0; i < firstDay; i++) days.push(null);
        // Add days
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, mon, d);
            const dateKey = date.toISOString().split('T')[0];
            days.push({ date, price: prices[dateKey] || null });
        }
        // Pad to full 42 cells (6 rows x 7)
        while (days.length < 42) days.push(null);
        return days;
    };

    const monthDays = generateMonthDays(currentMonth);
    const nextMonth = new Date(currentMonth); nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextMonthDays = generateMonthDays(nextMonth);

    // const handleDayClick = (day) => {
    //     if (!day || !(day.date instanceof Date)) return;
    //     const date = day.date;
    //     if (!selectedStart) {
    //         setSelectedStart(date);
    //         onSelect({ start: date });
    //     } else if (isRoundTrip && !selectedEnd) {
    //         if (date > selectedStart) {
    //             setSelectedEnd(date);
    //             onSelect({ start: selectedStart, end: date });
    //         } else {
    //             setSelectedStart(date);
    //         }
    //     } else {
    //         setSelectedStart(date);
    //         setSelectedEnd(null);
    //         onSelect({ start: date });
    //     }
    // };

    const handleDayClick = (day) => {
        if (!day || !(day.date instanceof Date)) return;
        const date = day.date;

        if (!selectedStart) {
            setSelectedStart(date);
            onSelect({ start: date });
            closeCalendar();
        } else if (isRoundTrip && !selectedEnd) {
            if (date > selectedStart) {
                setSelectedEnd(date);
                onSelect({ start: selectedStart, end: date });
                closeCalendar();
            } else {
                setSelectedStart(date);
            }
        } else {
            setSelectedStart(date);
            setSelectedEnd(null);
            onSelect({ start: date });
            closeCalendar();
        }
    };


    const isSelected = (date) => date && selectedStart && selectedStart.toDateString() === date.toDateString();
    const isInRange = (date) => date && selectedStart && selectedEnd && date >= selectedStart && date <= selectedEnd;

    const formatSelected = (date) => {
        if (!date || !(date instanceof Date)) return '';
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const yearShort = date.getFullYear().toString().slice(-2);
        return `${day} ${month}'${yearShort}`;
    };

    // const toggleCalendar = () => setIsOpen((prev) => !prev);
    // const closeCalendar = () => setIsOpen(false);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    // const toggleCalendar = () => {
    //     if (isOpen) {
    //         setIsOpen(false);
    //         onClose?.();
    //     } else {
    //         setIsOpen(true);
    //         onOpen?.();
    //     }
    // };

    const openCalendar = () => {
        if (!isOpen) {
            setIsOpen(true);
            onOpen?.();
        }
    };

    const closeCalendar = () => {
        setIsOpen(false);
        onClose?.();
    };

    const renderMonth = (month, days) => (
        <div className="month">
            <h3>{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
            <div className="week-days">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                    <div key={d} className="week-day">{d}</div>
                ))}
            </div>
            <div className="days-grid">
                {days.map((day, i) => (
                    <div
                        key={i}
                        className={`day-cell ${!day ? 'empty' : ''} ${isSelected(day?.date) ? 'selected' : ''} ${isInRange(day?.date) ? 'in-range' : ''}`}
                        onClick={() => handleDayClick(day)}
                    >
                        {day && (
                            <div className="day-content">
                                <span className="day-number">{day.date.getDate()}</span>
                                {day.price && <span className="day-price">₹{day.price}</span>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className="flight-calendar">
                <div className="" onClick={openCalendar}>
                    <p className="detail-label">Depature</p>
                    <p className="detail-value">
                        <b>{formatSelected(selectedStart).split(' ')[0] || '15'}</b>{' '}
                        <span>{formatSelected(selectedStart).split(' ').slice(1).join(' ') || "Oct'25"}</span>
                    </p>
                    <p className="detail-text">{selectedStart ? selectedStart.toLocaleDateString('en-US', { weekday: 'long' }) : 'Tuesday'}</p>
                </div>
                {isOpen && (
                    <div className="calendar-popup">
                        <div className="calendar-header">
                            <div className="selected-dates">
                                {formatSelected(selectedStart) || 'Select Dates'} {isRoundTrip && selectedEnd && `– ${formatSelected(selectedEnd)}`} {isRoundTrip && '– Book round trip for great savings'}
                                {/* <span>-</span>
                                <p>Book round trip for great savings</p> */}
                            </div>
                        </div>
                        <div className="months-container">
                            <div className="navigation-bar">
                                <button className="nav-arrow left"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setCurrentMonth((prev) => { const m = new Date(prev); m.setMonth(m.getMonth() - 1); return m; })
                                    }}>←
                                </button>
                                <button className="nav-arrow right"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setCurrentMonth((prev) => { const m = new Date(prev); m.setMonth(m.getMonth() + 1); return m; })
                                    }}>→
                                </button>
                            </div>
                            {renderMonth(currentMonth, monthDays)}
                            {renderMonth(nextMonth, nextMonthDays)}
                        </div>
                        <div className="calendar-footer">Showing our lowest prices in ₹</div>
                        <div className="dropdown-overlay" onClick={closeCalendar} style={{ zIndex: 999 }} />
                    </div>
                )}

                {isOpen && (
                    <div className="Calendardropdown-overlay" onClick={() => setIsOpen(false)} />
                )}
            </div >
        </>
    );
};

export default CustomFlightCalendar;
"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const CustomFlightCalendar = ({ isRoundTrip = false, open = false, onOpen, onClose, initialDate, onSelect, mode = "departure" }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [currentMonth, setCurrentMonth] = useState(new Date());

    // it will start from the current month keshav babu
    const [currentMonth, setCurrentMonth] = useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

    const today = new Date();
    const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    
    const [selectedEnd, setSelectedEnd] = useState(null);
    const [selectedStart, setSelectedStart] = useState(new Date());

    const prices = {
        "2025-12-01": 6899,
        "2025-12-02": 7025,
        "2025-12-03": 7150,
        "2025-12-04": 6999,
        "2025-12-05": 7350,
        "2025-12-06": 7780,
        "2025-12-07": 7100,
        "2025-12-08": 6900,
        "2025-12-09": 6800,
        "2025-12-10": 6950,
        "2025-12-11": 7200,
        "2025-12-12": 7600,
        "2025-12-13": 8200,
        "2025-12-14": 7990,
        "2025-12-15": 7500,
        "2025-12-16": 7850,
        "2025-12-17": 8200,
        "2025-12-18": 8800,

        "2026-01-20": 6850,
        "2026-01-21": 6800,
        "2026-01-22": 6750,
        "2026-01-23": 6700,
        "2026-01-24": 6650,
        "2026-01-25": 6600,
        "2026-01-26": 7200,
        "2026-01-27": 6800,
        "2026-01-28": 6700,
        "2026-01-29": 6650,
        "2026-01-30": 6590,
        "2026-01-31": 6550
    };

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
    //         closeCalendar();
    //     } else if (isRoundTrip && !selectedEnd) {
    //         if (date > selectedStart) {
    //             setSelectedEnd(date);
    //             onSelect({ start: selectedStart, end: date });
    //             closeCalendar();
    //         } else {
    //             setSelectedStart(date);
    //         }
    //     } else {
    //         setSelectedStart(date);
    //         setSelectedEnd(null);
    //         onSelect({ start: date });
    //         closeCalendar();
    //     }
    // };

    const handleDayClick = (day) => {
        if (!day || !(day.date instanceof Date)) return;
        const date = day.date;
        const today = new Date();  // NEW: For past-date guard
        today.setHours(0, 0, 0, 0);  // NEW: Normalize to start of today (ignores time)

        if (date < today) {  // NEW: Block past dates
            toast.error("Can't select past dates.")
            return;
        }

        // if (mode === "return") {  // NEW: Dedicated block for return mode (from Issue 2)
        //     // NEW: Enforce > start, update only end
        //     if (!selectedStart || date <= selectedStart) {
        //         alert("Return must be after departure date.");
        //         return;
        //     }
        //     setSelectedEnd(date);
        //     setTimeout(() => {  // NEW: From loop fix—ensures fresh state for onSelect
        //         onSelect({ start: selectedStart, end: date });
        //     }, 0);
        //     closeCalendar();
        //     return;
        // }

        // CHANGED: Original logic, now with past guard (already handled above) and better invalid handling
        if (!selectedStart) {
            setSelectedStart(date);
            setTimeout(() => {  // NEW: Loop fix
                onSelect({ start: date });
            }, 0);
            closeCalendar();
            return;  // NEW: Explicit return for clarity
        }

        if (isRoundTrip && !selectedEnd) {
            if (date > selectedStart) {
                setSelectedEnd(date);
                setTimeout(() => {  // NEW: Loop fix
                    onSelect({ start: selectedStart, end: date });
                }, 0);
                closeCalendar();
            } else {
                // CHANGED: Don't reset start—alert and ignore
                alert("Return must be after departure. Select departure first or edit it separately.");
                // (No setSelectedStart(date); — prevents accidents)
            }
            return;  // NEW: Stop here
        }

        // CHANGED: Reset branch—clear end, use timeout
        setSelectedStart(date);
        setSelectedEnd(null);
        setTimeout(() => {
            onSelect({ start: date });
        }, 0);
        closeCalendar();
    };

    const isPastDate = (date) => { if (!date) return false; const today = new Date(); today.setHours(0, 0, 0, 0); return date < today; };
    const isSelected = (date) => date && selectedStart && selectedStart.toDateString() === date.toDateString();
    // const isInRange = (date) => date && selectedStart && selectedEnd && date >= selectedStart && date <= selectedEnd;

    const isInRange = (date, index, days) => {
        if (!date || !selectedStart || !selectedEnd || !(date instanceof Date) || !(selectedStart instanceof Date) || !(selectedEnd instanceof Date)) return false;
        const isInRangeDate = date >= selectedStart && date <= selectedEnd;
        if (isInRangeDate && (date.toDateString() === selectedStart.toDateString() || date.toDateString() === selectedEnd.toDateString())) {
            return 'in-range selected';
        }
        return isInRangeDate ? 'in-range' : '';
    };

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
                        // className={`day-cell ${!day ? 'empty' : ''} ${isSelected(day?.date) ? 'selected' : ''} ${isInRange(day?.date, i, days) || ''}`}
                        className={`day-cell 
                            ${!day ? 'empty' : ''} 
                            ${isPastDate(day?.date) ? 'disable' : ''} 
                            ${isSelected(day?.date) ? 'selected' : ''}
                            ${isInRange(day?.date, i, days) || ''}`
                        }

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
                                <button
                                    // className="nav-arrow left"
                                    className={`nav-arrow left ${currentMonth <= minMonth ? "disabled" : ""}`}
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
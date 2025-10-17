"use client";

import React, { useState, useEffect } from "react";

const FlightSearchDropdown = ({ label, name: initialName, code: initialCode, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedName, setSelectedName] = useState(initialName || "");
    const [selectedCode, setSelectedCode] = useState(initialCode || "");

    useEffect(() => {
        setSelectedName(initialName);
        setSelectedCode(initialCode);
    }, [initialName, initialCode]);

    const recentSearches = [
        {
            name: "Mumbai, India",
            code: "BOM",
            subtitle: "Chhatrapati Shivaji International Airport",
        },
        {
            name: "Bangkok, Thailand",
            code: "BKK",
            subtitle: "Bangkok",
        },
    ];

    const popularCities = [
        {
            name: "Mumbai, India",
            code: "BOM",
            subtitle: "Chhatrapati Shivaji International Airport",
        },
        {
            name: "New Delhi, India",
            code: "DEL",
            subtitle: "Indira Gandhi International Airport",
        },
        {
            name: "Bangkok, Thailand",
            code: "BKK",
            subtitle: "Suvarnabhumi Airport",
        },
        {
            name: "Dubai, UAE",
            code: "DXB",
            subtitle: "Dubai International Airport",
        },
        {
            name: "Singapore, Singapore",
            code: "SIN",
            subtitle: "Changi Airport",
        },
        {
            name: "London, United Kingdom",
            code: "LHR",
            subtitle: "Heathrow Airport",
        },
        {
            name: "Paris, France",
            code: "CDG",
            subtitle: "Charles de Gaulle Airport",
        },
        {
            name: "New York, USA",
            code: "JFK",
            subtitle: "John F. Kennedy International Airport",
        },
        {
            name: "Tokyo, Japan",
            code: "HND",
            subtitle: "Haneda Airport",
        },
        {
            name: "Sydney, Australia",
            code: "SYD",
            subtitle: "Kingsford Smith Airport",
        },
        {
            name: "Kuala Lumpur, Malaysia",
            code: "KUL",
            subtitle: "Kuala Lumpur International Airport",
        },
        {
            name: "Doha, Qatar",
            code: "DOH",
            subtitle: "Hamad International Airport",
        },
        {
            name: "Istanbul, Turkey",
            code: "IST",
            subtitle: "Istanbul Airport",
        },
        {
            name: "Toronto, Canada",
            code: "YYZ",
            subtitle: "Toronto Pearson International Airport",
        },
        {
            name: "Hong Kong, China",
            code: "HKG",
            subtitle: "Hong Kong International Airport",
        },
        {
            name: "Chennai, India",
            code: "MAA",
            subtitle: "Chennai International Airport",
        },
        {
            name: "Bengaluru, India",
            code: "BLR",
            subtitle: "Kempegowda International Airport",
        },
        {
            name: "Hyderabad, India",
            code: "HYD",
            subtitle: "Rajiv Gandhi International Airport",
        },
        {
            name: "Goa, India",
            code: "GOX",
            subtitle: "Manohar International Airport",
        },
        {
            name: "Pune, India",
            code: "PNQ",
            subtitle: "Pune International Airport",
        },
    ];

    const filteredRecent = recentSearches.filter(
        (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.code.toLowerCase().includes(query.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(query.toLowerCase())
    );

    const filteredPopular = popularCities.filter(
        (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.code.toLowerCase().includes(query.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (item) => {
        setSelectedName(item.name.split(",")[0]);
        setSelectedCode(`${item.code}, ${item.subtitle}...`);
        onSelect?.(item);
        setIsOpen(false);
        setQuery("");
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setQuery("");
    };
    
    return (
        <>
            <div className="location-section" onClick={handleToggle}>
                <p className="location-label">{label}</p>
                <p className="location-name">{selectedName}</p>
                <p className="location-code">{selectedCode}</p>

                <div className="flight-search-dropdown">
                    {isOpen && (
                        <div className="dropdown-menu">
                            <input
                                type="text"
                                className="search-input"
                                placeholder={`${label} `}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                            <div className="suggestions-container">
                                {filteredRecent.length > 0 && (
                                    <div className="section">
                                        <h3 className="section-title">RECENT SEARCHES</h3>
                                        <ul className="suggestions-list">
                                            {filteredRecent.map((item, index) => (
                                                <li key={index} className="suggestion-item" onClick={() => handleSelect(item)}>
                                                    <div className="item-content">
                                                        <div className="item-main">
                                                            <span className="item-name">{item.name}</span>
                                                            <span className="item-code">{item.code}</span>
                                                        </div>
                                                        <p className="item-subtitle">{item.subtitle}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="section">
                                    <h3 className="section-title">POPULAR CITIES</h3>
                                    <ul className="suggestions-list">
                                        {filteredPopular.map((item, index) => (
                                            <li key={index} className="suggestion-item" onClick={() => handleSelect(item)}>
                                                <div className="item-content">
                                                    <div className="item-main">
                                                        <span className="item-name">{item.name}</span>
                                                        <span className="item-code">{item.code}</span>
                                                    </div>
                                                    <p className="item-subtitle">{item.subtitle}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {isOpen && (
                        <div className="FlightSearchdropdown-overlay" onClick={() => setIsOpen(false)} />
                    )}
                </div>
            </div>
        </>
    );
};

export default FlightSearchDropdown;
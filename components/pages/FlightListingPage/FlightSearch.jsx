import FlightSearchDropdown from '@/components/FlightSearchDropdown'
import MySelect from '@/components/MySelect'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomFlightCalendar from '@/components/CustomFlightCalendar'
import TravellersAndClass from '@/components/TravellersAndClass'

const FlightSearch = () => {
    const [tripType, setTripType] = useState('oneway');
    const options_Trip_type = [
        { value: "One Way", label: "One Way" },
        { value: "Round Trip", label: "Round Trip" }
    ]

    // For calendar ===========================================================
    const [locations, setLocations] = useState({
        from: { name: 'New Delhi, India' },
        to: { name: 'Banguluru, India' },
    });
    const handleSwitch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLocations((prev) => ({
            from: prev.to,
            to: prev.from,
        }));
    };
    const handleFromSelect = (selected) => {
        setLocations((prev) => ({ ...prev, from: selected }));
    };
    const handleToSelect = (selected) => {
        setLocations((prev) => ({ ...prev, to: selected }));
    };

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
    const [travellerData, setTravellerData] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        travelClass: "Economy/Premium Economy",
    });



    const [showReturn, setShowReturn] = useState(false);
    const [calendarOpenFor, setCalendarOpenFor] = useState(null); // "departure" | "return" | null
    const [selectedDates, setSelectedDates] = useState({
        start: null,
        end: null,
    });


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

    return (
        <>
            <div className="flight-listing-secA">
                <div className="container">
                    <div className="grid-box">
                        {/* <form action=""> */}

                        <div className="col">
                            <div className="detail-label">Trip Type</div>

                            <MySelect
                                id="category-select"
                                options={options_Trip_type}
                                selectedValue={tripType}
                                onValueChange={setTripType}
                                placeholder={"One Way"}
                                isSearchable={false}
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        position: "static",
                                        backgroundColor: "transparent",
                                        border: "none !important",
                                        borderColor: "transparent !important",
                                        borderWidth: "0 !important",
                                        boxShadow: "none !important",
                                        borderRadius: "5px",
                                        padding: "0px 40px 0px 0px",
                                        cursor: "pointer",
                                        minHeight: "20px !important",
                                        height: "20px !important",
                                        "&:hover": {
                                            border: "none !important",
                                            borderColor: "transparent !important",
                                            boxShadow: "none !important"
                                        },
                                        "&:focus": {
                                            border: "none !important",
                                            outline: "none",
                                            boxShadow: "none !important"
                                        },
                                        "&:focus-within": {
                                            border: "none !important",
                                            boxShadow: "none !important"
                                        }
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        padding: 0,
                                        margin: 0,
                                        height: "20px !important",
                                        minHeight: "20px !important",
                                    }),

                                    menu: (base) => ({
                                        ...base,
                                        borderRadius: "5px",
                                        marginTop: "0px",
                                        padding: "6px 0",
                                        zIndex: 9999,
                                    }),
                                    menuList: (base) => ({
                                        ...base,
                                        padding: 0,
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        padding: "5px 12px",
                                        cursor: "pointer",
                                        backgroundColor: state.isSelected
                                            ? "#611BA7"
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
                                        color: "#ffffff",
                                        fontSize: "14px",
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        fontSize: "14px",
                                        color: "#ffffff",
                                        lineHeight: 0,
                                        position: "absolute",
                                        top: "10px",
                                        marginLeft: "0px",
                                    }),
                                    dropdownIndicator: (base) => ({
                                        ...base,
                                        color: "#ffffff",
                                        padding: 0,
                                        margin: 0,
                                        "&:hover": {
                                            color: "#ffffff",
                                        }
                                    }),
                                    indicatorSeparator: () => ({
                                        display: "none",
                                    }),
                                }}
                            />

                        </div>

                        <div className="col listing-location-section">
                            <FlightSearchDropdown
                                label="From"
                                name={locations.from.name}
                                onSelect={handleFromSelect}
                            />
                            <div className="switch-location" onClick={handleSwitch} style={{ cursor: "pointer" }}>
                                <figure>
                                    <Image src="assets/icon/white-switch-icon.svg" width={25} height={25} alt="switch icon"></Image>
                                </figure>
                            </div>
                            <FlightSearchDropdown
                                label="To"
                                name={locations.to.name}
                                onSelect={handleToSelect}
                            />
                        </div>
                        <div className="col details-row">
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
                        <div className="col details-row details-row2">
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
                                            Select Return
                                        </>
                                    )}
                                </p>

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

                        <div className="col detail-section">
                            <TravellersAndClass onApply={(data) => setTravellerData(data)} />

                            <button className="search-button" onClick={handleSearch}>SEARCH</button>
                        </div>

                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightSearch
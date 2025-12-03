import MySelect from '@/components/MySelect'
import React from 'react'

const FlightSearch = () => {
    const [tripType, setTripType] = ""
    const options_Trip_type = [
        { value: "One Way", label: "One Way" },
        { value: "Round Trip", label: "Round Trip" }
    ]
    return (
        <>
            <div className="flight-listing-secA">
                <div className="container">
                    <div className="grid-box">
                        {/* <form action=""> */}
                        <div className="col">
                            <div className="detail-label" data-animate="zoom-in">Trip Type</div>

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
                                        backgroundColor: "transparent",
                                        border: "none !important",
                                        borderColor: "transparent !important",
                                        borderWidth: "0 !important",
                                        boxShadow: "none !important",
                                        borderRadius: "5px",
                                        padding: "0px 20px 0px 6px",
                                        cursor: "pointer",
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

                                    menu: (base) => ({
                                        ...base,
                                        borderRadius: "5px",
                                        marginTop: "0px",
                                        padding: "6px 0",

                                        zIndex: 9999,
                                    }),
                                    menuList: (base) => ({
                                        ...base,
                                        padding: "0",
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
                                    }),
                                    dropdownIndicator: (base) => ({
                                        ...base,
                                        color: "#ffffff",
                                        "&:hover": {
                                            color: "#ffffff"
                                        }
                                    }),
                                    indicatorSeparator: () => ({
                                        display: "none",
                                    })
                                }}
                            />

                        </div>
                        <div className="col location-section">
                            <div className="tt">
                                <div className="detail-label location-label">From</div>
                                <div className="detail-value location-name">New Delhi, India</div>
                            </div>

                            <div className="tt">
                                <div className="detail-label location-label">To</div>
                                <div className="detail-value location-name">Banguluru, India</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="detail-label">Departure</div>
                            <div className="detail-value">Tue, Sep 30, 2025</div>
                        </div>
                        <div className="col">
                            <div className="detail-label">Return</div>
                            <div className="detail-value">Tue, Sep 30, 2025</div>
                        </div>
                        <div className="col">
                            <div className="travellersClass">
                                <div className="detail-label">Passengers & Class</div>
                                <div className="detail-value">1Adult, Economy/ Premium</div>
                            </div>

                            <button className="search-button">SEARCH</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightSearch
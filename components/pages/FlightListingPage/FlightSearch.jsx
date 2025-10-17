import MySelect from '@/components/MySelect'
import React from 'react'

const FlightSearch = () => {
    // const [tripType, setTripType] = ""
    // const options_Trip_type = [
    //     { value: "One Way", label: "One Way" },
    //     { value: "Option 2", label: "Option 2" }
    // ]
    return (
        <>
            <div className="flight-listing-secA">
                <div className="container">
                    <div className="grid-box">
                        {/* <form action=""> */}
                        <div className="col">
                            <div className="detail-label" data-animate="fade-slide">Trip Type</div>
                            {/* <MySelect
                                    id="category-select"
                                    placeholder="One Way*"
                                    options={options_Trip_type}
                                    selectedValue={tripType}
                                    onValueChange={setTripType}
                                /> */}
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
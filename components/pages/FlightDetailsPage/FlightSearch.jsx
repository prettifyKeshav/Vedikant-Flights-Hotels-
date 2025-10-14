import MySelect from '@/components/MySelect'
import React from 'react'

const FlightSearch = () => {
    const [tripType, setTripType] = ""
    const options_Trip_type = [
        { value: "One Way", label: "One Way" },
        { value: "Option 2", label: "Option 2" }
    ]
    return (
        <>
            <div className="flight-secA">
                <div className="container-fluid">
                    <div className="grid-box">
                        {/* <form action=""> */}
                            <div className="col">
                                <div className="detail-label">Trip Type</div>
                                <MySelect
                                    id="category-select"
                                    placeholder="One Way*"
                                    options={options_Trip_type}
                                    selectedValue={tripType}
                                    onValueChange={setTripType}
                                />
                            </div>
                            <div className="col">
                                <div className="detail-label">From</div>
                            </div>
                            <div className="col">
                                <div className="detail-label">Depart</div>
                            </div>
                            <div className="col">
                                <div className="detail-label">Return</div>
                            </div>
                            <div className="col">
                                <div className="detail-label">Passengers & Class</div>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightSearch
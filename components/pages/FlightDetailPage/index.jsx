
import "@/styles/flightlisting/flightlisting.css";
import Filters from "./Filters";
import ReviewFlightDetails from "./ReviewFlightDetails";

const FlightDetailPage = () => {
    return (
        <>
            <section>
                <div className="flight-detail-banner-bg">
                    <div className="container">
                        <div className="flight-detail-secA">
                            <div className="flight-detail">
                                <ReviewFlightDetails />
                            </div>

                            <aside className='filters'>
                                <Filters />
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlightDetailPage
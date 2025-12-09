
import "@/styles/flightlisting/flightlisting.css";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const FlightDetailPage = () => {
    return (
        <>
            <section>
                <div className="flight-detail-banner-bg">
                    <div className="container">
                        <div className="flight-detail-secA">
                            <div className="flight-detail">
                                <LeftCard />
                            </div>

                            <aside className='filters'>
                                <RightCard />
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlightDetailPage
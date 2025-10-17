import React from 'react'
import Filters from './Filters'
import FlightCard from './FlightCard'

const Flight_ListingB = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="flight-listing-secB">
                        <aside className='filters'>
                            <Filters />
                        </aside>

                        <div className="flight-list">
                            <FlightCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Flight_ListingB 
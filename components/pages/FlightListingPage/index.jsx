"use client";

import React from 'react';
import "@/styles/flightlisting/flightlisting.css";
import FlightSearch from './FlightSearch';
import Flight_ListingB from './Flight_ListingB';

// import "@/components/pages/FlightListingPage/flight.css";
import FlightsPage from './FlightsPage';
import Filters from './Filters';
import FlightCard from './FlightCard';

const FlightListingPage = () => {
    return (
        <>
            <FlightSearch />
            <Flight_ListingB />
            {/* <FlightsPage /> */}
            {/* <Filters /> */}
            {/* <FlightCard /> */}
        </>
    )
}

export default FlightListingPage
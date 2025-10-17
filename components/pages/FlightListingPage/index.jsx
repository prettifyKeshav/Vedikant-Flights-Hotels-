"use client";

import React from 'react';
import "@/styles/flightlisting/flightlisting.css";
import FlightSearch from './FlightSearch';
// import "@/components/pages/FlightListingPage/flight.css";
import FlightsPage from './FlightsPage';
import Filters from './Filters';
import FlightCard from './FlightCard';
import Flight_ListingB from './Flight_ListingB';

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
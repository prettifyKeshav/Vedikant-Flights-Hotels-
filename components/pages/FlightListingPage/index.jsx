"use client";

import React from 'react';
import "@/styles/flightlisting/flightlisting.css";
import FlightSearch from './FlightSearch';
import Flight_ListingB from './Flight_ListingB';

const FlightListingPage = () => {
    return (
        <>
            <FlightSearch />
            <Flight_ListingB />
        </>
    )
}

export default FlightListingPage
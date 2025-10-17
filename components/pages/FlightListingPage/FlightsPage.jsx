"use client";
import { useState } from "react";
import Filters from "./Filters";
import FlightCard from "./FlightCard";

const FlightsPage = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        stops: "Non Stop",
        airline: [],
        price: [5000, 8000],
    });

    const flights = [
        {
            id: 1,
            airline: "IndiGo",
            flightNo: "6E 2562",
            from: "New Delhi",
            to: "Bengaluru",
            depTime: "07:50",
            arrTime: "10:25",
            duration: "02h 35m",
            price: 6150,
            refundable: true,
            freeMeals: true,
            baggage: "15 Kg",
            cabin: "7 Kg",
        },
    ];

    const filteredFlights = flights.filter(f => {
        return (
            (selectedFilters.stops === "Non Stop") &&
            f.price >= selectedFilters.price[0] &&
            f.price <= selectedFilters.price[1]
        );
    });

    return (
        <div className="flights-page">
            <aside className="filters">
                <Filters selected={selectedFilters} onChange={setSelectedFilters} />
            </aside>

            <section className="flight-list">
                <div className="offer-banner">
                    <p>🎉 Get up to 20% OFF on flight bookings — Use code <strong>#DIWALI</strong></p>
                </div>
                {filteredFlights.map(flight => (
                    <FlightCard key={flight.id} flight={flight} />
                ))}
            </section>

        </div>
    );
};

export default FlightsPage;

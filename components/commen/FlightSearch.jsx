'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FlightSearch = ({
    layout = 'home',
    initialValues = {},
    showReturnPrompt = true,
    onSearch,
    showSwitch = true,
}) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        from: initialValues.from || { name: 'Delhi', code: 'DEL, Delhi Airport India...' },
        to: initialValues.to || { name: 'Kochi', code: 'COK, Cochin International...' },
        departure: initialValues.departure || { day: '16', monthYear: "Sep'25", weekday: 'Tuesday' },
        returnDate: initialValues.returnDate || '',
        travellers: initialValues.travellers || 1,
        classType: initialValues.classType || 'Economy/Premium Economy',
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(formData); // Pass data to parent (e.g., navigate)
        } else {
            // Default: Navigate to results
            router.push(`/flight-results?from=${formData.from.name}&to=${formData.to.name}`);
        }
    };

    return (
        <form className={`flight-search-container ${layout}`} onSubmit={handleSubmit}>
            <div className="location-row">
                <div className="location-section">
                    <p className="location-label">From</p>
                    <p className="location-name">{formData.from.name}</p>
                    <p className="location-code">{formData.from.code}</p>
                    {/* Add input for dynamic editing if needed: <input value={formData.from.name} onChange={(e) => handleChange('from', { ...formData.from, name: e.target.value })} /> */}
                </div>
                {showSwitch && (
                    <Link href="/" className="switch-location">
                        <figure>
                            <Image src="assets/images/home/icon/switch-icon.svg" width={25} height={25} alt="switch icon" />
                        </figure>
                    </Link>
                )}
                <div className="location-section">
                    <p className="location-label">To</p>
                    <p className="location-name">{formData.to.name}</p>
                    <p className="location-code">{formData.to.code}</p>
                </div>
            </div>

            <div className="details-row">
                <div className="detail-section">
                    <p className="detail-label">Departure</p>
                    <p className="detail-value">
                        <b>{formData.departure.day}</b> <span>{formData.departure.monthYear}</span>
                    </p>
                    <p className="detail-text">{formData.departure.weekday}</p>
                </div>
                <div className="detail-section">
                    <p className="detail-label">Return</p>
                    {formData.returnDate ? (
                        <p className="detail-value">
                            <b>{formData.returnDate.day}</b> <span>{formData.returnDate.monthYear}</span>
                        </p>
                    ) : (
                        showReturnPrompt && <p className="detail-text">Tap to add a return date for bigger discounts</p>
                    )}
                </div>
                <div className="detail-section">
                    <p className="detail-label">Travellers & Class</p>
                    <p className="detail-value">
                        <b>{formData.travellers}</b> <span>Traveller</span>
                    </p>
                    <p className="detail-text">{formData.classType}</p>
                </div>
            </div>
            <button type="submit" className="search-button">SEARCH</button>
        </form>
    );
};

export default FlightSearch;
"use client"
import { useState } from "react";
import "../styles/component/component.css"

export default function QuantityInput({ classname="", size="XS",  }){
    const [counts, setCounts] = useState({
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        "2XL": 0,
        "3XL": 0,
    });
    const increase = (size) => {
        setCounts(prev => ({ ...prev, [size]: prev[size] + 1 }));
    };
    const decrease = (size) => {
        setCounts((prev) => ({
        ...prev,
        [size]: prev[size] > 0 ? prev[size] - 1 : 0,
        }));
    };

    const handleInputChange = (e, size) => {
        const value = e.target.value;
        const numericValue = parseInt(value, 10);

        setCounts(prev => ({
            ...prev,
            [size]: isNaN(numericValue) ? 0 : numericValue,
        }));
    };
    
    return(
        <div className={`size ${classname}`}>
            <p>{size}</p>
            <div className="size_count">
                <button type="button" onClick={() => decrease(size)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="none" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 12h-15" />
                    </svg>
                </button>

                <input type="text" value={counts[size]} onChange={(e) => handleInputChange(e, size)} />

                <button type="button" onClick={() => increase(size)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="#666" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
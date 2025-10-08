"use client";
import { useModalStore } from "@/store/modalStore";
import { useState } from "react";

const Home_SectionD = () => {
    const openEnquire = useModalStore((state) => state.openEnquire);
    const [activeCol, setActiveCol] = useState(0);
    const handleMouseEnter = (index) => {
        setActiveCol(index);
    };

    return (
        <>
            <div className="home-secD">
                <div className="container">
                    <h2>Partner with Us – Unlock a World of Opportunities!</h2>
                    <div className="grid-box">
                        {[
                            {
                                title: "Earn More with Competitive Margins",
                                number: "01",
                                description:
                                    "Benefit from attractive commissions, flexible packages, and exclusive deals designed to help you grow your business and increase profitability.",
                            },
                            {
                                title: "Access a Wide Range of Global Destinations & Custom Packages",
                                number: "02",
                                description:
                                    "Offer your clients tailored experiences with curated itineraries, luxury stays, and seamless travel solutions across top destinations worldwide.",
                            },
                            {
                                title: "Dedicated Support & Smart Tools for Success",
                                number: "03",
                                description:
                                    "From 24/7 assistance to advanced booking platforms, marketing resources, and expert guidance — we equip you with everything you need to thrive in the travel industry.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`col ${activeCol === index ? "active" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                            >
                                <div className="flex-box">
                                    <h4>{item.title}</h4>
                                    <p>{item.number}</p>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <button className="btn2" onClick={openEnquire}>
                        Become an Agent
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home_SectionD;
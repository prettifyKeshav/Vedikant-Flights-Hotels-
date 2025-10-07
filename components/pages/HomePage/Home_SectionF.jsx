"use client";

import Image from "next/image";
import { useModalStore } from "@/store/modalStore"


const Home_SectionF = () => {
    const openEnquire = useModalStore((state) => state.openEnquire)
    return (
        <>
            <div className="home-secF">
                <div className="container">
                    <div className="heading">
                        <h2>Corporate Login – Seamless Travel Solutions for Your Business</h2>
                        <p>Empower your organization with customized travel services, simplified booking, and dedicated support. Explore the categories below to see how we can serve your corporate travel needs.</p>
                    </div>
                    <div className="grid-box">
                        <div className="col">
                            <div className="flex-box">
                                <h4>Employee Travel Management</h4>
                                <figure>
                                    <Image src="/assets/images/home/corporate-login/1.svg" width={51.36906051635742} height={56.00270462036133} alt="ico"></Image>
                                </figure>
                            </div>
                            <ul>
                                <li>Streamlined Booking & Approvals – Manage employee travel requests, approvals, and itineraries through an intuitive platform</li>
                                <li>Cost Control & Policy Compliance – Ensure travel expenses stay within budget with built-in policy rules and automated approvals</li>
                                <li>Personalized Travel Packages – Offer employees curated options aligned with corporate needs and preferences</li>
                            </ul>
                            <button className="btn2" onClick={openEnquire}>Join Now</button>
                        </div>

                        <div className="col">
                            <div className="flex-box">
                                <h4>Client Hospitality </h4>
                                <figure>
                                    <Image src="/assets/images/home/corporate-login/2.svg" width={51.36906051635742} height={56.00270462036133} alt="ico"></Image>
                                </figure>
                            </div>
                            <ul>
                                <li>Seamless Event Travel Coordination – Organize client meetings, conferences, and incentive trips with hassle-free logistics</li>
                                <li>Premium Hospitality Solutions – Access curated hotel stays, airport transfers, and entertainment packages to enhance client experience</li>
                                <li>Real-Time Support – Get expert assistance at every step to ensure flawless execution of business events</li>
                            </ul>
                            <button className="btn2" onClick={openEnquire}>Join Now</button>
                        </div>

                        <div className="col">
                            <div className="flex-box">
                                <h4>Global Business </h4>
                                <figure>
                                    <Image src="/assets/images/home/corporate-login/3.svg" width={51.36906051635742} height={56.00270462036133} alt="ico"></Image>
                                </figure>
                            </div>
                            <ul>
                                <li>Multi-Destination Itineraries – Plan cross-border meetings, trade shows, and client visits with comprehensive travel solutions</li>
                                <li>Visa & Compliance Assistance – Get help navigating complex visa requirements, travel documentation, and international regulations</li>
                                <li>24/7 Dedicated Support – Round-the-clock assistance for urgent travel needs, rescheduling, and emergency services</li>
                            </ul>
                            <button className="btn2" onClick={openEnquire}>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_SectionF
"use client";

// import Link from 'next/link'
import { useModalStore } from "@/store/modalStore"


const Home_SectionD = () => {
        const openEnquire = useModalStore((state) => state.openEnquire)
    return (
        <>
            <div className="home-secD">
                <div className="container">
                    <h2>Partner with Us – Unlock a World of Opportunities!</h2>
                    <div className="grid-box">
                        <div className="col active">
                            <div className="flex-box">
                                <h4>Earn More with Competitive Margins</h4>
                                <p>01</p>
                            </div>
                            <p>Benefit from attractive commissions, flexible packages, and exclusive deals designed to help you grow your business and increase profitability.</p>
                        </div>

                        <div className="col">
                            <div className="flex-box">
                                <h4>Access a Wide Range of Global Destinations & Custom Packages</h4>
                                <p>02</p>
                            </div>
                            <p>Offer your clients tailored experiences with curated itineraries, luxury stays, and seamless travel solutions across top destinations worldwide.</p>
                        </div>

                        <div className="col">
                            <div className="flex-box">
                                <h4>Dedicated Support & Smart Tools for Success</h4>
                                <p>03</p>
                            </div>
                            <p>From 24/7 assistance to advanced booking platforms, marketing resources, and expert guidance — we equip you with everything you need to thrive in the travel industry.</p>
                        </div>
                    </div>

                    {/* <Link href="/" className='btn2' onClick={openEnquire}>Become an Agent</Link> */}
                    <button className='btn2' onClick={openEnquire}>Become an Agent</button>
                </div>
            </div>
        </>
    )
}

export default Home_SectionD
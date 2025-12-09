"use client"
import { useRouter } from 'next/navigation'; // For better redirects
import "@/styles/dashboard/dashboard.css"
import { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';

const ContentArea = ({ activeView }) => {
    const router = useRouter(); // For router.push

    const renderView = () => {
        switch (activeView) {
            case 'dashboard':
                return <DashboardView />;
            case 'profile':
                return <ProfileView />;
            case 'flights':
                return <FlightsView />;
            case 'hotels':
                return <HotelsView />;
            case 'password':
                return <PasswordView />;
            case 'logout':
                return <LogoutView />;
            default:
                return <DashboardView />;
        }
    };

    return (
        <main className="contentArea">
            <div className="contentWrapper">
                {renderView()}
            </div>
        </main>
    );
};


// My Dashboard =====================================================================================>
function DashboardView() {
    return (
        <div>
            <h1 className="viewHeader">Welcome to Dashboard</h1>
            <p>Overview of your bookings, recent activity, etc.</p>
        </div>
    );
}

// My Profile =====================================================================================>
function ProfileView() {
    useEffect(() => {
        const inputBoxes = document.querySelectorAll('.form-control');
        const handleFocus = function () {
            this.closest('.form-group')?.classList.add('active');
            this.classList.add('valid');
        };

        const handleBlur = function () {
            const hasValue = this.value.trim() !== '';
            if (!hasValue) {
                this.closest('.form-group')?.classList.remove('active');
                this.classList.remove('valid');
            }
        };
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', handleFocus);
            inputBox.addEventListener('blur', handleBlur);
        });
        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', handleFocus);
                inputBox.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div className='my-profile'>
            <h1 className="viewHeader">My Profile</h1>

            <div className="flex-box">
                <figure>
                    <Image src="/assets/images/dashboard/user-image.png" width={73} height={73} alt="user image"></Image>
                </figure>
                <div className="cg-avtar">
                    <h3>Change Avatar</h3>
                    <p>JPG or PNG, Max Size 2 MB</p>
                </div>
                <button className="upload">
                    <span>Upload New</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#611BA7" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
                </button>

                <button className="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#BA0000" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                </button>
            </div>

            <div className="form form-grid">
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">First Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Middle Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Last Name</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Email ID</label>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" />
                    <label htmlFor="">Phone No.</label>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" />
                    <label htmlFor="">WhatsApp No.</label>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Address Line 1</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Address Line 2</label>
                </div>


                <div className="grid-box full">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">City</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">State</label>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Postal Code</label>
                    </div>
                </div>

                <button className="btn custom-name full">update Profile</button>
            </div>

        </div>
    );
}

// My Flights =====================================================================================>
function FlightsView() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [activeTab1, setActiveTab1] = useState("flightDetails");
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    // Handle dynamic accordion height
    useEffect(() => {
        if (ref1.current) {
            ref1.current.style.maxHeight = open1
                ? ref1.current.scrollHeight + "px"
                : "0px";
        }
        if (ref2.current) {
            ref2.current.style.maxHeight = open2
                ? ref2.current.scrollHeight + "px"
                : "0px";
        }
        if (ref3.current) {
            ref3.current.style.maxHeight = open3
                ? ref3.current.scrollHeight + "px"
                : "0px";
        }
    }, [open1, open2, open3]);

    return (
        <>
            <div className="my-flights">
                {/* ================= CARD 1 ================= */}
                <div className="card-container">
                    <div className="top-flex-box">
                        <div className="left">
                            <h2>Booking ID  OTC0000000</h2>
                            <p>20 Nov,  2025</p>
                        </div>
                        <div className="right">
                            <Link href="/assets/FCAConflictMineralsPolicy.pdf" target='_blank'>
                                <span>Download Invoice</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#611BA7" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z" /></svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid-box">
                        <div className="col" data-animte="fade-up">
                            <figure>
                                <Image
                                    src="/assets/images/Flight-Listing/flight-image.png"
                                    width={44}
                                    height={44}
                                    alt="flight image"
                                />
                            </figure>
                            <div className="content">
                                <h5>IndiGo</h5>
                                <p>6E 2562</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="content">
                                <h5>07:50</h5>
                                <p>New Delhi</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="content">
                                <h4>
                                    <span>02</span> h <span>35</span> m
                                </h4>
                                <p>Non stop</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="content">
                                <h5>10:25</h5>
                                <p>Bengaluru</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="content">
                                <h5>₹ 6,150</h5>
                                <p>per adult</p>
                            </div>
                        </div>

                        {/* <div className="col">
                            <div className="selct-btn-div">
                                <Link href="/" className="btn">
                                    <span>SELECT</span>
                                    <Image
                                        src="/assets/icon/white-right-arrow.svg"
                                        width={12}
                                        height={12}
                                        alt="ico"
                                    />
                                </Link>
                            </div>
                        </div> */}
                    </div>

                    {/* ===== Accordion 1 ===== */}
                    <div className={`accordian ${open1 ? "open" : ""}`}>
                        <div className="accordian-title" onClick={() => setOpen1(!open1)}>
                            <div className="grid-box">
                                <div className="col">
                                    <p>Refundable</p>
                                    <span className="point"></span>
                                    <p>Free Meals</p>
                                </div>
                                <div className="col">
                                    <p>
                                        Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong>
                                    </p>
                                </div>
                                <div className="col">
                                    <p>VIEW FLIGHT DETAILS</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div className="accordian-description" ref={ref1}>
                            <div className="tab-section">
                                {/* Tabs Navigation */}
                                <ul className="tab-nav">
                                    <li
                                        className={activeTab1 === "flightDetails" ? "active" : ""}
                                        onClick={() => setActiveTab1("flightDetails")}
                                    >
                                        <span>Flight Details</span>
                                    </li>
                                    <li
                                        className={activeTab1 === "fareSummary" ? "active" : ""}
                                        onClick={() => setActiveTab1("fareSummary")}
                                    >
                                        <span>Fare summary</span>
                                    </li>
                                    <li
                                        className={activeTab1 === "cancellation" ? "active" : ""}
                                        onClick={() => setActiveTab1("cancellation")}
                                    >
                                        <span>Cancellation</span>
                                    </li>
                                </ul>

                                {/* Tabs Content */}
                                <div className="tab-nav-content">
                                    {/* --- Flight Details --- */}
                                    <div
                                        className={`tabs ${activeTab1 === "flightDetails" ? "active" : ""
                                            }`}
                                    >
                                        <div className="head">
                                            <h4>New Delhi to Bengaluru, 30 Sep</h4>
                                        </div>
                                        <div className="bottom">
                                            <div className="col">
                                                <figure>
                                                    <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                                                </figure>
                                                <h5>IndiGo</h5>
                                                <p>6E 2562</p>
                                            </div>

                                            <div className="grid-box">
                                                <div className="col">
                                                    <div className="content">
                                                        <h5>07:50</h5>
                                                        <p>Tue, 30 Sep 25</p>
                                                    </div>

                                                    <div className="bott">
                                                        <h5>Terminal T1</h5>
                                                        <p>IGI New Delhi, India</p>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="content">
                                                        <h4><span>02</span> h <span>35</span> m</h4>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="content">
                                                        <h5>07:50</h5>
                                                        <p>Tue, 30 Sep 25</p>
                                                    </div>

                                                    <div className="bott">
                                                        <h5>Terminal T1</h5>
                                                        <p>IGI New Delhi, India</p>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="grid-box2">
                                                        <div className="content">
                                                            <h5>Baggage</h5>
                                                            <p>Adult</p>
                                                        </div>

                                                        <div className="content">
                                                            <h5>Check in</h5>
                                                            <p>15 Kgs(1 piece only)</p>
                                                        </div>

                                                        <div className="content">
                                                            <h5>Cabin</h5>
                                                            <p>7 Kgs(1 piece only)</p>
                                                        </div>
                                                    </div>

                                                    <p className="info">
                                                        The baggage information is just for reference. Please Check with airline
                                                        before check-in. For more information, visit Indigo Website.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Fare Summary --- */}
                                    <div className={`tabs fare-summary ${activeTab1 === "fareSummary" ? "active" : ""}`}>
                                        <div className="card">
                                            <div className="top">
                                                {/* ===== Accordion 1 ===== */}
                                                <div className={`accordian ${open3 ? "open" : ""}`}>
                                                    <div className="accordian-title" onClick={() => setOpen3(!open3)}>
                                                        <div className="flex-box space-between align-item-center">
                                                            <p>
                                                                <span className="circle"></span>
                                                                Base Fare
                                                            </p>
                                                            <p>₹5484</p>
                                                        </div>
                                                    </div>

                                                    <div className="accordian-description" ref={ref3}>
                                                        <div className="tab-nav-content">
                                                            <div className="flex-box space-between align-item-center">
                                                                <p>1 x Adult Fare</p>
                                                                <p> ₹3000</p>
                                                            </div>
                                                            <div className="flex-box space-between align-item-center">
                                                                <p>1 x Child Fare</p>
                                                                <p> ₹2484</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`accordian ${open2 ? "open" : ""}`}>
                                                    <div className="accordian-title" onClick={() => setOpen2(!open2)}>
                                                        <div className="flex-box space-between align-item-center">
                                                            <p>
                                                                <span className="circle"></span>
                                                                Taxes
                                                            </p>
                                                            <p>₹ 814</p>
                                                        </div>
                                                    </div>

                                                    <div className="accordian-description" ref={ref2}>
                                                        <div className="tab-nav-content">
                                                            <div className="flex-box space-between align-item-center">
                                                                <p>1 x Adult Fare</p>
                                                                <p> ₹3000</p>
                                                            </div>
                                                            <div className="flex-box space-between align-item-center">
                                                                <p>1 x Child Fare</p>
                                                                <p> ₹2484</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="middle">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Total Fare</th>
                                                            <th>₹6298</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Insurance (Not Included)</td>
                                                            <td>₹0</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Web Check-in Fee</td>
                                                            <td>₹0</td>
                                                        </tr>

                                                        <tr className="green">
                                                            <td>Coupon Applied</td>
                                                            <td>₹100 OFF</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="bottom">
                                                <div className="highlight">
                                                    <p>You PAY</p>
                                                    <p>₹6298</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Cancellation --- */}
                                    <div
                                        className={`tabs cancellation ${activeTab1 === "cancellation" ? "active" : ""}`}>
                                        <div className="head">
                                            <h4>DEL-BLR</h4>
                                        </div>
                                        <div className="bottom">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Time frame{" "}
                                                            <span>(From Scheduled flight departure)</span>
                                                        </th>
                                                        <th>
                                                            Airline Fee + Goibibo Fee{" "}
                                                            <span>(Per passenger)</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0 hours to 2 hours*</td>
                                                        <td>ADULT: Non Refundable</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2 hours to 365 days*</td>
                                                        <td>ADULT: ₹9030 + ₹400</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// My Hotels =====================================================================================>
function HotelsView() {
    return (
        <div>
            <h1 className="viewHeader">My Hotels</h1>
            <p>List of hotel bookings.</p>
        </div>
    );
}

// Change Password =====================================================================================>
function PasswordView() {
    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}> {/* Prevent default submit */}
            <h1 className="viewHeader">Change Password</h1>
            <div>
                <label className="formLabel">Current Password</label>
                <input type="password" className="formInput" />
            </div>
            <div>
                <label className="formLabel">New Password</label>
                <input type="password" className="formInput" />
            </div>
            <div>
                <label className="formLabel">Confirm Password</label>
                <input type="password" className="formInput" />
            </div>
            <button type="submit" className="formButton">
                Update Password
            </button>
        </form>
    );
}

function LogoutView() {
    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <div className="textCenter">
            <h1 className="viewHeader">Logout</h1>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout} className="logoutButton">
                Confirm Logout
            </button>
        </div>
    );
}

export default ContentArea;
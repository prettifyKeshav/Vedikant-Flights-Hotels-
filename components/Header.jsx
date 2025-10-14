"use client";

import Link from "next/link"
import Image from "next/image"
import '@/styles/header.css'
import { useModalStore } from "@/store/modalStore";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);
    const openEnquire = useModalStore((state) => state.openEnquire)
    const openLogin = useModalStore((state) => state.openLogin)


    return (
        <>
            <header >
                <div className="container-fluid">
                    <div className="header-wrapper">
                        <div className="colA">
                            <Link href="/" className="logo">
                                <Image src="/assets/logo.svg" width="204" height="25" alt="Vedikant logo"></Image>
                            </Link>
                        </div>

                        <nav className="colB header__nav">
                            <ul className="nav-list">
                                <div className="col">
                                    <li>
                                        <Link href="/flights" className="nav-link flights active">
                                            <Image src="assets/icon/header-icon/flight.svg" alt="Flight icon" className="nav-link__icon svg" width={24} height={24} />
                                            <span>Flights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hotels" className="nav-link">
                                            <Image src="assets/icon/header-icon/hotel.svg" alt="Hotel icon" className="nav-link__icon svg" width={24} height={24} />
                                            Hotels
                                        </Link>
                                    </li>
                                </div>
                                <div className="col">
                                    <li>
                                        <Link href="/packages" className="nav-link packages">
                                            <Image src="assets/icon/header-icon/suitcase.svg" alt="Packages icon" className="nav-link__icon svg" width={24} height={24} />
                                            Packages
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/offers" className="nav-link offers">
                                            <Image src="assets/icon/header-icon/tag.svg" alt="Offers icon" className="nav-link__icon svg" width={24} height={24} />
                                            Offers
                                        </Link>
                                    </li>
                                    <li>
                                        {/* <Link href="/become" className="nav-link">
                                            Become an Agent
                                        </Link> */}
                                        <button className="nav-link" onClick={openEnquire}>Become an Agent</button>
                                    </li>
                                    <li>
                                        {/* <Link href="/login" className="nav-link">
                                            Login
                                        </Link> */}
                                        <button className="nav-link" onClick={openLogin}>Login</button>
                                    </li>
                                    <li>
                                        <Link href="tel:+917066692662">
                                            <figure>
                                                <Image src="assets/icon/header-icon/call.svg" width={24} height={24} alt="call icon"></Image>
                                            </figure>
                                            <div className="no">
                                                <p>Book Online</p>
                                                <p>+91 70 6669 2662</p>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </nav>

                        <button type="button" className="ham-btn" data-model=".ham-pop">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
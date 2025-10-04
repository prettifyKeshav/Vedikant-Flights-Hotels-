"use client";
import Link from "next/link"
import Image from "next/image"
import '@/styles/header.css'
import { useModalStore } from "@/store/modalStore";

export default function Header() {
    const openHam = useModalStore((state) => state.openHam);
    const handleLogoClick = () => {
        window.location.reload();
        window.location.href = "/";
    };
    return (
        <>
            <header className="header-fixed">
                <div className="header-wrapper">
                    <div className="colA">
                        <Link href="/" className="logo" onClick={handleLogoClick}>
                            <Image src="/assets/logo.svg" width="204" height="25" alt="Flextron logo"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="nav-a">
                            {/* <li><Link href="/about-us">About Us</Link></li> */}

                            <li className="hasDropdown">
                                <Link href="/about-us">About Us</Link>
                                <div className="dropdown-menu dropdown-menu-single" role="menu">
                                    <ul>
                                        <li><Link href="/about-us">Company Profile</Link></li>
                                        <li><Link href="/corporate-responsibility">Corporate Responsibility</Link></li>
                                        <li><Link href="/standards-certifications">Standards & Certifications</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hasDropdown">
                                <a href="/services" aria-haspopup="true" aria-expanded="false">Services</a>
                                <div className="dropdown-menu dropdown-menu-single" role="menu">
                                    <ul>
                                        <li><Link href="/service-detail">
                                            {/* <Image className="svg" src="/assets/icon/industry.svg" alt="india-entry-services" width={10} height={10}></Image> */}
                                            Advanced SMT PCB Assembly</Link></li>
                                        <li><Link href="/service-detail">Design for Manufacturing</Link></li>
                                        <li><Link href="/service-detail">Engineering and Design</Link></li>
                                        <li><Link href="/service-detail">Quick Turn Assembly Services</Link></li>
                                        <li><Link href="/service-detail">Mixed Technology Assembly</Link></li>
                                        <li><Link href="/service-detail">Buildings – Architecture</Link></li>
                                        <li><Link href="/service-detail">Assurance of Absolute Quality</Link></li>
                                        <li><Link href="/service-detail">One-Stop Source for All Services</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hasDropdown">
                                <a href="/industries" aria-haspopup="true" aria-expanded="false">Industries</a>
                                <div className="dropdown-menu" role="menu">
                                    <ul>
                                        <li><Link href="/industries-detail">Military / Aerospace Industry</Link></li>
                                        <li><Link href="/industries-detail">Medical / Hospital Industry</Link></li>
                                        <li><Link href="/industries-detail">Lighting Industry</Link></li>
                                        <li><Link href="/industries-detail">Industrial / Commercial Equipment</Link></li>
                                        <li><Link href="/industries-detail">Utility &amp; Telecommunication Industry</Link></li>
                                        <li><Link href="/industries-detail">Wireless and IoT Industry</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href="/capabilities">Capabilities</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="colC">
                        <ul className="nav-b">
                            {/* <li><Link href="#"><Image className="svg" alt="icon" width={25} height={25} src="assets/icon/world.svg"/>16+ Countries</Link></li> */}
                            <li><Link href="tel:+6307661000"> (630) 766-1000</Link></li>

                            <li>
                                <button type="button" className="ham_btn" onClick={openHam}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
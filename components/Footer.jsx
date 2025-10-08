"use client"

import Link from "next/link"
import Image from "next/image"
import Banner from "@/components/Banner";
import FooterStrip from "./FooterStrip";
import Hamburger from "./Hamburger";
import EnquirePop from "./EnquirePop";
import { useModalStore } from "@/store/modalStore"
import Overlay from "./Overlay";
import VideoPopup from "./VideoPop";

export default function Footer() {
    const openEnquire = useModalStore((state) => state.openEnquire)
    return (
        <>
            <footer>
                <div className="main-footer container">
                    <div className="colA">
                        <figure>
                            <Image src='/assets/logo-white.png' alt="logo" width={134} height={134} />
                        </figure>
                        
                        <div className="social-icons">
                            <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path></svg>
                            </a>
                            <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                            </a>
                            <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                            </a>
                            <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="colB">
                        <div className="list">
                            <ul>
                                <li><Link href="/">Flights</Link></li>
                                <li><Link href="/">Hotels</Link></li>
                                <li><Link href="/">Offers</Link></li>
                                <li><Link href="/">Packages</Link></li>
                            </ul>
                        </div>
                        <div className="list">
                            <h6>Company</h6>
                            <ul>
                                <li><Link href="/about-us">About</Link></li>
                                <li><Link href="/blog">Blogs</Link></li>
                                <li><Link href="/industries">FAQ’s</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="list">
                            <h6>Contact Us</h6>
                            <ul>
                                <li><a href="https://www.google.com/maps?ll=41.98127,-87.988919&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=300+Bauman+Ct+Wood+Dale,+IL+60191+USA" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><g fill="none" stroke="#232963"><path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" /><path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" /></g></svg>
                                    <span>Hanuman Dham Road, Khushalpur, Buxa, Ramnagar, Uttarakhand</span>
                                </a>
                                </li>
                                <li><a href="mailto:sales@flextronassembly.com" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#232963" d="M10.89 2.538a2 2 0 0 1 2.072-.09l.147.09l8 5.333a2 2 0 0 1 .884 1.498l.007.166V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V9.535a2 2 0 0 1 .756-1.566l.135-.098zm9.11 8.33l-7.168 4.78a1.5 1.5 0 0 1-1.664 0L4 10.867V19h16zm-8-6.666L4.803 9L12 13.798L19.197 9z" /></g></svg>
                                    info@vedikanttravel.com</a>
                                </li>
                                <li className="phone">
                                    <a href="tel:+6307661000">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={26} viewBox="0 0 12 12"><path fill="#232963" d="M5.561 2.551a.84.84 0 0 0-1.033-.514c-.973.3-1.653 1.135-1.507 2.101A8.7 8.7 0 0 0 4.092 7.18a8.8 8.8 0 0 0 2.083 2.445c.754.61 1.812.442 2.558-.258A.85.85 0 0 0 8.81 8.21l-.534-.653a.845.845 0 0 0-.91-.272l-1.232.39l-.215-.222a5 5 0 0 1-.706-.929a4.8 4.8 0 0 1-.446-1.079l-.083-.295l.95-.875a.86.86 0 0 0 .221-.935zm-1.327-1.47a1.84 1.84 0 0 1 2.264 1.121l.293.788a1.86 1.86 0 0 1-.48 2.019l-.49.451c.063.174.148.373.258.566c.11.19.238.363.355.504l.63-.2a1.845 1.845 0 0 1 1.985.593l.534.653a1.85 1.85 0 0 1-.166 2.52c-.994.933-2.617 1.32-3.87.306a9.8 9.8 0 0 1-2.32-2.722a9.7 9.7 0 0 1-1.195-3.393c-.24-1.593.903-2.806 2.202-3.205" /></svg>
                                        <span>+91 70 6669 2662</span>
                                    </a>
                                </li>
                                <li className="bottom-btn enquire-btn" onClick={openEnquire}>
                                    get in touch
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="colC">
                    </div> */}
                </div>

                <div className="bottom-footer container">
                    <p>&copy; Vedikant Travel All rights reserved. &nbsp; |  &nbsp;Made by passion  :  Prettify Creative</p>
                    <div className="pret">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                    </div>
                </div>
            </footer>
            <Overlay />
            <FooterStrip />
            <Hamburger />
            <EnquirePop />
            <VideoPopup />
        </>
    )
}
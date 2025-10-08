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
                <div className="upper-footer">
                    <div className="container">
                        <div className="grid-box">
                            <div className="col">
                                <div className="flex">
                                    <figure>
                                        <Image src="/assets/icon/footer-icon/1.svg" width={42.99998474121094} height={30.8135929107666} alt="icon 1"></Image>
                                    </figure>
                                    <div className="content">
                                        <h4>700 Destinations</h4>
                                        <p>Explore over 700 incredible destinations worldwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="flex">
                                    <figure>
                                        <Image src="/assets/icon/footer-icon/2.svg" width={42.99998474121094} height={30.8135929107666} alt="icon 1"></Image>
                                    </figure>
                                    <div className="content">
                                        <h4>Exciting Deals</h4>
                                        <p>Enjoy exciting deals on flights and hotels</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="flex">
                                    <figure>
                                        <Image src="/assets/icon/footer-icon/2.svg" width={42.99998474121094} height={30.8135929107666} alt="icon 1"></Image>
                                    </figure>
                                    <div className="content">
                                        <h4>Best Price Gurantee</h4>
                                        <p>Our seamless online ticket booking  process granted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="flex">
                                    <figure>
                                        <Image src="/assets/icon/footer-icon/3.svg" width={42.99998474121094} height={30.8135929107666} alt="icon 1"></Image>
                                    </figure>
                                    <div className="content">
                                        <h4>24/7 Support</h4>
                                        <p>Get assitance 24/7 on any kind of travel related query. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer container">
                    <div className="colA">
                        <figure>
                            <Image src='/assets/logo-white.png' alt="logo" width={134} height={134} />
                        </figure>

                        <div className="social-icons">
                            <Link href="https://www.facebook.com/vedikant" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                            </Link>
                            <Link href="https://www.instagram.com/vedikant/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                            </Link>
                            <Link href="javascript:;" target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#ffffff" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"/></g></svg>
                            </Link>
                            <Link href="https://in.linkedin.com/company/vedikant" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                            </Link>
                            <Link href="https://wa.link/pn9dd0" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
                            </Link>
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
                    <p>&copy; Vedikant Travel All rights reserved. &nbsp; |  &nbsp;Made by passion  :  <span><Image src="/assets/icon/prettify-light.svg" width={100} height={100} alt="prettify creative"></Image></span></p>
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
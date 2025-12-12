"use client"
import '../styles/components/component.css'
import { useModalStore } from "@/store/modalStore"
import EnquirePop from './EnquirePop'
import Link from 'next/link'


export default function FooterStrip() {
    const openEnquire = useModalStore((state) => state.openEnquire)
    return (
        <div className="footer-strip">
            <ul>
                <li>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5z"></path></svg>
                        Flights
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1zm-5-2h2v-8h-6v8h2v-6h2zm0-10V5H5v14h6V9zM7 11h2v2H7zm0 4h2v2H7zm0-8h2v2H7z"></path></svg>
                        Hotels
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256"><path fill="#fff" d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m88 168H40V80h40v16a8 8 0 0 0 16 0V80h64v16a8 8 0 0 0 16 0V80h40Z"></path></svg>
                        Packages
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"></path><path fill="#fff" d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></path></svg>
                        Offers
                    </Link>
                </li>
            </ul>
        </div>
    )
}
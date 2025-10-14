"use client"
import { useModalStore } from "@/store/modalStore"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ChangePass from "./ChangePass"
import { useEffect } from "react"

export default function DashBoard(){
    const openPassChange = useModalStore((state) => state.openPassChange)
    const pathname = usePathname()
    const profilePage = pathname.startsWith('/profile')
    const orderPage = pathname.startsWith('/order')
    const wishlistPage = pathname.startsWith('/wishlist')
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

    return(
        <>
            <div className="aside-left card-body">
            <div className="aside-left-wrap">
                <div className="profile-col">
                <div className="ico">
                    <Image src="/assets/images/dashboard/profile_img.svg" alt="Profile Image" width="70" height="70"></Image>
                </div>
                <p className="wlcm">Welcome</p>
                <p className="name-usr">Deepak Chauhan</p>
                <div className="usr-email">
                    <Link href="mailto:info@uniformbucket.com">info@uniformbucket.com</Link>
                    <div className="fig"><Image src="/assets/icon/tick-white.svg" alt="Approved" width="12" height="12"></Image></div>
                </div>
                <div className="usr-email">
                    <Link href="tel:+919953750281">+91 - 9953750281</Link>
                    <div className="fig"><Image src="/assets/icon/tick-white.svg" alt="Approved" width="12" height="12"></Image></div>
                </div>
                </div>
                <div className="nav-col">
                <ul>
                    <li>
                    <Link className={profilePage ? "active" : ""} href="/profile">
                        My Profile
                    </Link>
                    </li>
                    <li>
                    <Link className={orderPage ? "active" : ""} href="/order">Orders</Link>
                    </li>
                    <li>
                    <Link className={wishlistPage ? "active" : ""} href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                    <button className="" onClick={openPassChange}>Change Password</button>
                    </li>
                    <li>
                    <Link className="" href="/">Logout</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <ChangePass />
        </>
    )
}
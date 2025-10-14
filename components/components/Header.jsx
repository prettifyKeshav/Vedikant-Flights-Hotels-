"use client"
import Image from "next/image"
import Link from "next/link"
import "../styles/header/header.css"
import { useEffect, useState } from "react"
import { useModalStore } from '../store/modalStore';
import { usePathname } from "next/navigation";

export default function Header(){
    const openSearch = useModalStore((state) => state.openSearch);
    const openHam = useModalStore((state) => state.openHam);
    const openLogin = useModalStore((state) => state.openLogin)
    const [headerFixed, setHeaderFixed] = useState(false)
    const pathname = usePathname()
    const isProductListingPage = pathname.startsWith('/product-listing')
    const isProductDetailPage = pathname.startsWith('/product-detail')
    const isProfilePage = pathname.startsWith('/profile')
    const isOrderPage = pathname.startsWith('/order')
    const isWishlistPage = pathname.startsWith('/wishlist')
    const isBlogsPage = pathname.startsWith('/blogs')
    const isFaqPage = pathname.startsWith('/faqs')
    const isPayOnlinePage = pathname.startsWith('/pay-online')
    const headerFill = isProductListingPage || isProductDetailPage || isProfilePage || isOrderPage || isWishlistPage || isBlogsPage || isFaqPage || isPayOnlinePage
    useEffect(() => {
        let dropdownLi = document.querySelectorAll('.hasDropdown')
        let overlay = document.querySelector('.overlay2')

        dropdownLi.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.classList.add('active');
                overlay.classList.add('is-open')

                dropdownLi.forEach(item => {
                    const hoverItem = item.querySelector('.hasHover')
                    if (hoverItem) {
                        hoverItem.style.color = 'rgba(255, 255, 255, 0.6980392157)'
                    }
                })

                const currentHover = this.querySelector('.hasHover')
                if(currentHover) {
                    currentHover.style.color = '#fff';
                }
            })
            dropdown.addEventListener('mouseleave', function(){
                this.classList.remove('active')
                overlay.classList.remove('is-open')

                dropdownLi.forEach(item => {
                    const hoverItem = item.querySelector('.hasHover')
                    if(hoverItem) {
                        hoverItem.style.color = '#fff';
                    }
                })
            })
        })
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return(
        <>
            <header className={`${headerFill ? "header-fill" : ""} ${headerFixed ? "header-fixed" : ""}`}>
                <div className="header-wrapper container">
                    <div className="colA">
                        <Link href="/">
                            <Image src="/logo.svg" width="219" height="30" alt="Logo" className="sm-none"></Image>
                            <Image src="/logo_ub.svg" width="50" height="30" alt="Logo" className="sm-block"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="navlist">
                            <li className="hasDropdown">
                                <Link href="javascript:;" className="hasHover">Corporate</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">Hotel</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">SPA & Salon</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">Industrial</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">Security</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">Hospital</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;" className="hasHover">By Profession</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="colC">
                        <ul className="call_action">
                            <li onClick={openSearch}><button><img src="/assets/icon/search-white.svg" alt="Search Icon" /></button></li>
                            <li className="myAccount" onClick={openLogin}><Link href=""><img src="/assets/icon/user-white.svg" alt="User Icon" /></Link>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><Link href="javascript:;">My Account</Link></li>
                                        <li><Link href="javascript:;">My Order</Link></li>
                                        <li><Link href="javascript:;">My Wislist</Link></li>
                                        <li><Link href="javascript:;">Log Out</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href="/wishlist"><img src="/assets/icon/like-white.svg" alt="Wishlist Icon" /></Link>
                                <span className="dot-noti">5</span>
                            </li>
                            <li><Link href="/cart"><img src="/assets/icon/cart-white.svg" alt="Cart Icon" /></Link>
                                <span className="dot-noti">5</span>
                            </li>
                            <li>
                                <button type="button" className="ham_btn md-block" onClick={openHam}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="overlay2"></div>
        </>
    )
}
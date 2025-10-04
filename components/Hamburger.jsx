"use client"

import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const isOpen = useModalStore((state) => state.isHamOpen)
  const closeHam = useModalStore((state) => state.closeHam)
  const [activeIndex, setActiveIndex] = useState(null)

  const menuItems = [
    { id: 1, title: "About Us", href: "/about-us", subitems: [] },
    {
      id: 2,
      title: "Services",
      subitems: [
        { name: "Advanced SMT PCB Assembly", href: "/link1", icon: "/assets/icon/industry.svg" },
        { name: "Design for Manufacturing", href: "/service-detail" },
        { name: "Engineering and Design", href: "/service-detail" },
        { name: "Quick Turn Assembly Services", href: "/service-detail" },
        { name: "Mixed Technology Assembly", href: "/service-detail" },
        { name: "Buildings – Architecture", href: "/service-detail" },
        { name: "Assurance of Absolute Quality", href: "/service-detail" },
        { name: "One-Stop Source for All Services", href: "/service-detail" },
      ],
    },
    {
      id: 3,
      title: "Industries",
      subitems: [
        { name: "Military / Aerospace Industry", href: "/industries-detail" },
        { name: "Medical / Hospital Industry", href: "/industries-detail" },
        { name: "Lighting Industry", href: "/industries-detail" },
        { name: "Industrial / Commercial Equipment", href: "/industries-detail" },
        { name: "Utility & Telecommunication Industry", href: "/industries-detail" },
        { name: "Wireless and IoT Industry", href: "/industries-detail" },
      ]
    },
    { id: 4, title: "Capabilities", href: "/capabilities", subitems: [] },
    { id: 5, title: "Contact Us", href: "/contact-us", subitems: [] },
  ];

  const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle on click
  };
  return (
    <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
      <button className="close" onClick={closeHam}>
        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="model-body">
        <div className="icon">
          {/* <Image src="/assets/icon/ub_grad.svg" width="50" height="50" className="svg" alt="icon" /> */}
        </div>

        <nav>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li className="hamDropdown" key={item.id}>
                {item.subitems.length > 0 ? (
                  <div
                    className={`title ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleClick(index)}
                    role="button"
                    aria-expanded={activeIndex === index}
                    aria-controls={`dropdown-${item.id}`}
                  >
                    <h5>{item.title}</h5>
                    <img
                      src="/assets/icon/next-black.svg"
                      alt={`Toggle ${item.title} dropdown`}
                      className="svg arrow"
                    />
                  </div>
                ) : (
                  <Link href={item.href} className="single-menulist" onClick={closeHam}>
                    {item.title}
                  </Link>
                )}
                {item.subitems.length > 0 && (
                  <div
                    className={`dropdown-menu-ham ${activeIndex === index ? "active" : ""}`}
                    id={`dropdown-${item.id}`}
                  >
                    <ul>
                      {item.subitems.map((sub, i) => (
                        <li key={i} className={i === 0 ? "pt-0" : ""}>
                          <Link href={sub.href} className="subcat-li-anchr" onClick={closeHam}>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="bottom-list">
          <div className="social-icons">
            <Link href="javascript:void(0)" target="_blank" title="Twitter">
              <Image src="assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Facebook">
              <Image src="assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Instagram">
              <Image src="assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Linkedin">
              <Image src="assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            {/* <Link href="javascript:void(0)" target="_blank" title="Whatsapp">
              <Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

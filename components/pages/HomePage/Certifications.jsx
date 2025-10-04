"use client"

import React from 'react'
import CustomSlider from '@/components/CustomSlider'
import Link from 'next/link'

const Certifications = () => {

    const CertificationsSlider = [
        {
            image: "/assets/images/home/certifications/1.png",
            alternate: "Certification One",
        },
        {
            image: "/assets/images/home/certifications/2.png",
            alternate: "Certification Two",
        },
        {
            image: "/assets/images/home/certifications/3.png",
            alternate: "Certification Three",
        },
        {
            image: "/assets/images/home/certifications/4.png",
            alternate: "Certification four",
        },
        {
            image: "/assets/images/home/certifications/5.png",
            alternate: "Certification five",
        },
        {
            image: "/assets/images/home/certifications/6.png",
            alternate: "Certification six",
        },
    ];

    return (
        <>
            <section>
                <div className="home-secD" data-animate="fade-up">
                    <div className="container">
                        <div className="heading text-center">
                            <h2>Certifications</h2>
                        </div>

                        <div className="content">
                            <p>Flextron Circuit Assembly does it by the book, and we have the accreditation to prove it. Working with companies that comply to international standards reduces the risk of errors and makes your own traceability easier.</p>
                            <Link href="/standards-certifications" className="bottom-btn">
                                <span>Read More</span>
                            </Link>
                        </div>

                        <CustomSlider
                            items={CertificationsSlider}
                            slidesPerView={5}
                            space={20}
                            autoplay={true}
                            loop={true}
                            showContent={false}
                            breakpoints={{
                                0: { slidesPerView: 2.1 },
                                540: { slidesPerView: 4 },
                                991: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certifications
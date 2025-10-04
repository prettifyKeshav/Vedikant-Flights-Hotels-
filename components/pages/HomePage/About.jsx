"use client"
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useModalStore } from "@/store/modalStore";

const About = () => {
    const openVideo = useModalStore((state) => state.openVideo)

    return (
        <>
            <section>
                <div className="home-secB sec-pad">
                    <div className="container" data-animate="fade-up">
                        <div className="heading text-center">
                            <h2>about us</h2>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="bg">
                            <figure>
                                <video playsInline autoPlay muted loop width="100%" height="100%">
                                    <source src="assets/video/home-sec-b-banner.mp4" type="video/mp4" />
                                </video>
                            </figure>
                            <div className="banner-wrapper">
                                <div className="container-fluid">
                                    <div className="heading" data-animate="fade-up">
                                        <h3>Flextron Circuit Assembly</h3>
                                        <p>Are you building a product that requires a reliable, high quality electronic circuit assembly or box-build? If so, Flextron is your one-stop source for product realization, build, test, and ultimate success. We’re specialists in rigid and flexible Printed Circuit Board Assemblies (PCBAs) of all types and technologies</p>
                                        <Link href="/about-us" className="bottom-btn">
                                            Read More
                                        </Link>
                                    </div>
                                    <div className="right-wrapper" data-animate="fade-up">
                                        <Image src="assets/logo-white.svg" width={37} height={37} alt="Flextron white logo"></Image>
                                        <div className="year">
                                            <span>20+ Years</span>
                                            <p>Years of Excellence</p>
                                        </div>
                                        <div className="play-button" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z">
                                            <button type="button" className="play-btn"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Banner
                        videoSrc="assets/video/home-sec-b-banner.mp4"
                        h3tag="Flextron Circuit Assembly"
                        description="Are you building a product that requires a reliable, high quality electronic circuit assembly or box-build? If so, Flextron is your one-stop source for product realization, build, test, and ultimate success. We’re specialists in rigid and flexible Printed Circuit Board Assemblies (PCBAs) of all types and technologies"
                        buttonText="Read More"
                        buttonLink="/about"
                        imageAlt="x-icon"
                        imageSrc="assets/logo-white.svg"
                    /> */}
                </div>
            </section>
        </>
    )
}

export default About
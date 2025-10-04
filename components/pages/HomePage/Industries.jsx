"use client"

import React from 'react'
import Link from 'next/link'

const Industries_Data = [
    {
        id: 1,
        image: "assets/images/home/industries/1.jpg",
        title: "Military / Aerospace Industry",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
    {
        id: 2,
        image: "assets/images/home/industries/2.jpg",
        title: "Medical / Hospital Industry",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
    {
        id: 3,
        image: "assets/images/home/industries/3.jpg",
        title: "Lighting Industry",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
    {
        id: 4,
        image: "assets/images/home/industries/4.jpg",
        title: "Industrial Equipment",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
    {
        id: 5,
        image: "assets/images/home/industries/5.jpg",
        title: "Telecommunication Industry",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
    {
        id: 6,
        image: "assets/images/home/industries/6.jpg",
        title: "Wireless and IoT Industry",
        desc: "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    },
];

const Industries = () => {
    return (
        <section>
            <div className="home-secC">
                <div className="heading text-center" data-animate="fade-up">
                    <h2>Industries We Serve</h2>
                </div>

                <div className="grid-box" data-animate="fade-up">
                    {Industries_Data.map((arr) => (
                        <div className="col" key={arr.id}>
                            <figure>
                                <img src={arr.image} alt={arr.title} />
                                <figcaption>
                                    <div className="content">
                                        <h5>{arr.title}</h5>
                                        <p>{arr.desc}</p>
                                        <Link href="/industries-detail" className="bottom-btn">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industries

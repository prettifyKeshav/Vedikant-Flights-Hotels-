"use client";
import { useState, useRef } from "react";

export default function AccordionPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "What is Next.js?",
            description:
                "Next.js is a React framework for building fast, server-rendered and static web applications.",
        },
        {
            title: "How does the accordion animation work?",
            description:
                "It uses CSS transitions on max-height and a React ref to calculate the content height dynamically.",
        },
        {
            title: "Can I style it?",
            description:
                "Yes! You can fully customize the accordion using CSS or Tailwind if you prefer.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "50px auto" }}>

            {items.map((item, index) => {
                const contentRef = useRef(null);
                const isOpen = openIndex === index;

                return (
                    <div key={index} className={`accordion ${isOpen ? "open" : ""}`}>
                        <button
                            className="accordion-header" onClick={() => toggleAccordion(index)}>
                            <span className="accordion-title">{item.title}</span>
                            <span className={`accordion-icon ${isOpen ? "rotate" : ""}`} > ⌄ </span>
                        </button>

                        <div ref={contentRef} className="accordion-content" style={isOpen ? { maxHeight: contentRef.current?.scrollHeight + "px" } : { maxHeight: "0px" }} >
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

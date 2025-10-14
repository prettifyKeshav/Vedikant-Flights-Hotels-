"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home_SectionC = () => {
  const [activeTab, setActiveTab] = useState("domestic");

  const sectionData = {
    section: {
      name: "home-secC",
      heading: {
        title: "Top Selling Travel Destinations",
        description:
          "Explore the world’s favorite destinations that top every traveler’s list year after year.",
      },
      destinations: [
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/1.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Himachal",
          },
          name: "Himachal",
          price: "₹ 12,002",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/2.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Kerala",
          },
          name: "Kerala",
          price: "₹ 15,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/3.jpg",
            width: 280,
            height: 462,
            alt: "Top Selling Rajasthan",
          },
          name: "Rajasthan",
          price: "₹ 18,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/4.jpg",
            width: 432,
            height: 222,
            alt: "Top Selling Goa",
          },
          name: "Goa",
          price: "₹ 10,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/5.jpg",
            width: 432,
            height: 222,
            alt: "Top Selling Uttarakhand",
          },
          name: "Uttarakhand",
          price: "₹ 14,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/6.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Kashmir",
          },
          name: "Kashmir",
          price: "₹ 20,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/7.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Andaman",
          },
          name: "Andaman",
          price: "₹ 25,000",
          priceLabel: "Starting Price",
          category: "domestic",
        },

        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/7.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Maldives",
          },
          name: "Maldives",
          price: "$ 500",
          priceLabel: "Starting Price",
          category: "international",
        },
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/7.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling Dubai",
          },
          name: "Dubai",
          price: "$ 600",
          priceLabel: "Starting Price",
          category: "international",
        },
      ],
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="home-secC">
        <div className="container">
          <div className="heading">
            <div className="col">
              <h2>Top Selling Travel Destinations</h2>
              <p>Explore the world’s favorite destinations that top every traveler’s list year after year.</p>
            </div>

            <ul className="col tab-nav">
              <li
                className={activeTab === "domestic" ? "active" : ""}
                data-tab="domestic"
                onClick={() => handleTabClick("domestic")}
              >
                Domestic
              </li>
              <li
                className={activeTab === "international" ? "active" : ""}
                data-tab="international"
                onClick={() => handleTabClick("international")}
              >
                International
              </li>
            </ul>
          </div>

          <div className="tab-nav-content">
            <div
              className={`tabs ${activeTab === "domestic" ? "active" : ""}`}
              data-tab="domestic"
            >
              <div className="grid-box">
                {sectionData.section.destinations
                  .filter((destination) => destination.category === "domestic")
                  .map((destination, index) => (
                    <Link href={destination.link} className="col" key={index}>
                      <Image
                        src={destination.image.src}
                        width={destination.image.width}
                        height={destination.image.height}
                        alt={destination.image.alt}
                      />
                      <figcaption>
                        <h4>{destination.name}</h4>
                        <p>
                          {destination.price} <span>{destination.priceLabel}</span>
                        </p>
                      </figcaption>
                    </Link>
                  ))}
              </div>
            </div>

            <div
              className={`tabs ${activeTab === "international" ? "active" : ""}`}
              data-tab="international"
            >
              <div className="grid-box">
                {sectionData.section.destinations
                  .filter((destination) => destination.category === "international")
                  .map((destination, index) => (
                    <Link href={destination.link} className="col" key={index}>
                      <Image
                        src={destination.image.src}
                        width={destination.image.width}
                        height={destination.image.height}
                        alt={destination.image.alt}
                      />
                      <figcaption>
                        <h4>{destination.name}</h4>
                        <p>
                          {destination.price} <span>{destination.priceLabel}</span>
                        </p>
                      </figcaption>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_SectionC;
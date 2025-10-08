"use client";
import Image from "next/image";
import Link from "next/link";

const Home_SectionC = () => {
  const sectionData = {
    section: {
      name: "home-secC",
      heading: {
        title: "Top Selling Travel Destinations",
        description:
          "Explore the world’s favorite destinations that top every traveler’s list year after year.",
        tabs: [
          { name: "Domestic", active: true },
          { name: "International", active: false },
        ],
      },

      destinations: [
        {
          link: "/",
          image: {
            src: "/assets/images/home/Top-Selling/1.jpg",
            width: 205,
            height: 219,
            alt: "Top Selling 1",
          },
          name: "Himachal",
          price: "₹ 12,002",
          priceLabel: "Starting Price",
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
        },
      ],
    },
  };

  return (
    <>
      <div className="home-secC">
        <div className="container">
          <div className="heading">
            <div className="col">
              <h2>{sectionData.section.heading.title}</h2>
              <p>{sectionData.section.heading.description}</p>
            </div>

            <ul className="col tab-nav">
              {sectionData.section.heading.tabs.map((tab, index) => (
                <li key={index} className={tab.active ? "active" : ""}>
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-nav-content">
            <div className="grid-box">
              {sectionData.section.destinations.map((destination, index) => (
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
    </>
  );
};

export default Home_SectionC;

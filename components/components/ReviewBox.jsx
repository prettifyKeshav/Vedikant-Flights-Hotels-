import Image from "next/image";

export default function ReviewBox({ imgSrc, name, desc, time }) {
  return (
    <div className="review_box">
      <figure>
        <Image
          src={imgSrc}
          alt="Testimony Image"
          width="67"
          height="67"
        ></Image>
      </figure>
      <figcaption>
        <h6 className="name">{name}</h6>
        <ul className="review_stars">
          <li data-value="1" className="first">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#000"
              />
            </svg>
          </li>
          <li data-value="2" className="second">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#000"
              />
            </svg>
          </li>
          <li data-value="3" className="third">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#000"
              />
            </svg>
          </li>
          <li data-value="4" className="fourth">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#000"
              />
            </svg>
          </li>
          <li data-value="5" className="fifth">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                fill="#000"
              />
            </svg>
          </li>
        </ul>
        <p>
          {desc}
        </p>
        <time>{time}</time>
      </figcaption>
    </div>
  );
}

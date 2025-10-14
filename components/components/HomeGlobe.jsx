import Image from "next/image";
import "../styles/component/component.css"

export default function HomeGlobe({ classname="" }) {
  return (
    <div className={`home-secB sec-pad ${classname}`}>
      <div className="container">
        <div className="video">
          <video
            src="/assets/video/globe.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="heading">
          <h2>Across Countries. Beyond Expectations.</h2>
        </div>
        <div className="flags_wrapper grid">
          <figure>
            <Image
              src="/assets/images/home/flag1.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>India</p>
          </figure>
          <figure>
            <Image
              src="/assets/images/home/flag2.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>Usa</p>
          </figure>
          <figure>
            <Image
              src="/assets/images/home/flag3.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>Uk</p>
          </figure>
          <figure>
            <Image
              src="/assets/images/home/flag4.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>Uae</p>
          </figure>
          <figure>
            <Image
              src="/assets/images/home/flag5.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>German</p>
          </figure>
          <figure>
            <Image
              src="/assets/images/home/flag6.png"
              width="35"
              height="23"
              alt="Flag Image"
            ></Image>
            <p>China</p>
          </figure>
        </div>
      </div>
    </div>
  );
}

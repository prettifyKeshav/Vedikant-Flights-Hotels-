import Image from "next/image"
import Link from "next/link"
export default function CategoryItem({imgSrc, videoSrc, heading, subHeading}){
    return(
        <div className="category_col item-md">
            <figure>
                <Image src={imgSrc} alt="Category Image" width="420" height="449"></Image>
                <video src={videoSrc} autoPlay muted loop playsInline></video>
            </figure>
            <figcaption>
                <h6>{heading}</h6>
                <p>{subHeading}</p>
                <div className="btn_wrapper">
                    <Link href="javascript:;" className="btn">Shop Now</Link>
                </div>
            </figcaption>
        </div>
    )
}
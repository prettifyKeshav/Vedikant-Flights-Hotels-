import Image from "next/image"
import Link from "next/link"
export default function ProductCol({imgSrc, proName, price}){
    return(
        <div className="product_col">
            <figure>
                <Image src={imgSrc} width="344" height="439" alt="Product Image"></Image>
            </figure>
            <figcaption>
                <h6>{proName}</h6>
                <p>{price}</p>
            </figcaption>
            <div className="hoverItem">
                <button className="enquireBtn">Enquire Now</button>
                <Link href="javascript:;" className="viewDetails">View Details</Link>
            </div>
            <button className="wislist">
                <Image src="/assets/icon/like-black.svg" alt="Wislist Icon" width="20" height="20"></Image>
            </button>
        </div>
    )
}
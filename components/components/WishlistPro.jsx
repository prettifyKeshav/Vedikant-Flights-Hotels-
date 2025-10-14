import Image from "next/image"
import Link from "next/link"
import "../styles/dashboard/dashboard.css"

const sizeData = [
    { size: "XS", quant: 50},
    { size: "S", quant: 50},
    { size: "M", quant: 50},
    { size: "L", quant: 50},
]

export default function WishlistPro({ imgSrc, proName, price }){
    return(
        <div className="wishlist_item">
            <figure>
                <Image src={imgSrc} width="160" height='210' alt="Wishlist Product"></Image>
            </figure>
            <figcaption>
                <p className="pro_name">{proName}</p>
                <p className="price">{price}</p>
                <div className="sizes_wrap">
                    {sizeData?.map((item, index) => (
                        <div className="size" key={index}>
                            <span>{item.size}</span>
                            <p className="quant">{item.quant}</p>
                        </div>
                    ))}
                </div>
                <Link className="btn black_fill" href="/cart">Move to Bag</Link>
            </figcaption>
            <div className="cancelBtn">
                <Image src="/assets/icon/cancel.svg" width="30" height="30" alt="Cancel Icon"></Image>
            </div>
        </div>
    )
}
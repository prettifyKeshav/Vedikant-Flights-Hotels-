import Image from "next/image"
import Link from "next/link"

export default function BlogsItem({ imgSrc, date, title, link="" }){
    return(
        <Link href={link} className="blogs_col">
            <figure>
                <Image src={imgSrc} width="410" height="266" alt="Blogs Image" />
            </figure>
            <figcaption>
                <p className="date">{date}</p>
                <p className="title">{title}</p>
            </figcaption>
        </Link>
    )
}
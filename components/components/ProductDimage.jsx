"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductDimage({ zoomImg, mainImg }){
     useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
    }, []);
    return(
        <div className="pro-img">
            <Link href={zoomImg} data-fancybox="gallery">
                <Image src={mainImg} alt="Product Image" width="336" height="448"></Image>
            </Link>
        </div>
    )
}
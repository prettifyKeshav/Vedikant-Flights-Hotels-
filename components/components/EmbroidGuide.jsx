import { useModalStore } from "@/store/modalStore";
import Image from "next/image";

export default function EmbroidGuide(){
    const isOpen = useModalStore((state) => state.isEmbroideryGuideOpen)
    const closeEmbroideryGuide = useModalStore((state) => state.closeEmbroideryGuide)
    return(
        <div className={`model embroidery-pop guide ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeEmbroideryGuide}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <h6>Embroidery Guide</h6>
                <Image src='/assets/images/embroidery-guide.jpg' width="800" height="400" alt="Embroidery Guide" />
            </div>
        </div>
    )
}
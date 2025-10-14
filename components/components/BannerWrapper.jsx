import Image from "next/image"
import "../styles/component/component.css"

export default function BannerWrapper({ classname="", videoSrc, poster, heading, desc, scrollto }){
    return(
        <div className={`banner video-banner ${classname}`}>
            <div className="bg">
                <video src={videoSrc} poster={poster} autoPlay muted loop playsInline></video>
                <div className="banner-wrapper">
                    <div className="content container heading">
                        <div className="icon">
                            <Image src="/assets/images/about/about_icon.svg" width="70" height="70" alt="About Icon"></Image>
                        </div>
                        <h1>{heading}</h1>
                        <p>{desc}</p>
                        <button type="button" onClick={scrollto} className="scroll_down"><Image src="/assets/images/about/scroll_down.svg" width="35" height="35" alt="Scroll Down Button"></Image></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
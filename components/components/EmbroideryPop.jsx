import { useModalStore } from "@/store/modalStore"
import { useState } from "react"


export default function EmbroideryPop({ markAsAdded }){
    const isOpen = useModalStore((state) => state.isEmbroideryOpen)
    const closeEmbroidery = useModalStore((state) => state.closeEmbroidery)
    const openEmbroideryGuide = useModalStore((state) => state.openEmbroideryGuide)
    const [filename, setFileName] = useState(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setFileName(file.name);
        } else {
        setFileName("Choose file");
        }
    };
    return(
        <div className={`model embroidery-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeEmbroidery}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <h6>Embroidery Logo File</h6>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={handleFileChange} />
                    <p>{filename ? filename : "Choose file"}</p>
                </div>
                <p><strong>₹150.00</strong> per embroidery Logo charge in a sample order.</p>
                <p><strong>₹75.00</strong> per Embroidery Logo charge if order 5+</p>
                <p><strong>₹50.00</strong> per Embroidery Logo charge if order 20+.</p>
                <div className="btn_wrapper">
                    <button type="button" className="btn black_fill" onClick={() => {
                        if(filename) {
                            markAsAdded()
                            closeEmbroidery()
                        } else {
                            alert("Please select a file before proceeding.")
                        }
                    }}>Add</button>
                    <button type="button" className="embroidery" onClick={openEmbroideryGuide}>Embroidery Guide</button>
                </div>
            </div>
        </div>
    )
}
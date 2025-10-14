"use client"
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import MySelect from "./MySelect";

const options_Category = [
  { value: "Option 1", label: "Option 1"},
  { value: "Option 2", label: "Option 2"},
  { value: "Option 3", label: "Option 3"},
  { value: "Option 4", label: "Option 4"},
]

export default function EnquirePop() {
    const isOpen = useModalStore((state) => state.isEnquireOpen)
    const closeEnquire = useModalStore((state) => state.closeEnquire)
    const [category, setCategory] = useState(null)
    useEffect(() => {
        const inputBoxes = document.querySelectorAll('.form-control');

        const handleFocus = function () {
            this.closest('.form-group')?.classList.add('active');
            this.classList.add('valid');
        };

        const handleBlur = function () {
            const hasValue = this.value.trim() !== '';
            
            if (!hasValue) {
                this.closest('.form-group')?.classList.remove('active');
                this.classList.remove('valid');
            }
        };

        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', handleFocus);
            inputBox.addEventListener('blur', handleBlur);
        });

        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', handleFocus);
                inputBox.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div className={`model enquire-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeEnquire}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <div className="title">
                    <div className="icon">
                        <Image src="/assets/icon/ub_grad.svg" width="68" height="64" alt="Logo"></Image>
                    </div>
                    <h2>Let’s Talk Business</h2>
                    <p>Connect with our experts. Schedule a callback and get personalized assistance.</p>
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Name*</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Company Name</label>
                    </div>
                    <MySelect 
                        id="category-select"
                        placeholder="Category*"
                        options={options_Category}
                        selectedValue={category}
                        onValueChange={setCategory}
                    />
                    <div className="form-group">
                        <input type="tel" className="form-control" />
                        <label htmlFor="">Phone</label>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" />
                        <label htmlFor="">No. of uniform required</label>
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" className="form-control"></textarea>
                        <label htmlFor="">Description</label>
                    </div>
                    <button className="btn black_round">Submit Now</button>
                </div>
            </div>
        </div>
    )
}
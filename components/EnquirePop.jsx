"use client"
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";
import MySelect from "./MySelect";

const options_Services = [
  { value: "Option 1", label: "Option 1"},
  { value: "Option 2", label: "Option 2"},
  { value: "Option 3", label: "Option 3"},
  { value: "Option 4", label: "Option 4"},
]

export default function EnquirePop() {
    const isOpen = useModalStore((state) => state.isEnquireOpen)
    const closeEnquire = useModalStore((state) => state.closeEnquire)
    const [services, setServices] = useState(null)
    
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
                    <h2>Become an Agent</h2>
                    {/* <p>Connect with our experts. Schedule a callback and get personalized assistance.</p> */}
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Name*</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" />
                        <label htmlFor="">Phone</label>
                    </div>
                    <MySelect 
                        id="category-select"
                        placeholder="Services*"
                        options={options_Services}
                        selectedValue={services}
                        onValueChange={setServices}
                    />
                    <div className="form-group">
                        <textarea name="" id="" className="form-control"></textarea>
                        <label htmlFor="">Message</label>
                    </div>
                    <button className="btn2 ">Submit Now</button>
                </div>
            </div>
        </div>
    )
}
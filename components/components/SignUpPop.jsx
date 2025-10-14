import { useModalStore } from "@/store/modalStore"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

export default function SignUpPop({length = 4, onComplete}){
    const isOpen = useModalStore((state) => state.isSignUpOpen)
    const closeSignUp = useModalStore((state) => state.closeSignUp)
    const openLogin = useModalStore((state) => state.openLogin)
    const inputRefs = useRef([])

    const handleOtp = (e, index) => {
        const input = e.target;
        const value = input.value;
        const isValidInput = value.match(/[0-9a-z]/i);

        input.value = "";
        input.value = isValidInput ? value[0] : "";

        if(isValidInput && index < length -1){
            inputRefs.current[index + 1]?.focus();
        }
        if(e.key === "Backspace" && index > 0 && !input.value){
            inputRefs.current[index - 1]?.focus()
        }

        if(index === length - 1 && isValidInput){
            const otp = inputRefs.current.map((ref) => ref.value).join("");
            onComplete?.(otp);
        }
    }

    const handlePaste = (e)=> {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData("text");
        for (let i = 0; i < length; i++) {
        if (pasted[i]?.match(/[0-9a-z]/i)) {
            inputRefs.current[i].value = pasted[i];
            inputRefs.current[i].dispatchEvent(new Event("keyup", { bubbles: true }));
            }
        }
    }

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);
    return(
        <div className={`model signUp-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" type="button" onClick={closeSignUp}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <div className="title">
                    <div className="icon">
                        <Image src="/assets/icon/ub_grad.svg" width="68" height="64" alt="Logo"></Image>
                    </div>
                    <h2>Sign Up</h2>
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" name="text"  className="form-control" />
                        <label htmlFor="text">Email Address</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="form-group">
                        <input type="text" name="password"  className="form-control" />
                        <label htmlFor="password">Password</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="form-group">
                        <input type="number" name="mobile"  className="form-control" />
                        <label htmlFor="mobile">Mobile No.</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="resend_code">
                        <div className="upper_resend">
                            <p>OTP Sent to 9998887771</p>
                            <button className="resend">Resend code</button>
                        </div>
                        <div className="otp_verify" onPaste={handlePaste}>
                            {[...Array(length)].map((_, index) => (
                                <input
                                key={index}
                                type="text"
                                maxLength={1}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onKeyUp={(e) => handleOtp(e, index)}
                                />
                            ))}
                            <button type="button" className="verify_btn">Verify</button>
                            <p className="verify">Invalid</p>
                        </div>
                    </div>
                    <div className="sbmt-btn-div">
                        <button type="button" className="btn black_round">Sign Up</button>
                    </div>
                </div>
                <div className="split-sec"><p>OR</p></div>
                <div className="btm-social-wrp">
                    <Link href="javascript:void(0);" className="btn google-btn">

                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M16.7919 8.24996H9.15023V10.525H14.5752C14.3002 13.7 11.6586 15.0583 9.15856 15.0583C5.96689 15.0583 3.16689 12.5416 3.16689 8.99996C3.16689 5.58329 5.83356 2.94163 9.16689 2.94163C11.7419 2.94163 13.2502 4.58329 13.2502 4.58329L14.8336 2.93329C14.8336 2.93329 12.8002 0.666626 9.08356 0.666626C4.35023 0.666626 0.691895 4.66663 0.691895 8.99996C0.691895 13.2083 4.13356 17.3333 9.20856 17.3333C13.6669 17.3333 16.9169 14.275 16.9169 9.75829C16.9169 8.79996 16.7919 8.24996 16.7919 8.24996Z" fill="#000"></path>

                        </svg>

                        Google

                    </Link>
                    <Link href="javascript:void(0);" className="btn facebook-btn">

                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.16683 10.25H8.25016L9.0835 6.91663H6.16683V5.24996C6.16683 4.39163 6.16683 3.58329 7.8335 3.58329H9.0835V0.783293C8.81183 0.747459 7.786 0.666626 6.70266 0.666626C4.44016 0.666626 2.8335 2.04746 2.8335 4.58329V6.91663H0.333496V10.25H2.8335V17.3333H6.16683V10.25Z" fill="#000"></path>

                        </svg>

                        Facebook

                    </Link>
                </div>
                <p className="non_member">
                    Already have an account? <button type="button" className="signup" onClick={openLogin}>Sign in now</button>
                </p>
            </div>
        </div>
    )
}
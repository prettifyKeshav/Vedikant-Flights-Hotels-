import { useModalStore } from "@/store/modalStore"
import "../styles/component/component.css"

export default function ChangePass(){
    const isPassChangeOpen = useModalStore((state) => state.isPassChangeOpen)
    const closePassChange = useModalStore((state) => state.closePassChange)
    return(
        <div className={`model changePass-pop ${isPassChangeOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closePassChange}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <h6>Change Password</h6>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" name="old_pass" className="form-control" />
                        <label htmlFor="old_pass">Old Password</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="form-group">
                        <input type="text" name="new_pass" className="form-control" />
                        <label htmlFor="new_pass">New Password</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="form-group">
                        <input type="text" name="confirm_new_pass" className="form-control" />
                        <label htmlFor="confirm_new_pass">Confirm New Password</label>
                        <p className="verify">Invalid</p>
                    </div>
                    <div className="btn_wrapper">
                        <button type="button" className="btn black_fill w-full">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
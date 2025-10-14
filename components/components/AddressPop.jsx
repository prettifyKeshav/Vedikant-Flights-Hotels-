import { useModalStore } from "@/store/modalStore"
import "../styles/component/component.css"

export default function AddressPop(){
    const isOpen = useModalStore((state) => state.isAddressOpen)
    const closeAddress = useModalStore((state) => state.closeAddress)
    return(
        <div className={`model address-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeAddress}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <h3>Add new address</h3>
                <div className="form form-grid">
                    <h6>Contact Details</h6>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="company_name" className="form-control" />
                        <label htmlFor="company_name">Company Name</label>
                    </div>
                    <div className="form-group">
                        <input type="tel" name="phone_no" className="form-control" />
                        <label htmlFor="phone_no">Phone</label>
                    </div>
                    <h6>Address</h6>
                    <div className="form-group">
                        <input type="number" name="pincode" className="form-control" />
                        <label htmlFor="pincode">Pin Code</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" className="form-control" />
                        <label htmlFor="address">Address ( House No, Building, Street, Area)</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="locality" className="form-control" />
                        <label htmlFor="locality">Locality/ Town</label>
                    </div>
                    <div className="double-group">
                        <div className="form-group">
                            <input type="text" name="city" className="form-control" />
                            <label htmlFor="city">City / District</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="state" className="form-control" />
                            <label htmlFor="state">State</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="gstn" className="form-control" />
                        <label htmlFor="gstn">GST No. (optional)</label>
                    </div>
                    <div className="form-group">
                        <input type="tel" name="phone_no" className="form-control" />
                        <label htmlFor="phone_no">Phone</label>
                    </div>
                </div>
                <div className="disclaimer">
                    <div className="check-box">
                        <input type="checkbox" name="default" />
                        <div className="in-bx"></div>
                    </div>
                    <p>Make this my default address</p>
                </div>
                <button type="button" className="btn black_fill w-full">Add Address</button>
            </div>
        </div>
    )
}
import { useState } from "react";
import Image from "next/image";

const FlightCard = ({ flight }) => {
    // const [open, setOpen] = useState(false);

    return (
        <div className="flight-card">
            <figure>
                <Image src="/assets/images/Flight-Listing/discount-image.PNG" width={881} height={85} alt="discount image" ></Image>
            </figure>

            <div className="selected-filter">
                <div className="flex-box">
                    <h4>Flights from New Delhi to Bengaluru</h4>
                    <div>Sort by</div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="grid-box">
                    <div className="col">
                        <figure>
                            <Image src="/assets/images/Flight-Listing/flight-image.png" width={44} height={44} alt="flight image"></Image>
                        </figure>
                        <div className="content">
                            <h5>IndiGo</h5>
                            <p>6E 2562</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>07:50</h5>
                            <p>New Delhi</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h4><span>02</span> h <span>35</span> m</h4>
                            <p>Non stop</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>10:25</h5>
                            <p>Bengaluru</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <h5>₹ 6,150</h5>
                            <p>per adult</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="selct-btn-div">
                            <button type="button" className="btn">SELECT</button>
                        </div>
                    </div>
                </div>
                <div className="accordian">
                    <div className="accordian-title">
                        <div className="grid-box">
                            <div className="col">
                                <p>Refundable</p>
                                <span className="point"></span>
                                <p>Free Meals</p>
                            </div>
                            <div className="col">
                                <p>Get Flat ₹ 315 OFF using code <strong>#DIWALI</strong></p>
                            </div>
                            <div className="col">
                                <p>VIEW FLIGHT DETAILS</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FlightCard;

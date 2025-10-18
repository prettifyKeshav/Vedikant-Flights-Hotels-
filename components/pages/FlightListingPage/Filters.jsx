'use client';
import { useState, useRef } from "react";

const Filters = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    return (
        <div className="filters-wrapper">
            <div className="head">
                <h3>Filters</h3>
                <p>Clear all</p>
            </div>

            <div className="fliter-dropdown">

                {/* Accordion 1 */}
                <div className={`accordian ${open1 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen1(!open1)}>
                        <h4>Stops From New Delhi</h4>
                        <div className="col"></div>
                    </div>

                    <div
                        className="accordian-description"
                        ref={ref1}
                        style={
                            open1
                                ? { maxHeight: ref1.current?.scrollHeight + "px" }
                                : { maxHeight: "0px" }
                        }
                    >
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="nonStop1" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="nonStop1">Non Stop</label>
                                </div>
                                <div className="price"><p>₹5797</p></div>
                            </li>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="oneStop1" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="oneStop1">1 Stop</label>
                                </div>
                                <div className="price"><p>₹6,038</p></div>
                            </li>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="twoStop1" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="twoStop1">2 Stop</label>
                                </div>
                                <div className="price"><p>₹10,238</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Accordion 2 */}
                <div className={`accordian ${open2 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen2(!open2)}>
                        <h4>Airlines</h4>
                        <div className="col"></div>
                    </div>

                    <div
                        className="accordian-description"
                        ref={ref2}
                        style={
                            open2
                                ? { maxHeight: ref2.current?.scrollHeight + "px" }
                                : { maxHeight: "0px" }
                        }
                    >
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="airIndia" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="airIndia">Air India</label>
                                </div>
                                <div className="price"><p>₹8,245</p></div>
                            </li>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="indigo" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="indigo">IndiGo</label>
                                </div>
                                <div className="price"><p>₹7,997</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Accordion 3 */}
                <div className={`accordian ${open3 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen3(!open3)}>
                        <h4>Departure Time</h4>
                        <div className="col"></div>
                    </div>

                    <div
                        className="accordian-description"
                        ref={ref3}
                        style={
                            open3
                                ? { maxHeight: ref3.current?.scrollHeight + "px" }
                                : { maxHeight: "0px" }
                        }
                    >
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="morning" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="morning">Morning (5AM - 12PM)</label>
                                </div>
                                <div className="price"><p>₹6,450</p></div>
                            </li>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="evening" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="evening">Evening (5PM - 11PM)</label>
                                </div>
                                <div className="price"><p>₹7,210</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Filters;

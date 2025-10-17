'use client';
import { useState } from "react";

const Filters = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filters-wrapper">
            <div className="head">
                <h3>Filters</h3>
                <p>Clear all</p>
            </div>

            <div className="fliter-dropdown">
                <div className="accordian">
                    <div className="accordian-title">
                        <h4>Stops From New Delhi</h4>
                        <div className="col"></div>
                    </div>
                    <div className="accordian-description">
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="nonStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="nonStop">Non Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹5797</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="oneStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="oneStop">1 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹6,038</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="twoStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="twoStop">2 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹10,238</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="accordian">
                    <div className="accordian-title">
                        <h4>Stops From New Delhi</h4>
                        <div className="col"></div>
                    </div>
                    <div className="accordian-description">
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="nonStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="nonStop">Non Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹5797</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="oneStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="oneStop">1 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹6,038</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="twoStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="twoStop">2 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹10,238</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="accordian">
                    <div className="accordian-title">
                        <h4>Stops From New Delhi</h4>
                        <div className="col"></div>
                    </div>
                    <div className="accordian-description">
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="nonStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="nonStop">Non Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹5797</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="oneStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="oneStop">1 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹6,038</p>
                                </div>
                            </li>

                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="twoStop" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="twoStop">2 Stop</label>
                                </div>
                                <div className="price">
                                    <p>₹10,238</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Filters;

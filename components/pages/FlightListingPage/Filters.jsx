'use client';
import { useState, useRef, useEffect } from "react";
import { Range } from "react-range";

const Filters = () => {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);

    const MIN = 0;
    const MAX = 10000;
    const [price, setPrice] = useState([0, 10000]);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    useEffect(() => {
        if (ref1.current && open1) {
            ref1.current.style.maxHeight = ref1.current.scrollHeight + "px";
        }
        if (ref2.current && open2) {
            ref2.current.style.maxHeight = ref2.current.scrollHeight + "px";
        }
        if (ref3.current && open3) {
            ref3.current.style.maxHeight = ref3.current.scrollHeight + "px";
        }
    }, [open1, open2, open3]);

    const handlePriceRange = (range) => {
        setPrice(range)
    }

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
                        style={{
                            maxHeight: open1
                                ? ref1.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
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
                        style={{
                            maxHeight: open2
                                ? ref2.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
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
                        <h4>Price</h4>
                        <div className="col"></div>
                    </div>

                    <div
                        className="accordian-description"
                        ref={ref3}
                        style={{
                            maxHeight: open3
                                ? ref3.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
                    >
                        <div className="flight-price-range">
                            <div className="flight-range-slider-range">
                                <Range
                                    step={100}
                                    min={MIN}
                                    max={MAX}
                                    values={price}
                                    onChange={handlePriceRange}
                                    renderTrack={({ props, children }) => (
                                        <div {...props} style={{ ...props.style, height: '3px', background: '#611BA7', margin: '30px 10px 15px 10px', borderRadius: '5px' }}>
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => {
                                        const { key, ...rest } = props;
                                        return (
                                            <div key={key} {...rest} style={{ ...props.style, height: '20px', width: '20px', backgroundColor: '#611BA7', borderRadius: '50%', outline: 'none' }} />
                                        )
                                    }}
                                />
                            </div>
                            <div className="price-range-input-wrap">
                                <div className="price-range-input">
                                    <span>&#8377;</span>
                                    {price[0]}
                                </div>
                                <div className="price-range-input">
                                    <span>&#8377;</span>
                                    {price[1]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Filters;

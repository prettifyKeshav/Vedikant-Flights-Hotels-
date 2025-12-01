'use client';
import { useState, useRef, useEffect } from "react";
import { Range } from "react-range";
import Link from "next/link";


const Filters = () => {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);

    const [appliedFilter, setappliedFilter] = useState(false);

    const handleAppliedFilter = () => {
        setappliedFilter(!appliedFilter);
        if (!appliedFilter) {
            alert("Checked!");
        }
    };

    const MIN = 0;
    const MAX = 10000;
    const [price, setPrice] = useState([0, 10000]);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
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
        if (ref4.current && open4) {
            ref4.current.style.maxHeight = ref4.current.scrollHeight + "px";
        }
        if (ref5.current && open5) {
            ref5.current.style.maxHeight = ref5.current.scrollHeight + "px";
        }
        if (ref6.current && open6) {
            ref6.current.style.maxHeight = ref6.current.scrollHeight + "px";
        }
    }, [open1, open2, open3, open5, open6]);

    const handlePriceRange = (range) => {
        setPrice(range)
    }

    return (
        <div className="filters-wrapper">
            <div className="head">
                <h3>Price Details</h3>
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
                                    <input type="checkbox" checked={appliedFilter} onChange={handleAppliedFilter} id="nonStop1" />
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

                {/* Accordion 4 */}
                <div className={`accordian ${open4 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen4(!open4)}>
                        <h4>Departure Airports</h4>
                        <div className="col"></div>
                    </div>

                    <div
                        className="accordian-description"
                        ref={ref4}
                        style={{
                            maxHeight: open4
                                ? ref4.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
                    >
                        <ul>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="hindonAirport" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="hindonAirport">Hindon Airport</label>
                                </div>
                                <div className="price"><p>₹5,959</p></div>
                            </li>
                            <li className="flex-box">
                                <div className="form-group">
                                    <input type="checkbox" id="igiAairport" />
                                    <span className="checkmark"></span>
                                    <label htmlFor="igiAairport">IGI Aairport</label>
                                </div>
                                <div className="price"><p>₹7037</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Accordion 5 */}
                <div className={`accordian ${open5 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen5(!open5)}>
                        <h4>Departure From New Delhi</h4>
                        <div className="col"></div>
                    </div>
                    <div
                        className="accordian-description"
                        ref={ref5}
                        style={{
                            maxHeight: open5
                                ? ref5.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
                    >
                        <div className="grid-box">
                            <Link href="" className="grid-box-item active">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#666666" d="M240 152h-40.45a74 74 0 0 0 .45-8a72 72 0 0 0-144 0a74 74 0 0 0 .45 8H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-168-8a56 56 0 1 1 111.41 8H72.59a56 56 0 0 1-.59-8m144 56a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M72.84 43.58a8 8 0 0 1 14.32-7.16l8 16a8 8 0 0 1-14.32 7.16Zm-56 48.84a8 8 0 0 1 10.74-3.57l16 8a8 8 0 0 1-7.16 14.31l-16-8a8 8 0 0 1-3.58-10.74m192 15.16a8 8 0 0 1 3.58-10.73l16-8a8 8 0 1 1 7.16 14.31l-16 8a8 8 0 0 1-10.74-3.58m-48-55.16l8-16a8 8 0 0 1 14.32 7.16l-8 16a8 8 0 1 1-14.32-7.16" /></svg>
                                </figure>
                                <p>Before 6 am</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14l-1.414-1.414M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10" /></svg>
                                </figure>
                                <p>6 am - 12 pm</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#666666" d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152M56 104a40 40 0 0 1 72.54-23.24a76.26 76.26 0 0 0-35.62 40a52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 56 104m108 104H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208" /></svg>
                                </figure>
                                <p>12 pm - 6 pm</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" /></svg>
                                </figure>
                                <p>After 6 pm</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Accordion 6 */}
                <div className={`accordian ${open6 ? "open" : ""}`}>
                    <div className="accordian-title" onClick={() => setOpen6(!open6)}>
                        <h4>Arrival at Bengaluru</h4>
                        <div className="col"></div>
                    </div>
                    <div
                        className="accordian-description"
                        ref={ref6}
                        style={{
                            maxHeight: open6
                                ? ref6.current?.scrollHeight + "px"
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
                    >
                        <div className="grid-box">
                            <Link href="" className="grid-box-item active">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#666666" d="M240 152h-40.45a74 74 0 0 0 .45-8a72 72 0 0 0-144 0a74 74 0 0 0 .45 8H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-168-8a56 56 0 1 1 111.41 8H72.59a56 56 0 0 1-.59-8m144 56a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M72.84 43.58a8 8 0 0 1 14.32-7.16l8 16a8 8 0 0 1-14.32 7.16Zm-56 48.84a8 8 0 0 1 10.74-3.57l16 8a8 8 0 0 1-7.16 14.31l-16-8a8 8 0 0 1-3.58-10.74m192 15.16a8 8 0 0 1 3.58-10.73l16-8a8 8 0 1 1 7.16 14.31l-16 8a8 8 0 0 1-10.74-3.58m-48-55.16l8-16a8 8 0 0 1 14.32 7.16l-8 16a8 8 0 1 1-14.32-7.16" /></svg>
                                </figure>
                                <p>Before 6 am</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14l-1.414-1.414M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10" /></svg>
                                </figure>
                                <p>6 am - 12 pm</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#666666" d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152M56 104a40 40 0 0 1 72.54-23.24a76.26 76.26 0 0 0-35.62 40a52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 56 104m108 104H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208" /></svg>
                                </figure>
                                <p>12 pm - 6 pm</p>
                            </Link>
                            <Link href="" className="grid-box-item">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" /></svg>
                                </figure>
                                <p>After 6 pm</p>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Filters;

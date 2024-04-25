import { useState } from 'react';
import './Qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    return (
        <section className="container">

            <div className="section-title">
                <h3>Qualification</h3>
                <h5>My personal journey</h5>
            </div>

            <div className="qualification__container">

                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button  qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon" />
                        <span>Education</span>
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button  qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon" />
                        <span>Job Experience</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    {/*========== QUALIFICATION CONTENT 1=============*/}
                    <div
                        className={toggleState === 1 ? "qualification__content qualification__active" : "qualification__content"}
                    >
                        {/*========== QUALIFICATION 1=============*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React & NextJS Developer</h3>
                                <span className="qualification__subtitle">
                                  Institute : Ostad.app
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    4-Nov-2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                        </div>
                        {/*========== QUALIFICATION 2=============*/}
                        <div className="qualification__data">
                            <div />
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                            <div>
                                <h3 className="qualification__title">MERN Stack Developer</h3>
                                <span className="qualification__subtitle">
                                 Institute :  eShikhon.com
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    28-Feb-2023
                                </div>
                            </div>
                        </div>
                        {/*========== QUALIFICATION 3=============*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Advanced Web Designer</h3>
                                <span className="qualification__subtitle">Institute :  Instructory.net</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    10-Jun-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                        </div>
                        {/*========== QUALIFICATION 4=============*/}
                        <div className="qualification__data">
                            <div />
                            <div>
                                <span className="qualification__rounder" />
                                {/* <span class="qualification__line"></span> */}
                            </div>
                            <div>
                                <h3 className="qualification__title">BSC in CSE</h3>
                                <span className="qualification__subtitle">Institute : Asian University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    2014 - 2017
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*========== QUALIFICATION CONTENT 2=============*/}
                    <div className={toggleState === 2 ? "qualification__content qualification__active" : "qualification__content"}>
                        {/*========== QUALIFICATION 1=============*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Content Moderator</h3>
                                <span className="qualification__subtitle">
                                Genex Infosys Limited{" "}
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    Running
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                        </div>
                        {/*========== QUALIFICATION 2=============*/}
                        <div className="qualification__data">
                            <div />
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                            <div>
                                <h3 className="qualification__title">Project coordinator</h3>
                                <span className="qualification__subtitle">
                                  Japan Tobacco International
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                        {/*========== QUALIFICATION 3=============*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT Officer</h3>
                                <span className="qualification__subtitle">Dhaka Tobacco industries Ltd</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    2018 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                {/* <span class="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Qualification;









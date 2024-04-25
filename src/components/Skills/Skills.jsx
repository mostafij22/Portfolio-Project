import { useState } from 'react';
import './Skills.css';


const Skills = () => {

    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);


    return (
        <section className="container" id="skills">
            
            <div className="section-title">
                <h3>Skills</h3>
                <h5>My technical level</h5>
            </div>

            <div className="skills__container ">
                <div>
                    {/*========== SKILLS 1===========*/}
                    <div className={open ? "skills__content skills__open" : "skills__content"}>
                        <div className="skills__header" onClick={() => setOpen(!open)}>
                            <i className="uil uil-brackets-curly skills__icon" />
                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow " />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*========== SKILLS 2===========*/}
                    <div className={open2 ? "skills__content skills__close" : "skills__content"}>
                        <div className="skills__header" onClick={() => setOpen2(!open2)}>
                            <i className="uil uil-swatchbook skills__icon" />
                            <div>
                                <h1 className="skills__title">Designer</h1>
                                <span className="skills__subtitle">More than 5 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Bootstrap v5</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Tailwind CSS</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sketch" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__photoshop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/*========== SKILLS 3===========*/}
                    
                    <div className={open1 ? "skills__content skills__close" : "skills__content"}>
                        <div className="skills__header" onClick={() => setOpen1(!open1)}>
                            <i className="uil uil-server-network skills__icon" />
                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className="skills__subtitle">More than 2 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Next JS</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express JS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__number">55%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;
















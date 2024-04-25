import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import './Home.css'
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/About/AboutMe';
import Footer from '../../components/Footer/Footer';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
    return (
        <>
            <Navbar/>
            <section className=" container">
                <div className="hero__content">
                    <div className="hero__social">
                        <Link to="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FiGithub className='hero__social-icon' />
                        </Link>
                        <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='hero__social-icon' />
                        </Link>
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className='hero__social-icon' />
                        </Link>
                    </div>

                    <div className="hero__data">
                        <h4>Hello, I&apos;M <span>Mostafij</span> </h4>
                        <h2 className="type-effect">
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    color: 'green',
                                    fontWeight: 700,
                                    fontSize: '2rem',
                                }}
                                startDelay={4000}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'I Am Full Stack Developer ',
                                    'React JS Developer ',
                                    'Next JS Developer ',
                                    'Full Stack Mern Developer',
                                ]}
                                multiTextDelay={3000}
                                typeSpeed={30}
                                multiTextLoop
                            />
                        </h2>
                        <p className="hero__description">
                            High level experience in web design and development knowledge,
                            producing quality work. <br />
                            Knock me for building application with front-end and back-end operation.
                        </p>
                        <button>
                            <a href="/contact" className="hero-btn">
                                Contact Me
                                <i className="uil uil-message button__icon" />
                            </a>
                        </button>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-background"></div>
                    </div>
                </div>
            </section>
            <AboutMe />
            <Skills />
            <WorkExperience />
            <Footer />
        </>

    );
};

export default Home;












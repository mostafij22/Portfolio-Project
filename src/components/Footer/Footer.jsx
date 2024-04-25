import { Link } from 'react-router-dom';
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        //when the scroll is higher than 560 viewport height, add the show-scroll class 
        if (this.scrollY >= 300) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)


    return (
        <>
            <footer className='footer'>
                <div className="footer_container container">
                    <div>
                        <h1 className="footer_title">Mostafij</h1>
                        <span>Full Stact Developer</span>
                        <h3>MERN</h3>
                        <h3>React JS and Next JS</h3>
                    </div>

                    <div className='footer_link'>
                        <h2 className='footer_link_title'>Important Link</h2>
                        <ul className="footer_links">
                            <li>
                                <Link to="/">Services</Link>
                            </li>
                            <li>
                                <Link to="/project">Project</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer_socials">
                        <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <FiGithub className='hero__social-icon' />
                        </Link>
                        <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <FaLinkedinIn className='hero__social-icon' />
                        </Link>
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <FaFacebookF className='hero__social-icon' />
                        </Link>
                        <p className='cell_no'>Call me <i className="fa-solid fa-phone-volume"></i> : +8801926484274</p>
                    </div>
                </div>

                <p className="footer_copy">&#169;mostafij.com. All right reserved</p>

            </footer>


            {/* ===== Scroll Top====== */}

            <a href="#" className="scrollup" id="scroll-up">
                <i className="fa-solid fa-arrow-up scrollup_icon"></i>
            </a>

        </>
    );
};

export default Footer;










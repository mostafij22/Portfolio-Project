import './About.css'
import Footer from '../../components/Footer/Footer';
import Qualification from '../../components/Qualification/Qualification';
import AboutSkills from '../../components/AboutSkills/AboutSkills';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';



const About = () => {

    const navigate = useNavigate();

    return (

        <>
            <Navbar/>
            <section className="container" id='about'>

                <div className="section-title">
                    <h3>About Me</h3>
                    <h5>Get to know</h5>
                </div>

                <div className="aboutme_content">

                    <div className=" aboutme-image">
                        <img src="/aboutme.jpg" alt="About Image" />
                    </div>

                    <div className="about-content-right">
                        <div>
                            <h4><span>Web Designer and  Developer</span></h4>
                            <p>I am a freelance website designer and developer from dhaka, Bangladesh. I create professional website.</p>
                            <p>I am a passionate Web Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, ES6, React JS and Next JS frameworks. As a Developer, I have a strong grasp of REST API, JWT, Node.js, Express.js, Mongoose, MongoDB, MySQL and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadcn UI, Prisma, Next.js, and TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</p>
                        </div>
                        <div className="about-cards">
                            <article className='about_card'>
                                <i className="fa-sharp fa-solid fa-award"></i>
                                <h5>Experience</h5>
                                <small>3+ Years Working</small>
                            </article>
                            <article className='about_card'>
                                <i className="fa-solid fa-users-line"></i>
                                <h5>Clients</h5>
                                <small>30+ WorldWide</small>
                            </article>
                            <article className='about_card'>
                                <i className="fa-regular fa-folder-open"></i>
                                <h5>Projects</h5>
                                <small>50+ Completed</small>
                            </article>
                        </div>
                        <button className='about-btn' onClick={() => { navigate('/contact') }}>Let&#39;Talk</button>
                    </div>
                </div>

            </section>
            <AboutSkills />
            <Qualification />
            <Footer />
        </>

    );
};

export default About;

















import './AboutMe.css'
import myImg from '../../assets/image/aboutme.jpg'
import { Link } from 'react-router-dom';


const AboutMe = () => {
    return (
        <section className="container" id='about'>

            <div className="section-title">
                <h3>About Me</h3>
                <h5>Get to know</h5>
            </div>

            <div className="about_content">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={myImg} alt="About Image" />
                    </div>
                </div>
              
                <div className="about-content-right">
                    <h4><span>Hi</span>👋 I am Mostafijur Rahman</h4>
                    <p>I enjoy playing around the JavaScript ecosystem. working on both front-end and back-end. Besides, I am always striving to learn and develop new skills and become a best problem solver.</p>
                    <p>I am a passionate web designer and developer. My main preference is Frontend web development and I like React Framework Next Js. because I find out two in one , Banck end and Frontend in one framework.</p>

                    <div className='about-btn-wrap'>
                        <Link to="/about"><button className='about-btn-left'>Read More</button></Link>
                        <Link to="/project"><button className='about-btn-right'>My Work</button></Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;













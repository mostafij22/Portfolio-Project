import './Projects.css'
import project1 from '../../assets/image/project1.jpg';
import project2 from '../../assets/image/project2.jpg'
import project3 from '../../assets/image/project3.jpg'
import project4 from '../../assets/image/project4.jpg'
import project5 from '../../assets/image/project5.jpg'
import project6 from '../../assets/image/project6.jpg'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Portfolio = () => {
    return (
        <>
            <Navbar/>
            <section className='container' id='portfolio'>

                <div className="section-title">
                    <h3>Project</h3>
                    <h5>My Recent Project</h5>
                </div>

                <div className="portfolio-container">

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project1} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project2} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project3} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project4} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project5} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={project6} alt="" />
                        </div>
                        <h3>New Project up coming soon</h3>
                        <div className="portfolio-item-cta">
                            <Link to="https://github.com" className='btn git-btn' target='_blank' rel="noopener noreferrer">Github</Link>
                            <Link to="https://github.com" className='btn live-btn' target='_blank' rel="noopener noreferrer">Live Project</Link>
                        </div>
                    </article>

                </div>
            </section>
            <Footer />
        </>

    );
};
export default Portfolio;




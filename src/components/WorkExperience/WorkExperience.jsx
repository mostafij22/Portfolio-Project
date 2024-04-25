import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { useRef } from 'react';
import Slider from 'react-slick';


const WorkExperience = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <>
            <div className="section-title" id='service'>
                <h3>Services</h3>
                <h5>My Services</h5>
            </div>
            <section className="experience-container container">
                <div className="experience-content">

                    <div className="arrow-right" onClick={slideRight}>
                        <span className='material-symbols-outlined'>chevron_right</span>
                    </div>

                    <div className="arrow-left" onClick={slideLeft}>
                        <span className='material-symbols-outlined'>chevron_left</span>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {
                            WORK_EXPERIENCE.map((item) => (
                                <ExperienceCard key={item.title} details={item} />
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default WorkExperience;






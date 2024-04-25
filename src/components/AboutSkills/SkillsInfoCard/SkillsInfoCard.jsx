import './SkillsInfoCard.css'

const SkillsInfoCard = ({heading, skills}) => {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>

            <div className="skills-info-content">
                {
                    skills.map((item, index)=> (
                        <div key={`skill_${index}`}>
                            <div className="skill-info">
                                <li>{item.skill}</li>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SkillsInfoCard;






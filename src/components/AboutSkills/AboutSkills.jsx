import { useState } from 'react';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import './AboutSkills.css'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const AboutSkills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <>
            <div className="section-title">
                <h3>Technical Proficiency</h3>
                <h5>My Proficiency</h5>
            </div>


            <section className="skills-container container">       

                <div className="skills-content">
                    <div className="skills">
                        {
                            SKILLS.map((item) => (
                                <SkillCard
                                    key={item.titile}
                                    title={item.titile}
                                    isActive={selectedSkill.titile === item.titile}
                                    onClick={() => {
                                        handleSelectSkill(item)
                                    }}
                                />
                            ))
                        }
                    </div>

                    <div className="skills-info">
                        <SkillsInfoCard
                            heading={selectedSkill.titile}
                            skills={selectedSkill.skills}
                        />
                    </div>
                </div>

            </section>
        </>
    );
};

export default AboutSkills;










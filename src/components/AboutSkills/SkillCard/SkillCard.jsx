import './SkillCard.css'

const SkillCard = ({title, isActive, onClick}) => {
    return (
        <div className={`skills-card ${isActive ? "active" : " "}`} onClick={()=> onClick()}>
            <span>{title}</span>
        </div>
    );
};

export default SkillCard;



  





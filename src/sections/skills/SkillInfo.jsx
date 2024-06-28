import React from 'react';
import './Skills.css';

function SkillInfoCards({ heading, skills }) {
  return (
    <div className='SkillInfoCards-container'>
      <h2>{heading}</h2>

      <div className='skills-info-content'>
        {skills.map((item, index) => (
        <React.Fragment key={`skill_${index}`}>
          <div className='skill-info'>
            <p>{item.skill}</p>
            <p className='percentage'>{item.percentage}</p>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress' style={{width: item.percentage}}></div>
          </div>
        </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SkillInfoCards;

import React from 'react';
import './Skills.css';

function SkillCards({ data_title, data_icon, isActive, onClick }) {
  return (
    <div className='SkillCards-container'>
      <div className={`skill-card ${isActive ? 'active' : ''}`} onClick={onClick}>
        <div className='skill-card-icon'>
          <i>{data_icon}</i>
        </div>
        <span className='text'>{data_title}</span>
      </div>
    </div>
  );
}

export default SkillCards;
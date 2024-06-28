import React, { useState } from 'react';
import './Skills.css';
import SkillCards from './SkillCard';
import { SKILLS } from './skillData';
import SkillInfoCards from './SkillInfo';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const skillSelectedHandler = (data_item) => {
    console.log('Selected Skill:',data_item);
    setSelectedSkill(data_item);
  };

  return (
    <section className='skills-container container' id='skills'>
      <h2>Acquired Skills</h2>
      <div className='skills-contact'>
        <div className='skills'>
          {SKILLS.map((data_item) => (
            <SkillCards 
              key={data_item.data_title}
              data_title={data_item.data_title}
              data_icon={data_item.data_icon}
              isActive={selectedSkill.title === data_item.data_title}
              onClick={() => skillSelectedHandler(data_item)}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillInfoCards 
            heading={selectedSkill.data_title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

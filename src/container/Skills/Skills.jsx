import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  let countWork = 0;

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills <span>&</span> Experience</h2>

      <div className="app__skills-container">

        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="app__skills-exp">

          {/*----------------------BLOCK: Creating Div Experience----------------------*/}
          {experiences.map((experience) => {
            countWork++;
            if (countWork === 1) {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">

                  {experience.works.map((work, workIndex) => {
                    return (

                      <React.Fragment key={`Fragment-${workIndex}`}>

                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                          key={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        {/*----------------------BLOCK: Tooltip----------------------
                                        🚧!creates 2 work experiences!🚧
                        
                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                          scrollHide={true}
                        >
                          {work.Desc}
                          
                          <button onClick={() => { ReactTooltip.hide() }}></button>
                        </ReactTooltip>
                        */}

                      </React.Fragment>
                    )
                  })}

                </motion.div>
              </motion.div>
            )}
            else return console.log('');
          })}
          {/*----------------------BLOCK-END: Creating Div Experience----------------------*/}
        </div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
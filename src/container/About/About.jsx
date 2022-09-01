import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const certUrl = [
    'https://www.sololearn.com/certificates/course/en/227651/1024/landscape/png', 
    'https://www.sololearn.com/Certificate/CT-UKKX7YYH/png', 
    'https://www.coursera.org/account/accomplishments/verify/56PUHWBK7TFK'
  ]

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      });
  }, []);

  return (
    <>
      <h2 className="head-text padding-top"><span>I Know that</span> Good Design <br /><span>means</span>  Good Business</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {

        return (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <a className="a-cert" href={`${certUrl[index]}`}>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            </a>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )})}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'certificates',
  'app__whitebg',
);

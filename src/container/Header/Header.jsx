import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import Banner from './Banner/Banner';
import './Header.scss';


const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => (
    <div className="app__header app__flex">
        
        {/*----------------------BLOCK----------------------
                          💭Welcome Bubbles💭
        
        <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
        >

            <div className="app__header-badge">
            */}

                {/*---NestedBlock---
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className="p-main">Hello, I am</p>
                        <h1 className="head-text head-text-overwrite">Juan</h1>
                    </div>
                </div>
                */}

                {/*---NestedBlock---
                <div className="tag-cmp app__flex">
                    <p className="p-main">Web Developer</p>
                    <p className="p-main">Freelancer</p>
                </div>

            </div>
        </motion.div>
        

        {/*----------------------BLOCK----------------------
                          📷Middle Picture📷
        */}
            <Banner />
        {/*----------------------BLOCK----------------------
        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
        */}
             {/*---NestedMap---
            {[images.flutter, images.redux, images.sass].map((circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="profile_bg" />
                </div>
            ))}

        </motion.div>
                */}

    </div>
);

export default AppWrap(Header, 'home');





















/*
  <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
        >

            <img src={images.profile} alt="profile_bg" />

            <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
            />

        </motion.div>              
*/
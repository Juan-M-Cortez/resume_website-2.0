import { Section1, Section2, Section3 } from '../Sidebar/Sections';
import React, { useEffect, useState, useRef } from 'react';
import Separation from '../Sidebar/Separation/Separation';
import SocialMedia from '../SocialMedia';
import './MobileBar.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const MobileBar = () => {
    const [navHeight, setNavHeight] = useState(0)
    const ref = useRef(0);

    useEffect(() => {
        ref.current = document.getElementsByClassName('app__navbar')[0].clientHeight;
        setNavHeight(ref.current)
    }, []);

    return (
        <div className='app-mobilebar' style={{ paddingTop: navHeight }}>
            <Section1 />
            <Section2 />
            <Separation />
            <Section3 />
            <SocialMedia />
        </div>
    );
};

export default AppWrap(
    MotionWrap(MobileBar, 'app__mobilebar'),
    'profile',
    'app__primarybg',
);
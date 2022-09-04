import Me from '../../../assets/me.jpg';
import React from 'react';
import './Section1.scss';
import { Container } from 'reactstrap';

const Section1 = () => {
    return (
        <div className='appbar__section1'>

            <div className='appbar___section1-div'>

                <div className='appbar__section1-div-img'>
                    <img src={Me} alt='profile_pic' className='img-pic' />
                    <div className='pulse-div'></div>
                    <div className='pulse-color'></div>
                </div>
                <div className='testing1'>
                    <h5 className='appbar__section1-h5'>Juan Cortez</h5>
                    <p className='appbar__section1-p p-sub'>Front-end Developer</p>
                    <p className='appbar__section1-p p-sub'>React JS Designer</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;

/*
<div className='sidebar__section1'>

                <div className='sidebar__section1-profilepic'>
                    <img alt='profile_pic' className='sidebar__section1-img' />
                    <div className='sidebar__section1-pulse'></div>
                    <div className='sidebar__section1-pulsecolor'></div>
                </div>

                <h5 className='sidebar__section1-h5'>Juan Cortez</h5>
                <p className='sidebar__section1-p1'>Front-end Developer</p>
                <p className='sidebar__section1-p2'>Ui/UX Designer</p>
        </div>
*/
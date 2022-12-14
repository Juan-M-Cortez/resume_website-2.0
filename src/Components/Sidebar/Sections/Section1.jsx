import Me from '../../../assets/me.jpg';
import MeTwo from '../../../assets/me2.png';
import React from 'react';
import './Section1.scss';

const Section1 = () => {
    return (
        <div className='appbar__section1'>

            <div className='appbar___section1-div'>

                {/*-----🖼️Profile Pic🖼️-----*/}
                <div className='appbar__section1-div-img'>
                    <img src={MeTwo} alt='profile_pic' className='img-pic' />
                    <div className='pulse-alignment-div'>
                        <span className='pulse-div'></span>
                        <span className='pulse-color'></span>
                    </div>
                </div>

                <div className='testing1'>
                    <h5 className='appbar__section1-h5'>Juan Cortez</h5>
                    <p className='appbar__section1-p p-sub'>Front-end Developer</p>
                    <p className='appbar__section1-p p-sub'>React.Js / WordPress Developer</p>
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


        <div className='pulse-alignment-div'>
                        <span className='pulse-div'></span>
                        <span className='pulse-color'></span>
                    </div>
*/
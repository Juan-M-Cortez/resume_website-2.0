import React from 'react'

const Section1 = () => {
    return (
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
    )
}

export default Section1
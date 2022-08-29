import React from 'react';
import './Section3.scss';

const Section3 = () => {
    return (
        <div className='sidebar__section3'>

            <div className='part3-divH6-container'>
                <h6 className='part3-h6 p-main'>Laguages</h6>
            </div>
            
            <div className='part3-container'>

                <div className='svg-container'>
                    <div className='part3-svg-size'>
                        <svg className='part3-svg'>
                            <path d="m 85 50 a 8 8 0 0 0 -70 0 a 8 8 0 0 0 70 -1" className='part3-path' />
                        </svg>
                        <div className='part3-p'>100%</div>
                    </div>
                    <p className='p-main'>English</p>
                </div>

                <div className='svg-container'>
                    <div className='part3-svg-size'>
                        <svg className='part3-svg'>
                            <path d="m 85 50 a 8 8 0 0 0 -70 0 a 8 8 0 0 0 70 -1" className='part3-path' />
                        </svg>
                        <div className='part3-p'>100%</div>
                    </div>
                    <p className='p-main'>Spanish</p>
                </div>

                <div className='svg-container'>
                    <div className='part3-svg-size'>
                        <svg className='part3-svg'>
                            <path d="m 85 50 a 8 8 0 0 0 -70 0 a 8 8 0 0 0 70 -1" className='negative-path' />
                            <path d="m 85 50 a 8 8 0 0 0 -70 0 a 8 8 0 0 0 70 -1" className='part3-path path3' />
                        </svg>
                        <div className='part3-p'>25%</div>
                    </div>
                    <p className='p-main'>French</p>
                </div>

            </div>

        </div>
    );
};

export default Section3;
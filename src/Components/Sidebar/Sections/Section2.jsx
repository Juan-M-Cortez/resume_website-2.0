import React from 'react';
import './Section2.scss';

const Section2 = () => {
    return (
        <div className='appbar__section2'>
            <ul>
                <li className='appbar__section2-li'>
                    <p className='p-main'>Residence:</p>
                    <p className='p-sub'>United States</p>
                </li>
                <li className='appbar__section2-li'>
                    <p className='p-main'>City:</p>
                    <p className='p-sub'>Pasadena</p>
                </li>
                <li className='appbar__section2-li'>
                    <p className='p-main'>Age:</p>
                    <p className='p-sub'>34</p>
                </li>
                <div className='parts-div'/>            
            </ul>
        </div>
    );
};

export default Section2;

/*


*/
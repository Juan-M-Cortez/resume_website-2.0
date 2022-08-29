import React from 'react';
import './Section.scss';

const Section4 = () => {
    /* language and percent output container*/
    const languages = ['HTML', 'CSS', 'Javascript', 'Java', 'C++', 'C#'];
    const percent = ['90%', '80%', '95%', '80%', '80%', '90%'];

    /* declaring a function that maps trought the language [array] */
    /* assigning index elements trought the <span> elements values */
    function part4Display() {
        let list = languages.map((lang, index) => {
            return (
                <li className="part4-li" key={`part4-li-${index}`}>
                    <span>{lang}</span>
                    <span>{percent[index]}</span>
                    <svg className='part4-svg'>
                        <path d="M 0,0.86 L 250,0.86" className={`part4-inv-path${index}`}></path>
                        <path d="M 0,0.86 L 250,0.86" className={`part4-path${index}`}></path>
                    </svg>
                </li>
            );
        });
        return list.map(list => list);
    }

    return (
        <div className='part4'>
            <div className='part4-divider' />

            <div className='part4-divH6-container'>
                <h6 className='part4-h6'>Coding</h6>
            </div>

            <ul className="part4-ul">
                {part4Display()}
            </ul>

        </div>
  );
};

export default Section4;
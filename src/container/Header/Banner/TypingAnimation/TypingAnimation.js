import React, { useState } from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect'
import './TypingAnimation.css'

// Holds what the typing animation would type
// const typeSentences = [
//     'Welcome To My WebApp.',
//     '',
//     'Hello World',
// ];

function TypingAnimation() {
    // holds state of the current typing animation
    //const [sentences, setSetences] = useState('Welcome To My WebApp.');

    /*
    function getTransitionEndEventName() {
        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
         }
         console.log('document.body.style :', document.body.style);
         
        let bodyStyle = document.body.style;
        for(let transition in transitions) {
            console.log('bodyStyle[transition]: ', bodyStyle[transition]);
            if(bodyStyle[transition] === "") {
                return transitions[transition];
            } 
        }
      }
    */

    //const nextSentence = () => {
    //setSetences('hello World');
    //};


    return (
        <div className='typewriter'>

            {console.log('TYPEWRITER: ', <Typewriter />)}

            <div className='center-this-bitch'>
            
                <p className='typing-code'>{'<code>'}</p>
                <p>{'  '}</p>

                <Typewriter className='typewriter-component'
                    onInit={typewriter => {
                        <p>{'<'}</p>
                        typewriter
                            .typeString("Welcome To My Website")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Check It Out")
                            .start();
                    }}
                />


                <p className='typing-code'>{'<code>'}</p>
            </div>

        </div>
    )
}

export default TypingAnimation
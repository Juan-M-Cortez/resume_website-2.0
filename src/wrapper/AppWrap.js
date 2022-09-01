import React from 'react';
import { NavigationDots, SocialMedia, NavigationCollision } from '../Components';
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        {/* <SocialMedia /> */}

        <div className='app__wrapper app_flex'>
            <Component />
        </div>

        {/* <NavigationCollision /> */}
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;
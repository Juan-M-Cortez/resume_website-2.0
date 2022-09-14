import React, { useState } from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import TopThree from './TopThree/TopThree';
import Dates from './Dates/Dates';
import './Home.scss';

const Home = (props) => {
  const [indexDay, setIndexDay] = useState(9)
  const { imgURL, title, explanation, dates } = props;

  // 🗺️--allows us to navigate react router
  // through nested components within Routes--🗺️
  let navigate = useNavigate();

  //---------clickHandle pick a date---------
  const pickADate = (index) => {
    setIndexDay(index);
  }


  return (
    <section className='nasa__home'>
      <div className='nasa__home-banner'>
        <Banner imgURL={imgURL[indexDay]} title={title[indexDay]} explanation={explanation[indexDay]} />
        <div className='filler' />
      </div>
      <div className='nasa_home-topthree'>
        <Dates dates={dates} pickADate={pickADate} />
        <TopThree imgURL={imgURL} explanation={explanation} title={title} />
      </div>
    </section>
  );
};

export default Home;

/* BUTTON TO THE OTHER PAGE---------------
<NavLink active={true} onClick={() => { navigate("/SpaceObjects") }} >
          <Button color="primary" >Near Earth Objects</Button>
        </NavLink>
*/
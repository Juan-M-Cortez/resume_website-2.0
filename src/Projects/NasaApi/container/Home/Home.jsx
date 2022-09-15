import React, { useState } from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import TopThree from './TopThree/TopThree';
import Dates from './Dates/Dates';
import './Home.scss';

const initialVotes = { img1: 0, img2: 0, img3: 0 };
const recordedVotes = {};
let dateValidation = [];

const Home = (props) => {
  const [indexDay, setIndexDay] = useState(9)
  const [topt3Votes, setTop3Votes] = useState({ ...initialVotes })

  const { imgURL, title, explanation, dates } = props;

  // 🗺️--allows us to navigate react router
  // through nested components within Routes--🗺️
  let navigate = useNavigate();

  //---------clickHandle pick a date---------
  const pickADate = (index) => {
    setIndexDay(index);
  }

  //---------records all votes being process---------
  const voteRecorded = (date) => {
    let pass = dateValidation.filter(dateCheck => dateCheck === date)
   
    if (!dateValidation[0] || !pass[0]) {
      dateValidation.push(date);
      recordedVotes[date] = 1;

    } else {
      recordedVotes[date] += 1;
    }

    assignTopThree();

    console.log(recordedVotes);
  }

  const assignTopThree = () => {

    let exclude = [];

    for (const votes in recordedVotes) {

      console.log(`TESTING: ${votes}: ${recordedVotes[votes]}`);
    }
  }

  // const arrangeTopThree = () => {
  //   let exclude = [];

  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
      
  //   }

    // loop trough recordedVotes
    // check for the greates > int and assign it to a img1
    // check for the 2nd greates > (excluding the key that was assign to img1) assign it to img2
    // check for the 3rd greates > excluding 1st and 2nd keys



  


  return (
    <section className='nasa__home'>
      <div className='nasa__home-banner'>
        <Banner imgURL={imgURL[indexDay]} title={title[indexDay]} explanation={explanation[indexDay]} voteRecorded={voteRecorded} date={dates[indexDay]} />
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
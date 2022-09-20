import React, { useState } from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import TopThree from './TopThree/TopThree';
import Dates from './Dates/Dates';
import './Home.scss';

const initialVotes = { votes1: 0, votes2: 0, votes3: 0 };
const initialImgDate = { img1: '', img2: '', img3: '' };

const recordedVotes = {};
let dateValidation = [];

const Home = (props) => {
  const [indexDay, setIndexDay] = useState(9)
  const [top3Votes, setTop3Votes] = useState({ ...initialVotes })

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

    console.log('recordedVotes: ', recordedVotes);
  }

  //---------Assigns top 3---------
  const assignTopThree = () => {

    for (const votes in recordedVotes) {
      if (initialVotes.votes1 < 0) {
        initialVotes.votes1 = recordedVotes[votes];
        initialImgDate.img1 = votes;

      } else if (initialVotes.votes1 < recordedVotes[votes]) {
        initialVotes.votes1 = recordedVotes[votes];
        initialImgDate.img1 = votes;

      }
    }
    // console.log('initialImgDate: ', initialImgDate);
    // console.log('initialVotes: ', initialVotes);
  }

  return (
    <section className='nasa__home'>

      <div className='nasa__home-banner'>
        <Banner
          imgURL={imgURL[indexDay]}
          title={title[indexDay]}
          explanation={explanation[indexDay]}
          voteRecorded={voteRecorded}
          date={dates[indexDay]}
        />
        <div className='filler' />
      </div>

      <div className='nasa_home-topthree'>
        <Dates dates={dates} pickADate={pickADate} />
        <TopThree
          imgURL={imgURL}
          explanation={explanation}
          title={title}
          initialImgDate={initialImgDate}
        />
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
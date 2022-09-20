import SpaceObjects from './container/SpaceObjects/SpaceObjects';

import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavbarX from './components/Navbar/NavbarX';
import { TenDayList, TodaysDate } from './utilities';
import Footer from './components/Footer/Footer';
import Home from './container/Home/Home';
import axios from 'axios';
import './NasaApi.scss';

// TEST: Color for changing pages
const backgroundColor = {
    bgColorNEO: 'rgb(74 56 60)',
    bgColorH: '#282c34',
}

//--------counts page refresh--------
let count = 0;

// ---------is the number less the 10, if true concatinate a 0---------
function lessThenTen(num) {
    return num < 10 ? '0' + num : num.toString();
  }
  
  // ---------splits & filters today state into month/day---------
  /*---------MONTH FORMAT mm---------*/ 
  function monthFormat(today) {
    let month =
      today
        .split('', 7)
        .filter((num, index) => {
          return index === 6 || index === 7;
        })
        .join();
  
    month = lessThenTen(month);
    return month;
  }
  /*---------DAY FORMAT dd---------*/ 
  function dayFormat(today) {
    let day =
      today
        .split('')
        .filter((num, index) => {
          return index === 8 || index === 9;
        })
        .join('');
    day = lessThenTen(day);
    return day;
  }
  
  function NasaApi() {
    //  state will hold the api object
    const [apod, setApod] = useState({});
    // state will hold todays date
    const [today, setTodaty] = useState(TodaysDate())
    // will hold the top 3 img votes
    const [topPic, setTopPic] = useState({ pic1: 0, pic2: 0, pic3: 0 });
  
    //---------current date---------
    const mm = monthFormat(today);
    const dd = dayFormat(today);
    let yyyy = today.split('', 4).join('');
    // + concatenation + 
    let currentDate = yyyy + '-' + mm + '-' + dd;

    //---------10 days ago date---------
    // returns an {object} that holds the last 10 days 
    let tenDaysAgo = TenDayList(mm, dd);
    tenDaysAgo.day = lessThenTen(tenDaysAgo.day);
    // + concatenation + 
    let lastTenDate = yyyy + '-' + tenDaysAgo.month + '-' + tenDaysAgo.day;
  
    // Apod URL 
    const URL = `https://api.nasa.gov/planetary/apod?start_date=${lastTenDate}&end_date=${currentDate}&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`
  
    // grabing the current location of the subdomain
    const location = useLocation();
  
    const envColor = (location) => {
      let bgColor = (location === '/SpaceObjects' ?
        backgroundColor.bgColorNEO :
        backgroundColor.bgColorH);
      return bgColor;
    }
  
    useEffect(() => {
      axios.get(URL)
        .then(obj => {
          setApod(obj.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [URL])
  
    //---------sending to home---------
    let imgURLs = [];
    let explanations = [];
    let titles = [];
    let dates = [];
    if (apod[0]) {
      imgURLs = apod.map(obj => obj.url);
      explanations = apod.map(obj => obj.explanation);
      titles = apod.map(obj => obj.title);
      dates = apod.map(obj => obj.date);
    }
  
    //---------testing case---------
    ++count;
  
    return (
      <div className="nasa">
        <NavbarX location={location} />
  
        {/* STYLING THE PAGE */}
  
        <div className='nasa-header' style={{ backgroundColor: envColor(location.pathname) }}>
  
          <Routes>
            <Route path="/" exact={true} element={
                <Home
                  /* --PROPS-- */
                  imgURL={imgURLs}
                  explanation={explanations} 
                  title={titles}
                  dates={dates}
                  />
              } />
            <Route path="/SpaceObjects" element={<SpaceObjects />} />
          </Routes>
  
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default NasaApi;


  /*⚠️⚠️------BUG🐛🐛🐛🐛🐛🐛BUG------⚠️⚠️*/
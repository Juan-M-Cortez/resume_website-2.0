import { ThreeDotsWave } from '../../../utilities';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopThree.scss';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

const TopThree = (props) => {
  const [top3Votes, setTop3Votes] = useState({})
  const [img1Obj, setimg1Obj] = useState({})
  const [img2Obj, setImg2Obj] = useState({})
  const [img3Obj, setImg3Obj] = useState({})

  const { imgURL, title, explanation, initialImgDate } = props;

  const urlTopThree = `https://api.nasa.gov/planetary/apod?date=${initialImgDate.img1}&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`;

  console.log('TopThree url:', initialImgDate.img1);

  useEffect(() => {
    axios.get(urlTopThree)
      .then(obj => {
        console.log(obj);
      })
      .catch(err => {
        console.log('err', err);
      })
  }, [urlTopThree])


  return (
    <div className='nasa__topthree'>
      {/*-----------card1-----------*/}
      <Card
        body
        className="my-2 card-1"
        style={{
          width: '18rem',
          alignSelf: 'flex-start'
        }}
      >
        {!top3Votes.data ?
          <ThreeDotsWave /> :
          <img src={top3Votes.data.hdurl} alt="apod img" />
        }

        <CardTitle tag="h5" className='topthree-title'>
          {title[0]}
        </CardTitle>
        <CardText>
          {/* {explanation[0]} */}
        </CardText>
        <Button color="primary">
          Go somewhere
        </Button>
      </Card>
      {/*-----------card2-----------*/}
      <Card
        body
        className="text-center card-2"
        style={{
          width: '18rem'
        }}
      >

        {!imgURL[1] ?
          <ThreeDotsWave /> :
          <img src={imgURL[1]} alt="apod img" />
        }

        <CardTitle tag="h5" className='topthree-title'>
          {title[1]}
        </CardTitle>
        <CardText>
          {/* {explanation[1]} */}
        </CardText>
        <Button color="primary">
          Go somewhere
        </Button>
      </Card>
      {/*-----------card3-----------*/}
      <Card
        body
        className="text-end my-2 card-3"
        style={{
          width: '18rem'
        }}
      >

        {!imgURL[2] ?
          <ThreeDotsWave /> :
          <img src={imgURL[2]} alt="apod img" />
        }

        <CardTitle tag="h5" className='topthree-title'>
          {title[2]}
        </CardTitle>
        <CardText>
          {/* {explanation[2]} */}
        </CardText>
        <Button color="primary">
          Go somewhere
        </Button>
      </Card>

    </div>
  )
}

export default TopThree
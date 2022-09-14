import { ThreeDotsWave } from '../../../utilities';
import React from 'react';
import './TopThree.scss';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

const TopThree = (props) => {
  const { imgURL, title, explanation } = props;

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
        {!imgURL[0] ?
          <ThreeDotsWave /> :
          <img src={imgURL[0]} alt="apod img" />
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
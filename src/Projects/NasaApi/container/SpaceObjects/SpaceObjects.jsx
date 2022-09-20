import React from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './SpaceObjects.scss';

const SpaceObjects = () => {

  // See Home for description
  let navigate = useNavigate();

  return (
    <div>
      <NavItem className='app__spaceobjects'>

        <NavLink active={true} onClick={() => { navigate("/") }} className="app__home-navlink">
          <Button color="primary" >Home</Button>
        </NavLink>
        
      </NavItem>
    </div>
  )
}

export default SpaceObjects
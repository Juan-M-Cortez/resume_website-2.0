import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './NavbarX.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

let activeH = true;
let activeOB = false;

const NavbarX = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = props;

  const toggle = () => setIsOpen(!isOpen);

  // see Home.jsx
  let navigate = useNavigate();

  function activeCheck(event) {
    if(event.target.innerText === 'Home') {
      activeH = true;
      activeOB = false;
    } else if (event.target.innerText === 'Space Objects') {
      activeH = false;
      activeOB = true;
    }
  }

  return (
    <div>
      <Navbar color='secondary' expand="md" dark={true} container='sm'>

        <NavbarBrand href="/">

          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nasa icon' id='nasa-icon' />

        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink
                active={activeH}
                onClick={(event) => {
                  navigate("/");
                  activeCheck(event);
                }}
                className="add-pointer-nremove">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={activeOB}
                onClick={(event) => {
                  navigate("/SpaceObjects");
                  activeCheck(event);
                }}
                className="add-pointer-nremove">
                Space Objects
              </NavLink>
            </NavItem>

            {/*----dropdown button----
            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                Options
              </DropdownToggle>

              <DropdownMenu >
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
              
            </UncontrolledDropdown>
            */}

          </Nav>

          <NavbarText>Nasa</NavbarText>
        </Collapse>

      </Navbar>
    </div>
  );
};

export default NavbarX;
import React, { useState } from 'react';
import './Footer.scss';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color='secondary'
        expand="md"
        dark={true}
        container='sm'
        fixed='bottom'
        className='nasa__navbar'
      >

        <NavbarBrand href="/">Nasa</NavbarBrand>

      </Navbar>
    </div>
  );
};

export default Footer;
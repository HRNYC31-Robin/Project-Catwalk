import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const NavBar = function () {
  return (
    <div>
      <Navbar
        style={{
          paddingBottom: '20px',
          marginBottom: '10px',
          marginTop: '5px',
          backgroundColor: 'lightGrey',
        }}
      >
        <Navbar.Brand href='#home'> Team Robin </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'> Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-primary'>Search</Button>
        </Form>
      </Navbar>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h6>
          SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT <b> OFFER</b> --
          <u> NEW PRODUCT HIGHLIGHT </u>
        </h6>
      </div>
    </div>
  );
};

export default NavBar;

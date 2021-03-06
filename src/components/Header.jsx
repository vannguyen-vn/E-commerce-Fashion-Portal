import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Container, Col, Row } from 'react-bootstrap';
import logo from '../images/logo.png';


const Header = () => {

  return (
    <header>
      <Container>
        <Row  >
          <Col md={4} className="logo">
            <Link to={'/'}><img src={logo} /></Link>
          </Col>
          <Col md={{ span: 4, offset: 4 }} className='search'>
            <InputGroup className="">
              <FormControl
                placeholder="Search Product"
              />
              <Button className="search" variant="dark">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
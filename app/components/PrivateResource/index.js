/**
*
* PrivateResource
*
*/

import React from 'react';
import { Navbar, Nav, NavItem, Jumbotron, Row, Grid, Button } from 'react-bootstrap';
// import styled from 'styled-components';


function PrivateResource() {
  return (
    <Grid>
      <Row>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Account</NavItem>
              <NavItem eventKey={2} href="#">Log out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      <Row>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </Row>
    </Grid>
  );
}

PrivateResource.propTypes = {

};

export default PrivateResource;

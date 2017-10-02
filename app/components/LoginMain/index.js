/**
*
* LoginMain
*
*/

import React from 'react';
import { Button, FormGroup, ControlLabel, Form, FormControl, Grid, Row, Col, ButtonGroup } from 'react-bootstrap';
// import styled from 'styled-components';


function LoginMain() {
  return (
    <Grid>
      <Row >
        <Col md={6} mdPush={3}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="primary">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
            OR Login With
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <ButtonGroup>
                  <Button>Facebook</Button>
                  <Button>Github</Button>
                  <Button>Instagram</Button>
                  <Button>Internal Server</Button>
                </ButtonGroup>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Grid>
  );
}

LoginMain.propTypes = {

};

export default LoginMain;

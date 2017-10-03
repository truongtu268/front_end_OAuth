/**
*
* LoginMain
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Form, Grid, Row, Col, ButtonGroup } from 'react-bootstrap';
// import styled from 'styled-components';


function LoginMain({ onLoginGoogle, onLoginGithub, onLoginInstagram, onLoginInternal }) {
  return (
    <Grid>
      <Row >
        <Col md={6} mdPush={3}>
          <Form>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <h3>Login with these provider</h3>
                <ButtonGroup>
                  <Button onClick={onLoginGoogle}>Google</Button>
                  <Button onClick={onLoginGithub}>Github</Button>
                  <Button onClick={onLoginInstagram}>Instagram</Button>
                  <Button onClick={onLoginInternal}>Internal Server</Button>
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
  onLoginGoogle: PropTypes.func.isRequired,
  onLoginGithub: PropTypes.func.isRequired,
  onLoginInstagram: PropTypes.func.isRequired,
  onLoginInternal: PropTypes.func.isRequired,
};

export default LoginMain;

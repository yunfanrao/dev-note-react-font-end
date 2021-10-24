import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function Signin(props) {

  return (
    <div>
      <Container style={{ width: '42rem' }}>
        <Row className="justify-content-center m-2">
          <Col>
            <Card style={{ width: '32rem', top: '6rem' }} bg="light" border="info">
              <Card.Body>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Email
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Password
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                  <Col sm={{ span: 9, offset: 3 }}>
                    <Form.Check label="Remember me" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 9, offset: 3 }}>
                    <Button type="submit" variant="info">Sign in</Button>
                  </Col>
                </Form.Group>
              </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signin;
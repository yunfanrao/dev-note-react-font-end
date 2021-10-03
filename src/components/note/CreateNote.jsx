import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Tooltip } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import ButtonWithToolTip from "../button/ButtonWithToolTip";

function CreateNote(props) {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    labels: []
  });

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  function expand() {
    setExpanded(true)
  }

  function onChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function addNote() {

    const requestOptions = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    };
    fetch('http://localhost:3001/notes/add', requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log("status is " + result.status);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
          console.log(error)
        }
      )
    setExpanded(false);
    setNote({
      title: "",
      content: "",
      labels: []
    });
    window.location.reload(false);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <div> Loading...</div>;
  }
  else {
    return (
      <div>
        <Container style={{ width: '24rem' }}>
          <Row className="justify-content-center m-2">
            <Col>
              <Card style={{ width: '22rem' }} bg="light" border="info">
                <Card.Body>
                  <Form style={{ width: '20rem' }}>
                    {expanded && (
                      <Form.Group controlId="noteTitle">
                        <Form.Control name="title" value={note.title} onChange={onChange} size="sm" placeholder="Title" />
                      </Form.Group>
                    )}

                    <Form.Group controlId="noteContent">
                      <Form.Control
                        name="content"
                        value={note.content}
                        size="sm"
                        as="textarea"
                        onChange={onChange}
                        onClick={expand}
                        rows={expanded ? 3 : 1}
                        placeholder="Take a new node..." />
                    </Form.Group>

                    <ButtonWithToolTip
                      placement="right"
                      overlay={<Tooltip>Add</Tooltip>}
                      buttonVariant="outline-info border-0 btn-lg float-right rounded-circle py-0 px-1"
                      onClick={addNote}
                      icon={<BsPlus />}
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CreateNote;
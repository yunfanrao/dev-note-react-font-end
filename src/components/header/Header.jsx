import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function Header(props) {
  const [labels, setLabels] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let history = useHistory();

  function handleOnSubmit(event) {
    event.preventDefault();
    
    history.push(`/search/${searchString}`)
    
    setSearchString("")
  }

  function handleOnChange(event) {
    setSearchString(event.target.value)
  }

  useEffect(() => {
    fetch(`http://localhost:3001/labels/list/all`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("allLabels is " + result.allLabels);
          setIsLoaded(true);
          setLabels(result.allLabels);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      )
  }, [props.route])

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <div> Loading...</div>;
  }
  else {
    return (
      <div>
        <Navbar bg="info" variant="dark">
          <Navbar.Brand href="#home">Dev-Note</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/labels">Labels</Nav.Link> */}
            <NavDropdown title="Labels" id="labels">
              {labels.map(labelName => (
                <NavDropdown.Item href={"/labels/" + labelName}>{labelName}</NavDropdown.Item>
            ))}
              {/* <NavDropdown.Item href="/labels/awesome">awesome</NavDropdown.Item>
              <NavDropdown.Item href="/labels/hi">hi</NavDropdown.Item>
              <NavDropdown.Item href="/labels/test">test</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/archive">Archive</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleOnSubmit}>
            <FormControl type="text" name="searchString" onChange={handleOnChange}
              placeholder="Search label" className="mr-sm-2" />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
        </Navbar>
      </div>
    )
  }
}

export default Header;
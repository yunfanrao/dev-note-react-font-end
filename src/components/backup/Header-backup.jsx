import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"

function Header() {
  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand href="#home">Dev-Note</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#labels">Labels</Nav.Link>
          <Nav.Link href="#archive">Archive</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search note" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Header;
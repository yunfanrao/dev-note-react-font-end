import React, { useState } from "react";
import { Alert, FormControl, InputGroup, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { BsPlus, BsTagFill } from "react-icons/bs";
import ButtonWithToolTip from "./ButtonWithToolTip";

function AddLabel(props) {

  const [newLabel, setNewLabel] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  function handleNewLabelChange(event) {
    const value = event.target.value;
    setNewLabel(value);
  }

  function handleOnClick() {
    setNewLabel("");
  }

  function addLabel() {
    const requestOptions = {
      method: 'Put',
    };
    fetch(`http://localhost:3001/labels/add/${props.id}/${newLabel}`, requestOptions)
      .then( (response) => {
        // console.log("response is " + response);
        // console.log("status is " + response.status);
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then( (result) => {
          setIsLoaded(true);
          window.location.reload(false);
        }
      )
      .catch( (err) => {
        setIsLoaded(false);
        setError(err);
        console.log(err)
      })
    setNewLabel("");
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Label Note</Popover.Title>
      <Popover.Content>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="enter new label"
            aria-label="new label"
            aria-describedby="new label"
            value={newLabel}
            onChange={handleNewLabelChange}
          />
          <InputGroup.Append>
            <ButtonWithToolTip
              placement="right"
              overlay={<Tooltip>Add</Tooltip>}
              buttonVariant="outline-info border-0 btn-lg float-right rounded-circle py-0 px-1 ml-1"
              icon={<BsPlus />}
              onClick={addLabel}
            />
          </InputGroup.Append>
        </InputGroup>

      </Popover.Content>
    </Popover>
  );

  if (error) {
    return (
      <Alert variant="warning">
        The label can not be added! It might be EXISTED already! 
        <Alert.Link href="/">Try another label</Alert.Link>
      </Alert>
    )
  }
  else if (!isLoaded) {
    return <div> Loading...</div>;
  }
  else {
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <ButtonWithToolTip
          placement="right"
          overlay={<Tooltip>Label Note</Tooltip>}
          buttonVariant="outline-success border-0 btn-lg rounded-circle py-0 px-1"
          icon={<BsTagFill />}
          onClick={handleOnClick}
        />
      </OverlayTrigger>
    );
  }
}

export default AddLabel;
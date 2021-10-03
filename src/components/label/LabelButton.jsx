import React, {useState} from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

function Label(props) {

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  function handleOnMouseEnter() {
    setShowDeleteButton(true);
  }

  function handleOnMouseLeave() {
    setShowDeleteButton(false);
  }

  function deleteLabel() {
    const requestOptions = {
      method: 'Delete'
    };
    fetch(`http://localhost:3001/labels/delete/${props.id}/${props.labelName}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
           console.log("status is " + result.status);
        },
        (error) => {
          console.log(error)
        }
      )
    window.location.reload(false);
  }

  return (
    <div>
      <ButtonGroup>
        <Button
          className="label"
          variant="info btn-sm mt-1"
          type="button"
          align="left"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        // onClick={props.onClick}
        >
          {props.labelName}
        </Button>
        <Button
          className="label"
          variant="info btn-sm mr-2 mt-1 p-0 px-1"
          type="button"
          align="left"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          onClick={deleteLabel}
        >
          { showDeleteButton? <BsTrash /> : null }
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Label;
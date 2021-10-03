import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap"

function ButtonWithToolTip(props) {
  return (
    <OverlayTrigger placement={props.placement} overlay={props.overlay}>
      <Button
        className={props.buttonClassName} 
        variant={props.buttonVariant} 
        type={props.buttonType} 
        align={props.buttonAlign}
        onMouseEnter={props.onMouseEnter}
        onClick={props.onClick}
      >
        {props.icon}
      </Button>
    </OverlayTrigger>
  );
}

export default ButtonWithToolTip;
import React from "react";
import { Card, Tooltip } from "react-bootstrap";
import { BsArchiveFill, BsClipboard, BsFillTrashFill } from "react-icons/bs";
import ButtonWithToolTip from "../button/ButtonWithToolTip";
import AddLabel from "../button/AddLabel"

function Note() {
  return (
    <div>
      <Card style={{ width: '18rem', margin: '2rem' }} bg="light" border="info">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="text-light bg-dark p-2">
            <ButtonWithToolTip
              placement="right"
              overlay={<Tooltip>Copy</Tooltip>}
              buttonClassName="float-right text-light bg-dark btn-sm p-1 border-0"
              icon={<BsClipboard />}
            />
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>

          <ButtonWithToolTip
            placement="right"
            overlay={<Tooltip>Archive</Tooltip>}
            buttonVariant="outline-warning border-0"
            icon={<BsArchiveFill />}
          />

          <AddLabel />

          <ButtonWithToolTip
            placement="right"
            overlay={<Tooltip>Delete</Tooltip>}
            buttonVariant="outline-info border-0 float-right"
            icon={<BsFillTrashFill />}
          />

        </Card.Body>
      </Card>
    </div>
  );
}

export default Note;
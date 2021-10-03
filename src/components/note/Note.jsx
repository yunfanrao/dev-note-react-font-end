import React, {useState} from "react";
import { Card, Tooltip } from "react-bootstrap";
import { BsArchiveFill, BsClipboard, BsFillTrashFill } from "react-icons/bs";
import ButtonWithToolTip from "../button/ButtonWithToolTip";
import AddLabel from "../button/AddLabel";
import Labels from "../label/ListLabels";

function Note(props) {
  const [archived, setArchived] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  function handleDelete() {
    const requestOptions = {
      method: 'Delete',
    };
    fetch(`http://localhost:3001/notes/delete/${props.id}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("status is " + result.status);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
          console.log(error)
        }
      )

    window.location.reload(false);
  }

  function getArchive() {
    const requestOptions = {
      method: 'Get',
    };
    fetch(`http://localhost:3001/archive/${props.id}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("status is " + result.status);
          setArchived(result.archived);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
          console.log(error)
        }
      )
  }

  function toggleArchive() {
    const requestOptions = {
      method: 'Put',
    };
    fetch(`http://localhost:3001/archive/toggle/${props.id}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("status is " + result.status);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
          console.log(error)
        }
      )

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
        <Card style={{ width: '18rem', margin: '2rem' }} bg="light" border="info">
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="text-light bg-dark p-2">
              <ButtonWithToolTip
                placement="right"
                overlay={<Tooltip>Copy</Tooltip>}
                buttonClassName="float-right text-light bg-dark btn-sm p-1 border-0"
                icon={<BsClipboard />}
              />
              {props.content}
            </Card.Text>

            <Labels
              id={props.id}
            />

            <ButtonWithToolTip
              placement="right"
              overlay={<Tooltip>{archived? "Unarchive" : "Archive"}</Tooltip>}
              onMouseEnter={getArchive}
              onClick={toggleArchive}
              buttonVariant="outline-warning border-0"
              icon={<BsArchiveFill />}
            />

            <AddLabel id={props.id}/>

            <ButtonWithToolTip
              placement="right"
              overlay={<Tooltip>Delete</Tooltip>}
              onClick={handleDelete}
              buttonVariant="outline-info border-0 float-right"
              icon={<BsFillTrashFill />}
            />

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Note;
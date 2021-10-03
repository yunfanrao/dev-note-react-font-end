import React, { useState, useEffect } from "react";
import Note from "./Note";
import { CardDeck } from "react-bootstrap";

function NotesWithLabel(props) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/labels/list/notes/label/${props.labelName}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("data is " + result.notes);
          setIsLoaded(true);
          setNotes(result.notes);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      )
  }, [props.route, props.labelName])

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <div> Loading...</div>;
  }
  else {
    return (
      <div>        
        <CardDeck>
          {notes.map(note => (
            <Note key={note._id} id={note._id} title={note.title} content={note.content} />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default NotesWithLabel;
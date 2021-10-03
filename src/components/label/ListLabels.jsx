import React, { useState, useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import Label from "./LabelButton";

function Labels(props) {
  const [labels, setLabels] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/labels/list/notes/id/${props.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("data is " + result.labels);
          setIsLoaded(true);
          setLabels(result.labels);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      )
  }, [props.route, props.id])

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <div> Loading...</div>;
  }
  else {
    return (
      <div className="m-2 ml-3">        
        <CardDeck>
          {labels.map(labelName => (
            <Label id={props.id} labelName={labelName} />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Labels;
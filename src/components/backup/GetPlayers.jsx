import React, { useState, useEffect } from "react";

function GetPlayers(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/${props.route}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("data is " + result.data);
          setIsLoaded(true);
          setItems(result.data);
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
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {console.log("item is " + item.email)}
            {item.email}
          </li>
        ))}
      </ul>
    );
  }

}

export default GetPlayers;
import React from "react";
import Header from "../header/Header";
import Notes from "../Notes";
import CreateNote from "../CreateNote";
// import GetPlayers from "./backup/GetPlayers";

function App() {
  return (
    <div>
      {/* <GetPlayers route="mongoDBTest/users/list"/> */}
      <Header />
      <CreateNote />
      <Notes />
    </div>
  )
}

export default App;
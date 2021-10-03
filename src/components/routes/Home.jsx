import React from "react";
import Header from "../header/Header";
import Notes from "../note/Notes";
import CreateNote from "../note/CreateNote";

function Home() {
  return (
    <div>
      <Header />
      <CreateNote />
      <Notes />
    </div>
  );
}

export default Home;
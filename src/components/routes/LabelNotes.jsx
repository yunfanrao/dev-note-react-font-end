import React from "react";
import Header from "../header/Header";
import NotesWithLabel from "../note/NotesWithLabel";

function LabelNotes(props) {
  return (
    <div>
      <Header />
      <NotesWithLabel 
          labelName={props.labelName}
      />
    </div>
  );
}

export default LabelNotes;
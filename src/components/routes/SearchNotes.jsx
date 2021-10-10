import React from "react";
import Header from "../header/Header";
import NotesMatchString from "../note/NotesMatchString";

function SearchNotes(props) {
  return (
    <div>
      <Header />
      <NotesMatchString 
          searchString={props.searchString}
      />
    </div>
  );
}

export default SearchNotes;
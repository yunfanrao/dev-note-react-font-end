import React from "react";
import Home from "./routes/Home";
import LabelNotes from "./routes/LabelNotes";
import SearchNotes from "./routes/SearchNotes";
import Archive from "./routes/Archive";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const goLabelNotes = ( {match} ) => (
      <LabelNotes labelName={match.params.labelName} />
  )
  
  const goSearchNotes = ( {match} ) => (
    <SearchNotes searchString={match.params.searchString} />
)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/labels/:labelName" component={goLabelNotes} />
          <Route path="/search/:searchString" component={goSearchNotes} />
          <Route path="/archive">
            <Archive />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
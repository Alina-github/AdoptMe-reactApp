import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

import { SearchParams } from "./SearchParams";

export const App = () => {
  const theme = useState("green");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Menu from "./components/Menu";
import MainPage from "./pages";
import { LanguageProvider } from "./state";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Menu />
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </LanguageProvider>
  );
};
export default App;

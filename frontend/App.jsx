import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Menu from "./components/Menu";
import MainPage from "./pages";
import { LanguageProvider } from "./state";
import SetupPage from "./pages/Setup";
import LogoutPage from "./pages/Logout";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Menu />
        <Switch>
          <Route path="/proxyauth" exact>
            <MainPage />
          </Route>
          <Route path="/proxyauth/setup" exact>
            <SetupPage />
          </Route>
          <Route path="/proxyauth/logout-success" exact>
            <LogoutPage />
          </Route>
        </Switch>
      </Router>
    </LanguageProvider>
  );
};
export default App;

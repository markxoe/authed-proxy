import React, { useEffect } from "react";
import "bulma";
import { defaultLangCode, getLanguage, langSelectorEntries } from "./i18n";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [currentLang, setCurrentLang] = React.useState(defaultLangCode);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a class="navbar-item">HTTP Proxy Auth</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control has-icons-left">
              <span className="select">
                <select
                  onChange={(e) => {
                    setCurrentLang(e.target.value);
                  }}>
                  {langSelectorEntries.map((i) => (
                    <option selected={currentLang === i.id} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </span>
              <span class="icon is-small is-left">
                <i class="fas fa-globe"></i>
              </span>
            </div>
          </div>
          <div className="navbar-item">
            <a href="#" className="button is-light is-link">
              <span class="icon is-small is-left">
                <i class="fab fa-github"></i>
              </span>
              <span>{getLanguage(currentLang)["source code on GitHub"]}</span>
            </a>
          </div>
        </div>
      </nav>
      <section class="hero is-primary is-fullheight-with-navbar">
        <div class="hero-body">
          <div className="card m-auto">
            <div className="card-header">
              <p className="card-header-title">
                {getLanguage(currentLang)["please enter your otp code"]}
              </p>
            </div>
            <div className="card-content">
              <form method="POST" action="/proxyauth">
                <div className="field">
                  <label className="label">
                    {getLanguage(currentLang)["otp code"]}
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="otp"
                      type="number"
                      min="0"
                      max="999999"
                      autoComplete="one-time-code"
                      placeholder="OTP"
                      className="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button type="submit" className="button is-link is-light">
                    {getLanguage(currentLang).submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;

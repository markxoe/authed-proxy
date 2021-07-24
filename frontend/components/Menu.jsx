import React from "react";
import { useState, useContext } from "react";
import { getLanguage, langSelectorEntries } from "../i18n";
import { LanguageContext } from "../state";

const Menu = () => {
  const { language, setlanguage } = useContext(LanguageContext);
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a class="navbar-item">HTTP Proxy Auth</a>
        <a
          className="navbar-burger"
          role="button"
          onClick={() => setMenu((i) => !i)}>
          <span />
          <span />
          <span />
        </a>
      </div>
      <div className={`navbar-menu is ${menu ? "is-active" : ""} `}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control has-icons-left">
              <span className="select">
                <select
                  onChange={(e) => {
                    setlanguage(e.target.value);
                  }}>
                  {langSelectorEntries.map((i) => (
                    <option selected={language === i.id} value={i.id}>
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
            <a
              href="https://github.com/markxoe/authed-proxy/"
              className="button is-light is-link">
              <span class="icon is-small is-left">
                <i class="fab fa-github"></i>
              </span>
              <span>{getLanguage(language)["source code on GitHub"]}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

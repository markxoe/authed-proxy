import React from "react";
import { getLanguage } from "../i18n";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { LanguageContext } from "../state";

const MainPage = () => {
  const { language } = React.useContext(LanguageContext);
  return (
    <>
      <section class="hero is-primary is-fullheight-with-navbar">
        <div class="hero-body">
          <div className="card m-auto">
            <div className="card-header">
              <p className="card-header-title">
                {getLanguage(language)["please enter your otp code"]}
              </p>
            </div>
            <div className="card-content">
              <form method="POST" action="/proxyauth">
                <div className="field">
                  <label className="label">
                    {getLanguage(language)["otp code"]}
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
                    {getLanguage(language).submit}
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
export default MainPage;

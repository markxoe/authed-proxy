import React from "react";
import { getLanguage } from "../i18n";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { LanguageContext } from "../state";
import OTPForm from "../components/OTPForm";

const MainPage = () => {
  const { language } = React.useContext(LanguageContext);
  return (
    <>
      <section class="hero is-primary is-fullheight-with-navbar">
        <div class="hero-body">
          <div className="card m-auto">
            <div className="card-content">
              <div className="content">
                <h2>{getLanguage(language)["please enter your otp code"]}</h2>
              </div>
              <OTPForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainPage;

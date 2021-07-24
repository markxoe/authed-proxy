import React, { useEffect, useContext } from "react";
import { getLanguage } from "../i18n";
import { LanguageContext } from "../state";

const LogoutPage = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setTimeout(() => {
      window.location = "/proxyauth";
    }, 5000);
  }, []);

  return (
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div className="card m-auto">
          <div className="card-content">
            <div className="content">
              <h1>
                {getLanguage(language).logout["successfully logged out!"]}
              </h1>
              <p>{getLanguage(language).logout["redirecting to login..."]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoutPage;

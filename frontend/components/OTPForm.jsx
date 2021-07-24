import React from "react";
import { getLanguage } from "../i18n";
import { LanguageContext } from "../state";

const OTPForm = () => {
  const { language } = React.useContext(LanguageContext);
  return (
    <form method="POST" action="/proxyauth">
      <div className="field">
        <label className="label">{getLanguage(language)["otp code"]}</label>
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
  );
};

export default OTPForm;

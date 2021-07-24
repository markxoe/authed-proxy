import React from "react";
import { getLanguage } from "../i18n";
import { LanguageContext } from "../state";
import axios from "axios";
import ReactQRCode from "react-qr-code";

const SetupPage = () => {
  const { language } = React.useContext(LanguageContext);
  const [secret, setSecret] = React.useState("");

  const startSetup = () => {
    console.log("Post..");
    axios.post("/proxyauth/api/setup", {}, {}).then((data) => {
      if (data.status == 200) {
        setSecret(data.data.secret);
        console.log(data.data);
      }
    });
  };

  return (
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div className="card m-auto">
          <div className="card-header">
            <p className="card-header-title">
              {getLanguage(language).setup["Setup One Time Password"]}
            </p>
          </div>
          <div className="card-content">
            <div className="notification is-danger is-light">
              {
                getLanguage(language).setup[
                  "Warning! You are not going to see this QR Code again!"
                ]
              }
            </div>
            <button className="button is-danger" onClick={() => startSetup()}>
              {getLanguage(language).setup["Show me the QR Code"]}
            </button>
          </div>
        </div>
        {secret ? (
          <div className="card m-auto">
            <div className="card-content">
              <figure class="image is-128x128">
                <ReactQRCode
                  size={128}
                  value={`otpauth://totp/HTTP Proxy?secret=${secret}`}
                />
              </figure>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
export default SetupPage;

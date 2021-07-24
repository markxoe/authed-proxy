import React from "react";
import { getLanguage } from "../i18n";
import { LanguageContext } from "../state";
import axios from "axios";
import ReactQRCode from "react-qr-code";
import OTPForm from "../components/OTPForm";

const SetupPage = () => {
  const { language } = React.useContext(LanguageContext);
  const [secret, setSecret] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const startSetup = () => {
    console.log("Post..");
    axios
      .post("/proxyauth/api/setup", {}, { timeout: 500 })
      .then((data) => {
        if (data.status === 200 && data.data.status === "ok") {
          setSecret(data.data.secret);
          setErrorMsg("");
          console.log(data.data);
        } else {
          setErrorMsg(`Error: ${data.data.err}` || "An unknown Error occured");
        }
      })
      .catch((reason) => {
        setErrorMsg("An unknown Error occured");
      });
  };

  return (
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div
          className="columns is-centered is-multiline"
          style={{ width: "100%" }}>
          <div className="column is-narrow">
            <div className="card m-auto">
              <div className="card-content">
                <div className="content">
                  <h1>
                    {getLanguage(language).setup["Setting Up Authentication"]}
                  </h1>
                  <p>{getLanguage(language).setup["long setup msg"]}</p>
                </div>
                <div className="notification is-warning is-light">
                  {
                    getLanguage(language).setup[
                      "Warning! You are not going to see this QR Code again!"
                    ]
                  }
                </div>

                {errorMsg ? (
                  <div className="notification is-danger is-light">
                    {errorMsg}
                  </div>
                ) : (
                  ""
                )}
                <button
                  className="button is-danger"
                  disabled={secret !== ""}
                  onClick={() => startSetup()}>
                  {getLanguage(language).setup["Show me the QR Code"]}
                </button>
              </div>
            </div>
          </div>
          {secret ? (
            <div className="column is-narrow">
              <div className="card m-auto">
                <div className="card-content">
                  <figure class="image is-128x128 m-auto">
                    <ReactQRCode
                      size={128}
                      value={`otpauth://totp/HTTP Proxy?secret=${secret}`}
                    />
                  </figure>
                  <div className="content">
                    <p>
                      Secret Code: <code>{secret}</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {secret ? (
            <div className="column is-narrow">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h2>
                      {getLanguage(language)["please enter your otp code"]}
                    </h2>
                  </div>
                  <OTPForm />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
export default SetupPage;

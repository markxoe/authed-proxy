// @ts-check
require("dotenv").config();
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const cookieSession = require("cookie-session");
const proxyMiddleware = require("http-proxy-middleware");

const qr = require("qrcode-terminal");
const totp = require("totp-generator");
const otblib = require("otplib");

const app = express();
const db = require("./db")("temp", "db.json");

const { PROXY_TARGET, PORT } = process.env;
if (!PROXY_TARGET) throw Error("PROXY_TARGET not set");

console.log("Printing current QR Code:");
if (db.get("is-setup", false))
  qr.generate(`otpauth://totp/HTTP Proxy?secret=${db.get("secret")}`, {
    small: true,
  });
else console.log("No OTP Secret set yet");

const COOKIE_SECRET = db.exists("cookie-secret")
  ? db.get("cookie-secret")
  : db.set(
      "cookie-secret",
      otblib.authenticator.generateSecret(Math.round(Math.random() * 100)) +
        Math.round(Math.random() * 100)
    );

app.use(
  cookieSession({
    keys: [COOKIE_SECRET],
    name: "session",
    maxAge: 1000 * 60 * 60 * 24, // One Day
  })
);

app.use("/proxyauth", express.static(path.join(__dirname, "frontend", "dist")));

app.get("/proxyauth/api/setup", async (req, res) => {
  res.send({ isSetup: db.get("is-setup", false) });
});

app.post("/proxyauth/api/setup", async (req, res) => {
  if (!db.get("is-setup", false)) {
    const newSecret = otblib.authenticator.generateSecret();
    db.set("secret", newSecret);
    db.set("is-setup", true);
    res.send({ status: "ok", secret: newSecret });
  } else res.send({ status: "err", err: "Already Setup" });
});

app.get("/proxyauth/logout", (req, res) => {
  req.session.authed = false;
  res.redirect("/proxyauth/logout-success");
});

app.get("/proxyauth/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use(bodyparser.urlencoded());

app.post("/proxyauth", (req, res, next) => {
  if (db.get("is-setup", false))
    if (totp(db.get("secret"), {}) == req.body.otp) {
      req.session.authed = true;
      res.redirect("/");
    } else {
      res.redirect("/proxyauth");
    }
  else res.redirect("/proxyauth/setup");
});

app.use(
  "/*",
  (req, res, next) => {
    if (req.session.authed) {
      next();
    } else {
      if (db.get("is-setup", false)) res.redirect("/proxyauth");
      else res.redirect("/proxyauth/setup");
    }
  },
  proxyMiddleware.createProxyMiddleware({ target: PROXY_TARGET }, {})
);

app.listen(PORT || 3000);

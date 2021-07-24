// @ts-check
require("dotenv").config();

const express = require("express");
const proxyMiddleware = require("http-proxy-middleware");
const cookieSession = require("cookie-session");
const bodyparser = require("body-parser");
const qr = require("qrcode-terminal");

const otpsecret = "QWERTZUIOPASDFGHJKL";

const totp = require("totp-generator");

const path = require("path");

const app = express();

const { PROXY_TARGET, COOKIE_SECRET } = process.env;
if (!PROXY_TARGET) throw Error("PROXY_TARGET not set");
if (!COOKIE_SECRET) throw Error("COOKIE_SECRET not set");

qr.generate(`otpauth://totp/?secret=${otpsecret}`, { small: true });

app.use(
  cookieSession({
    keys: [COOKIE_SECRET],
    name: "session",
    maxAge: 1000 * 60 * 60 * 24, // One Day
  })
);

app.use("/proxyauth", express.static(path.join(__dirname, "frontend", "dist")));
app.get("/proxyauth/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.use(bodyparser.urlencoded());

app.post("/proxyauth", (req, res, next) => {
  if (totp(otpsecret, {}) == req.body.otp) {
    req.session.authed = true;
    res.redirect("/");
  } else {
    res.redirect("/proxyauth");
  }
});

app.use(
  "/*",
  (req, res, next) => {
    if (req.session.authed) {
      next();
    } else {
      res.redirect("/proxyauth");
    }
  },
  proxyMiddleware.createProxyMiddleware({ target: PROXY_TARGET }, {})
);

app.listen(3000);

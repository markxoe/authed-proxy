# Authed Proxy Server

Just an express HTTP Proxy Server, but authed with TOTP Codes and Cookies

## Description

This is an Express Server which checks for an Cookie. If it doesn't exist, it will redirect to an authentication site where the user has to enter an TOTP Token (aka 2 Factor authentication token) to get the cookie. If the Cookie then exists, it will proxy to another Server.

The result can be used to, for example, publish [OctoPrint](https://github.com/OctoPrint/OctoPrint) or any other serevr securely to the internet.

### Used Technologies

- React
  - [Bulma](https://bulma.io/)
  - Compiling with [parcel](https://parceljs.org/)
- Express
  - `http-proxy-middleware` as proxy

## Installation

1. Clone this Repo
2. Install Dependencies `npm i`
3. Copy environment file `cp .example.env .env`
4. Setup .env with your favorite Editor
5. Build Frontend `npm run build`
6. Start Server `node index.js`

## Development

1. Install Dependencies `npm i`
2. Start Development Server `npm start`

## TODO:

- [ ] CI
- [ ] Automated Tests
- [ ] Setup Wizard
- [ ] Different Authentication Methods

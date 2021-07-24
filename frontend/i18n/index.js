// @ts-check
export const defaultLangCode = "en";
/** @type {{[key:string]:{name:string;"otp code":string;"please enter your otp code":string;"submit":string;"source code on GitHub":string;"setup":{"Setup One Time Password":string;"Show me the QR Code":string;"Warning! You are not going to see this QR Code again!":string;"here":string;"long setup msg":string;"Setting Up Authentication":string};"logout":{"successfully logged out!":string;"redirecting to login...":string}}}} */
const langs = {
  en: {
    name: "English",
    "otp code": "OTP code",
    "please enter your otp code": "Please enter your OTP code",
    submit: "Submit",
    "source code on GitHub": "Source code on GitHub",
    setup: {
      "Setup One Time Password": "Setup One Time Password",
      "Show me the QR Code": "Show me the QR Code!",
      "Warning! You are not going to see this QR Code again!":
        "Warning! You are not going to see this QR Code again!",
      here: "here",
      "long setup msg":
        "If you click the button below, you will see a QR code that you can scan with the Google Authenticator or another app. Alternatively, you can enter the secret code, which is also displayed to you, into the app. Then you can enter the code from the app into the field and go to the proxy",
      "Setting Up Authentication": "Setting Up Authentication",
    },
    logout: {
      "successfully logged out!": "Successfully logged out!",
      "redirecting to login...": "Redirecting to Login...",
    },
  },
  de: {
    name: "Deutsch",
    "otp code": "OTP Code",
    "please enter your otp code": "Bitte gib deinen OTP Code ein",
    submit: "Absenden",
    "source code on GitHub": "Source Code auf GitHub",
    setup: {
      "Setup One Time Password": "Richte das One Time Password ein",
      "Show me the QR Code": "Zeig mit den QR COde!",
      "Warning! You are not going to see this QR Code again!":
        "Achtung! Den QR Code wirst du nur dieses mal sehen können",
      here: "hier",
      "long setup msg":
        "Wenn du auf den Knopf unten klickst, wirst du einen QR Code sehen, den du mit der Google Authenticator oder einer anderen App scannen kannst. Alternativ kannst du auch den Secret Code, der dir auch angezeigt wird, in die App eingeben. Danach kannst du den Code aus der App in das Feld eingeben und zum Proxy gelangen",
      "Setting Up Authentication": "Authentifizierung einrichten",
    },
    logout: {
      "successfully logged out!": "Erfolgreich ausgeloggt!",
      "redirecting to login...": "Weiterleiten zum Login...",
    },
  },
};

export const getLanguage = (langcode) => {
  if (Object.keys(langs).includes(langcode)) {
    return langs[langcode];
  } else {
    return langs[defaultLangCode];
  }
};

export const langSelectorEntries = Object.keys(langs).map((i) => ({
  name: langs[i].name,
  id: i,
}));

// @ts-check
export const defaultLangCode = "en";
/** @type {{[key:string]:{name:string;"otp code":string;"please enter your otp code":string;"submit":string;"source code on GitHub":string;"setup":{"Setup One Time Password":string;"Show me the QR Code":string;"Warning! You are not going to see this QR Code again!":string}}}} */
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

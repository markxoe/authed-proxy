// @ts-check
export const defaultLangCode = "en";
/** @type {{[key:string]:{name:string;"otp code":string;"please enter your otp code":string;"submit":string;"source code on GitHub":string}}} */
const langs = {
  en: {
    name: "English",
    "otp code": "OTP code",
    "please enter your otp code": "Please enter your OTP code",
    submit: "Submit",
    "source code on GitHub": "Source code on GitHub",
  },
  de: {
    name: "Deutsch",
    "otp code": "OTP Code",
    "please enter your otp code": "Bitte gib deinen OTP Code ein",
    submit: "Absenden",
    "source code on GitHub": "Source Code auf GitHub",
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

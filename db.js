const fs = require("fs");

const db = (filename) => {
  if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, JSON.stringify({}));
  }
  const set = (name, data) => {
    const before = JSON.parse(fs.readFileSync(filename).toString());
    fs.writeFileSync(filename, { ...before, [name]: data });
  };

  const get = (name, defaultValue = undefined) => {
    const data = JSON.parse(fs.readFileSync(filename).toString());
    return data[name] || defaultValue;
  };

  return {
    set,
    get,
  };
};

module.exports = db;

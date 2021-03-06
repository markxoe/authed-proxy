const fs = require("fs");
const path = require("path");

const db = (directory, filename) => {
  const fullname = path.join(directory, filename);
  if (!fs.existsSync(fullname)) {
    fs.mkdirSync(directory);
    fs.writeFileSync(fullname, JSON.stringify({}));
  }
  const set = (name, data) => {
    const before = JSON.parse(fs.readFileSync(fullname).toString());
    fs.writeFileSync(fullname, JSON.stringify({ ...before, [name]: data }));
    return data;
  };

  const get = (name, defaultValue = undefined) => {
    const data = JSON.parse(fs.readFileSync(fullname).toString());
    return data[name] || defaultValue;
  };

  const exists = (name) => {
    const data = JSON.parse(fs.readFileSync(fullname).toString());
    return data[name] != undefined;
  };

  return {
    set,
    get,
    exists,
  };
};

module.exports = db;

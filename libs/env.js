const nconf = require("nconf");
const path = require("path");

nconf.argv().env("__")
nconf.defaults({"conf": path.resolve(__dirname, "../config.json")});
nconf.file(nconf.get("conf"));

module.exports = nconf;
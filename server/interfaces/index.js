const DatabaseInterfaces = require("./database.interface");
const RouterInterface = require("./router.interface");

module.exports = {
  ...DatabaseInterfaces,
  RouterInterface,
};

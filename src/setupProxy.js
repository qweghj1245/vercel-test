const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/names", (req, res) => {
    res.status(200).send([
      {
        name: "John",
      },
      {
        name: "Eric",
      },
    ]);
  });
};

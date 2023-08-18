const router = require("express").Router();
//Swag😎
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
router.use(
  "/doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);

module.exports = router;

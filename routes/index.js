const myController = require("../controllers");
const routes = require("express").Router();

routes.use("/", require("./swagger"));

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleFunction);
routes.get("/crud", myController.crudReport);
routes.post("/math", myController.math);
//Students API Routes
routes.use("/students", require("./students"));
// routes.post("/create", myController.createStudent);
// routes.get("/students", myController.getAllStudents);

module.exports = routes;

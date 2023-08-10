const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleFunction);
routes.get("/crud", myController.crudReport);
routes.get("/math", myController.math);
routes.post("/create", myController.createStudent);
routes.get("/create", myController.getAllStudents);

module.exports = routes;

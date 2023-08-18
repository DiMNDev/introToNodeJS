const swag = require("swagger-autogen")();

const doc = {
  info: {
    title: "Student API",
    description: "An API of Students",
  },
  host: "intro-to-node.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger_output.json";
const controllerFiles = ["./routes/index.js"];

swag(outputFile, controllerFiles, doc);

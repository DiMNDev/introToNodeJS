const Students = require("../models/students");
const awesomeFunction = (req, res) => {
  res.send("Hello World!");
};
const tooeleFunction = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const crudReport = (req, res) => {
  let myEssay =
    "Crud is in-crud-ibly important. Create, Read, Update, and Delete are foundational to copious amounts, if not all, full and small scale applications. This is what makes the web so powerful. We can CREATE content for other people to READ. We can change it, if our case requires, with UPDATE, and when information is no longer relevant, we can DELETE it. These methods provide a foundation of value to the world. From small and large businesses that need to track financial and operational metrics, to worlds explored in video games with relational events and statistics. From small local projects running on a local machine, handling data that lives together in one location to larger scale projects with many intricate moving parts, events triggering at different times that need to be handled in a specific order to connect clients. It wouldn't be possible without Create, Read, Update and Delete. 💩 we need it.";
  res.send(
    `<div class="main-container"><h1>My perception of CRUD</h1><p>${myEssay}</p></div>`
  );
};

const math = (req, res) => {
  let num1 = 2;
  num2 = 2;
  let result;
  (function (num1, num2) {
    result = num1 + num2;
  })(num1, num2);
  res.send(`${num1} + ${num2} = ${result}`);
};

const createStudent = async (req, res) => {
  const student = await Students.create(req.body);
  if (!student) {
    throw new Error("Unable to create new student");
  }
  res.status(201).json(`Welcome ${student.firstName}`);
};

const getAllStudents = async (req, res) => {
  const allStudents = await Students.find().sort("lastName");
  console.log(allStudents);
  if (!allStudents) {
    throw new Error("No one is home");
  }
  res.status(200).json({ allStudents });
};

module.exports = {
  awesomeFunction,
  tooeleFunction,
  crudReport,
  math,
  createStudent,
  getAllStudents,
};

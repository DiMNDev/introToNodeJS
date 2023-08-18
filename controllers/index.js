const Students = require("../models/students");

const awesomeFunction = (req, res) => {
  //#swagger.description = "My first API"
  res.send("Hello World!");
};
const tooeleFunction = (req, res) => {
  //#swagger.description = "The truth about Tooele Tech"
  res.send("Tooele Tech is Awesome!");
};
const crudReport = (req, res) => {
  //#swagger.description = "A note on crud"
  let myEssay =
    "Crud is in-crud-ibly important. Create, Read, Update, and Delete are foundational to copious amounts, if not all, full and small scale applications. This is what makes the web so powerful. We can CREATE content for other people to READ. We can change it, if our case requires, with UPDATE, and when information is no longer relevant, we can DELETE it. These methods provide a foundation of value to the world. From small and large businesses that need to track financial and operational metrics, to worlds explored in video games with relational events and statistics. From small local projects running on a local machine, handling data that lives together in one location to larger scale projects with many intricate moving parts, events triggering at different times that need to be handled in a specific order to connect clients. It wouldn't be possible without Create, Read, Update and Delete. 💩 we need it.";
  res.send(
    `<div class="main-container"><h1>My perception of CRUD</h1><p>${myEssay}</p></div>`
  );
};
const math = (req, res) => {
  //#swagger.description = "Addition is fun"
  const numbers = {
    num1: req.body.num1,
    num2: req.body.num2,
  };
  let result = add(parseInt(numbers.num1), parseInt(numbers.num2));
  res.send(`${numbers.num1} + ${numbers.num2} = ${result}`);
};

const add = (num1, num2) => {
  return num1 + num2;
};

const createStudent = async (req, res) => {
  // #swagger.description = "Create a new student"
  const studentOBJ = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    currentCollege: req.body.currentCollege,
  };
  const student = await Students.create(studentOBJ);
  if (!student) {
    throw new Error("Unable to create new student");
  }
  console.log(`${student.firstName} is a new student`);
  res.status(201).json(`Welcome ${student.firstName}`);
};

const getAllStudents = async (req, res) => {
  //#swagger.description = "Get all students"
  const allStudents = await Students.find().sort("lastName");
  if (!allStudents) {
    throw new Error("No one is home");
  }
  console.log(`Get all ${allStudents.length} students`);
  res.status(200).json({ allStudents });
};

const getSingleStudent = async (req, res) => {
  //#swagger.description = "Get single student"
  const studentId = req.params.id;
  if (!studentId) {
    throw new Error("Please provide student ID");
  }
  const student = await Students.findById(studentId);
  if (!student) {
    throw new Error("Student does not exist");
  }
  console.log(`Found ${student.firstName} with ID:${studentId}`);
  res.status(200).json({ student });
};

const updateStudent = async (req, res) => {
  //#swagger.description = "Update a student"
  const studentID = req.params.id;
  const dummy = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    currentCollege: req.body.currentCollege,
  };

  const student = await Students.findOneAndUpdate(
    { _id: studentID },
    req.body,
    { new: true }
  );
  console.log(`Update ${student.firstName}`);
  res.status(200).json({ student });
};

const deleteStudent = async (req, res) => {
  //#swagger.description = "Delete a student"
  const studentId = req.params.id;
  if (!studentId) {
    throw new Error("Please provide student ID");
  }
  const student = await Students.findByIdAndRemove(studentId);

  console.log(`${student.firstName} has been deleted`);
  res.status(200).send(`${student.firstName} has been deleted`);
};

module.exports = {
  awesomeFunction,
  tooeleFunction,
  crudReport,
  math,
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};

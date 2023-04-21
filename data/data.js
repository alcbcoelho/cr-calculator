const Subject = require("../model/Subject");

const mm = 5.95;    // MM: abrange notas de 5 a 6.9; média do intervalo: 5.95
const ms = 7.95;    // MS: abrange notas de 7 a 8.9; média do intervalo: 7.95
const ss = 9.5;     // SS: abrange notas de 9 a 10; média do intervalo: 9.5

const completedSubjects = [
  // 1
  new Subject(90, ss),
  new Subject(120, ms),
  new Subject(90, ms),
  new Subject(60, ms),
  new Subject(60, ss),
  // 2
  new Subject(60, ss),
  new Subject(90, ss),
  new Subject(90, ms),
  new Subject(60, ms),
  new Subject(120, ss),
  // 3
  new Subject(120, ms),
  new Subject(90, ss),
  new Subject(60, ss),
  new Subject(60, ss),
  new Subject(60, ss),
];

module.exports = { completedSubjects };
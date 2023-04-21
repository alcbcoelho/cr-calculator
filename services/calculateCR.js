const { completedSubjects } = require("../data");

function calculateCR() {
  const numerator = completedSubjects
    .map(({ totalHours, finalGrade }) => totalHours * finalGrade)
    .reduce((acc, item) => acc + item, 0);

  const denominator = completedSubjects.reduce((acc, { totalHours }) => acc + totalHours, 0);

  return (numerator / denominator).toFixed(2);
}

module.exports = { calculateCR };
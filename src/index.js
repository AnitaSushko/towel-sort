
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) {
     return [];
  }
  if (matrix.length === 1 && !matrix[0].length) {
    return [];
  }
  let resultArray = [];
  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 === 0) {
      resultArray = resultArray.concat(matrix[i].reverse())
    } else {
      resultArray = resultArray.concat(matrix[i])
    }
  }
  return resultArray;
}

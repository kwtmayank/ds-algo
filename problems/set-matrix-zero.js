/**
 * 
 * Examples 1:

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output: [[1,0,1],[0,0,0],[1,0,1]]

Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0} arr 
 */

function setMatrixZero(arr) {
  const rows = arr.length;
  const columns = arr[0].length;
  let rowArr = [];
  let colArr = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (arr[i][j] === 0) {
        rowArr.push(i);
        colArr.push(j);
      }
    }
  }

  console.log(rowArr, colArr);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (rowArr.includes(i) || colArr.includes(j)) {
        arr[i][j] = 0;
      }
    }
  }

  console.log(arr);
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setMatrixZero(matrix);

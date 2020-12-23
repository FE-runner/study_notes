const mes = {
  type(para) {
    return Object.prototype.toString.call(para);
  },
  bubbleAsSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  },
  bubbleDeSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[i];
          arr[j] = temp;
        }
      }
    }
  },
  selectAsSort(arr) {
    let minIndex, temp;
    for (let i = 0; i < arr.length - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  },
};

// const arr = [1, 2, 5, 3, 1, 7, 4, 5];

// console.log(mes.bubbleAsSort(arr));

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowArr = board;
  const colArr = [];
  const gourpArr = [];
  // for (let i = 0; i < 9; i++) {
  //   if(!colArr[i]){
  //     colArr[i]=[]
  //   }else{
  //     for (let j = 0; j < 9; j++) {
  //     colArr[i].push(rowArr[j][i])
  //     }
  //   }
  // }
  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const col = [];
    const x = i % 3;
    for (let j = 0; j < 9; j++) {
      const group = [];
      col.push(board[j][i]);
      const y = j % 3;
      if (x === 0 && y === 0) {
        for (let k = 0; k < 3; k++) {
          for (let z = 0; z < 3; z++) {
            console.log(i + k,j + z)
            group.push(board[i + k][j + z]);
          }
        }
      }
      if(!isAlone(group)){
        return false
      } 
    }
     if(!isAlone(row)||!isAlone(col)){
       return false
     }
  }
  return true
  function isAlone(nums) {
    let len = nums.length;
    const temp = {};
    for (let i = 0; i < len; i++) {
      const element = nums[i];
      if (element !== '.') {
        if (temp[element]) {
          return false;
        } else {
          temp[element] = -1;
        }
      }
    }
    return true;
  }
};

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
)
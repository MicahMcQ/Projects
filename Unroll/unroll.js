function unroll(square) {
    const result = [];
    let top = 0;
    let bottom = square.length - 1;
    let left = 0;
    let right = square[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(square[top][i]);
      }
      top++;
  
      // Traverse rightmost column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(square[i][right]);
      }
      right--;
  
      // Traverse bottom row from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(square[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse leftmost column from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(square[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
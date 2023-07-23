// Test case 1
const square1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  console.log(unroll(square1)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  
  // Test case 2
  const square2 = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  console.log(unroll(square2)); // Output: ["a", "b", "c", "f", "i", "h", "g", "d", "e"]
  
  // Additional test cases
  const square3 = [
    [1, 2],
    [3, 4]
  ];
  console.log(unroll(square3)); // Output: [1, 2, 4, 3]
  
  const square4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(unroll(square4)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  
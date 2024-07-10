numbers = [2, 7, 11, 15, 30];

function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum(numbers, 45));

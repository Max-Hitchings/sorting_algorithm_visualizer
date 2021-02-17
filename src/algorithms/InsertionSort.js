const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
console.log(insertion_Sort([2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1]));

const arr = [15, 7, 2, 11];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);


// const nums = [1, 2];
// const temp = nums[0]
// nums[0] = nums[1]
// nums[1] = temp
// console.log(nums)
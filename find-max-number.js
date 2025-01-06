// Find max number [4, 39, 14, 29 44, 32]

let nums = [4, 39, 14, 29, 44, 32];
let box = 0;
for(let i = 0; i < nums.length; i++) {
    if(box < nums[i]) {
        box = nums[i]
    }
}
console.log(box);

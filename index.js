
// for(i = 1; i <= 100; i++) {
// //     if (i % 2 !== 0) {
// //     console.log(i)
// // }
// }

// var palindrome = 'golog'
// var text = ''
// // for(i = 0; i < palindrome.length; i++) {
// //     console.log(palindrome.length, palindrome[i])
// // }
// for (i = palindrome.length - 1; i >= 0; i--) {
//     text = text + palindrome[i]
// }
// console.log(text === palindrome)
// // text += palindrome.length[i]
// // console.log(text)

// // let text = "ba"
// // let text1 = ""
// // text1 += text[i]
// // text1 += text[1]
// // console.log(text1)


// var too = 2;
// var zereg = 6;
// var result = 1;
// for (var i = 1; i <= zereg; i++) {
//     result *= too
// }

// console.log(result);


// var od = '*'
// var text =''

// for(i = 0; i < 5; i++) {
//    text += od
//     console.log(text)
// }


// var text = 'harah'
// var reverse = ''
// for(var i = text.length; i >= 0; i--) {
// }

// var text = 'harah'
// var l = 0
// var r = text.length -1
// var isPalindrome = true
// for(l; l < text.length / 2; l++) {
// if(text[l] != text[r]) {
//     console.log
// }
// }


// let n = 10;
// let isPrimeNumber = true;
// if(n >= 1) isPrimeNumber = false;
// for(let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrimeNumber = false;
//     }
// }
// console.log(isPrimeNumber)



// function anhniiToo() {
//     let n = 20;
//     let isPrimeNumber;
//     for(i = 1; i <= 100; i++) {
//         for(j = 2; j < n; j++) {
//           if(n % i == 0) {
//             console.log(isPrimeNumber = false);

//           }
//         }
//         console.log(isPrimeNumber = true);

//     }
// }
// anhniiToo()





// for (let i = 1; i <= 5; i++) {

//     let text = ''

//     for (let j = 0; j < 5; j++) {
//         if (i <= j) {
//             text += ''
//         } else {
//             text += '*'
//         }
//     }
//     console.log(text)
// }


// var od = '*'
// var text ='    '

// for(i = 5; i < 0; i--) {
//    text += od
//     console.log(text)
// }



// let text = ''
// for(let i = 1; i<=5; i++) {
//     for(let j = 5; j >= 0; j--) {
//         if(i > j) {
//             text +='*'
//         }
//         else {
//             text +=' '
//         }
//     }
//     text += '\n'
// }
// console.log(text)



// const nums = [4, 7, 98, 4, 3, 5];
// let target = 11;
// for(let i = 1; i < nums.length; i++) {
//     for(let j = 0; j < nums.length; j++) {
//         if(nums[i] + nums[j] == target) {
//             console.log(nums[i]);
//     }
//     }
// }



// let numbers = [2, 3, 4, 10, 5];
// let box = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (box < numbers[i]) {
//         box = numbers[i]
//     }
// }
// console.log(box);



let nums = [2, 7, 7, 15];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
            console.log(true);
        }
    }
}
console.log(false)

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



// let nums = [2, 7, 7, 15];
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] == nums[j]) {
//             console.log(true);
//         }
//     }
// }
// console.log(false)


// const days = {
//     '0': 'Ням гараг',
//     '1': 'Даваа гараг',
//     '2': 'Мягмар гараг',
//     '3': 'Лхагва гараг',
//     '4': 'Пүрэв гараг',
//     '5': 'Баасан гараг',
//     '6': 'Бямба гараг'
// }

// console.log(Object.entries(days));



// const nums = [2, 7, 11, 15];
// const target = 9;

// // not use nested loop

// const obj = {};

// for (let i = 0; i < nums.length; i++) {
//     obj[target - nums[i]] = i

//     if (obj.hasOwnProperty(nums[i])){
//         console.log([obj[nums[i]], i]);
//     }
// }



const weather = [
    {
        "date": "2024-12-26",
        "temperature": { "current": -18.7, "min": -22.9, "max": -14.5 }
    },
    {
        "date": "2024-12-27",
        "temperature": { "current": -19.2, "min": -24.0, "max": -14.4 }
    },
    {
        "date": "2024-12-28",
        "temperature": { "current": -17.4, "min": -21.2, "max": -13.5 }
    },
    {
        "date": "2024-12-29",
        "temperature": { "current": -16.4, "min": -22.0, "max": -10.7 }
    },
    {
        "date": "2024-12-30",
        "temperature": { "current": -15.7, "min": -20.5, "max": -10.9 }
    },
    {
        "date": "2024-12-31",
        "temperature": { "current": -17.4, "min": -22.7, "max": -12.1 }
    },
    {
        "date": "2025-01-01",
        "temperature": { "current": -20.4, "min": -23.9, "max": -16.8 }
    },
    {
        "date": "2025-01-02",
        "temperature": { "current": -20.1, "min": -25.8, "max": -14.3 }
    },
    {
        "date": "2025-01-03",
        "temperature": { "current": -17.8, "min": -23.5, "max": -12.0 }
    },
    {
        "date": "2025-01-04",
        "temperature": { "current": -18.3, "min": -22.4, "max": -14.2 }
    },
    {
        "date": "2025-01-05",
        "temperature": { "current": -16.8, "min": -22.0, "max": -11.6 }
    },
    {
        "date": "2025-01-06",
        "temperature": { "current": -16.6, "min": -22.4, "max": -10.7 }
    },
    {
        "date": "2025-01-07",
        "temperature": { "current": -15.9, "min": -22.2, "max": -9.6 }
    },
    {
        "date": "2025-01-08",
        "temperature": { "current": -15.6, "min": -21.9, "max": -9.3 }
    }
]

// 1.1 Descenting sort
// 1.2 Last week weather informationconst 
// 2.1 - Ascending sort names second letter// 
// 2.2 - Names group by first letter

// 1.1

const sortedWeather = weather.sort((a, b) => new Date(b.date) - new Date(a.date))

console.log(sortedWeather);



// 1.2



// // 2.1

// const names = [
//     "baljan",
//     "itgel",
//     "jamiyansuren",
//     "chingun",
//     "telmuun",
//     "chinguun",
//     "nomi",
//     "aygul",
//     "behbat",
//     "narangerel",
//     "oyunbat",
//     "turbat",
//     "baasandash",
//     "jargalsaihan",
//     "tugsbileg",
//     "huwituguldur",
//     "ursaa",
//     "ider",
//     "ariunjargal"
//   ];

// const sortedNames = names.sort((a,b) => {
//     const sortedNamesA = a[1].toLowerCase() || '';
//     const sortedNamesB = b[1].toLowerCase() || '';

//     return sortedLatterA.localeCompare(sortedNamesB);

// })
// console.log(sortedNames);

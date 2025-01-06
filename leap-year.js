let on = 2001;

if ((on % 4 == 0) && (on % 100 != 0) || (on % 400 == 0)) {
    console.log(on + ' ondor jil');
}
else {
    console.log(on + ' ondor jil bish')
}



// // program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = 2401;

// checkLeapYear(year);
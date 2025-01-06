// gurvan toonii ihiig oloh

let a = 4, b = 9, c = 15;
let box = 0;
if (a < b && b > c) {
    box = b
}
if (b < a && a > c) {
    box = a
}
if (a < c && c > b) {
    box = c
}
console.log(box)
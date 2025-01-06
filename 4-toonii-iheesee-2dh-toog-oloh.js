// dorvon toonii iheesee 2 dh toog oloh

let a = 200, b = 80, c = 11, d = 43;
box = 0;
if (c < d && c > a && c > b) {
    box = c
}
if (c < b && c > a && c > d) {
    box = c 
}
if (c < a && c > b && c > d) {
    box = c 
}
if (a < b && a > c && a > d) {
    box = a
}
if (a < c && a > b && a > d) {
    box = a
}
if (a < d && a > c && c > b) {
    box = a
}
if (b < a && b > c && b > d) {
    box = b 
}
if (b < c && b > a && b > d) {
    box = b 
}
if (b < d && b > a && b > c) {
    box = b 
}
if (d < a && d > b && d > c) {
    box = d
}
if (d < b && d > a && d > c) {
    box = d 
}
if (d < c && d > a && d > b) {
    box = d
}
console.log(box)
const names = [    "baljan",    "itgel",    "jamiyansuren",    "chingun",    "telmuun",    "chinguun",    "nomi",    "aygul",    "behbat",    "narangerel",    "oyunbat",    "turbat",    "baasandash",    "jargalsaihan",    "tugsbileg",    "huwituguldur",    "ursaa",    "ider",    "ariunjargal"];
function findname(find) {
 for(let i = 0; i < names.length; i++) {
    if(names[i] == find) {
        return i;
    }
 }
}
console.log(findname('ider'))
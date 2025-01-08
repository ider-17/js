// 2025-2030 -> 12.31 ymar garag ve

// loop, new Date, Date method, condition

const days = {
    '0': 'Ням гараг',
    '1': 'Даваа гараг',
    '2': 'Мягмар гараг',
    '3': 'Лхагва гараг',
    '4': 'Пүрэв гараг',
    '5': 'Баасан гараг',
    '6': 'Бямба гараг'
}
for (let i = 2025; i <= 2030; i++) {
    const d = new Date(`${i}-12-31`).getDay()
    console.log(i,days[d]);
}

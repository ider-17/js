var palindrome = 'golog'
var text = ''
for (i = palindrome.length - 1; i >= 0; i--) {
    text = text + palindrome[i]
}
console.log(text === palindrome)
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let buttonEvent = document.getElementById("btn")
let generatedPassword = document.getElementById("password")

buttonEvent.addEventListener("click", function () {

    let randomNumber1 = Math.floor(Math.random() * 91)
    let randomNumber2 = Math.floor(Math.random() * 91)
    let randomNumber3 = Math.floor(Math.random() * 91)
    let randomNumber4 = Math.floor(Math.random() * 91)
    let randomNumber5 = Math.floor(Math.random() * 91)
    let randomNumber6 = Math.floor(Math.random() * 91)
    let randomNumber7 = Math.floor(Math.random() * 91)
    let randomNumber8 = Math.floor(Math.random() * 91)
    let randomNumber9 = Math.floor(Math.random() * 91)
    let randomNumber10 = Math.floor(Math.random() * 91)
    let randomNumber11 = Math.floor(Math.random() * 91)
    let randomNumber12 = Math.floor(Math.random() * 91)
    let randomNumber13 = Math.floor(Math.random() * 91)
    let randomNumber14 = Math.floor(Math.random() * 91)
    let randomNumber15 = Math.floor(Math.random() * 91)

    generatedPassword.textContent = characters[randomNumber1] + characters[randomNumber2] + characters[randomNumber3] + characters[randomNumber4] + characters[randomNumber5] + characters[randomNumber6] + characters[randomNumber7] + characters[randomNumber8] + characters[randomNumber9] +
        characters[randomNumber10] + characters[randomNumber11] +
        characters[randomNumber12] + characters[randomNumber13] + characters[randomNumber14] + characters[randomNumber15]

})


console.log(randomNumber1)

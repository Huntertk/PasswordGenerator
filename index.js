const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let buttonEvent = document.getElementById("btn")
let generatedPassword = document.getElementById("password")
let generatedPassword1 = document.getElementById("password1")

function genPass() {
    return Math.floor(Math.random() * characters.length)
}

buttonEvent.addEventListener("click", function () {
    generatedPassword.textContent = characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] +characters[genPass()] +
        characters[genPass()] + characters[genPass()] +
        characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()]

        generatedPassword1.textContent = characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()] +characters[genPass()] +
        characters[genPass()] + characters[genPass()] +
        characters[genPass()] + characters[genPass()] + characters[genPass()] + characters[genPass()]

})


console.log(randomNumber1)

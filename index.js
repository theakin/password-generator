const genPassBtn = document.getElementById("password-btn")

const firstPassEl = document.getElementById("password-one")
const secondPassEl = document.getElementById("password-two")

const modeEl = document.querySelector(".mode")
const modeToggleEl = document.querySelector(".mode-toggle")



let passwordTray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
'y', 'z', ".", "!", "#", "?", "&", "$", "+"]


function generatePassword() {
    let firstPass = ""
    let secondPass = ""
    for (let i = 0; i <= 16; i++) {
        let randomIndexOne = Math.floor(Math.random() * (passwordTray.length-1))
        let randomIndexTwo = Math.floor(Math.random() * (passwordTray.length-1))
        firstPass += passwordTray[randomIndexOne]
        secondPass += passwordTray[randomIndexTwo]

        firstPassEl.textContent = firstPass
        secondPassEl.textContent = secondPass

        console.log(randomIndexOne)
        console.log(randomIndexTwo)
}
}

// if ((modeToggleEl.style.marginRight = "auto") || 2+2 === 4) {
//     modeToggleEl.style.marginRight = "0"
//     modeToggleEl.style.marginLeft = "auto"
//     console.log("randomIndexOne")
// } else if (modeToggleEl.style.marginLeft === "auto") {
//     modeToggleEl.style.marginLeft = "0"
//     modeToggleEl.style.marginRight = "auto"
// }

modeEl.addEventListener("click", () => {
    if (modeToggleEl.classList.contains("left")) {
        modeToggleEl.classList.remove("left")
        modeToggleEl.classList.add("right")
        document.querySelector(".container").classList.add("dark")
    } else if (modeToggleEl.classList.contains("right")) {
        modeToggleEl.classList.remove("right")
        modeToggleEl.classList.add("left")
        document.querySelector(".container").classList.remove("dark")
    }
})


function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
    
firstPassEl.addEventListener("click", () => {
    copyToClipboard(firstPassEl.textContent)
})
    


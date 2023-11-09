const button = document.querySelector(".header__btn")
const html = document.querySelector("html")
let darkMode = false

export const themeChange = () => {
    darkMode = !darkMode

    html.classList.toggle("dark-mode")
    button.classList.toggle("header__btn--dark-mode")

    localStorage.setItem("theme", JSON.stringify(darkMode))
}

button.addEventListener("click", themeChange)

export const themeAnalysis = () => {
    darkMode = JSON.parse(localStorage.getItem("theme"))

    if(darkMode){
        html.classList.add("dark-mode")
        button.classList.add("header__btn--dark-mode")
    }
}
//themeAnalysis()
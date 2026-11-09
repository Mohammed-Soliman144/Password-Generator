// DOM SELECTORS
const generateBtn = document.querySelector("form.main__form button.form__button.generate-button")
const copyBtn = document.querySelector("form.main__form button.form__button.copy-button")
const rangeInput = document.querySelector("form.main__form input.form__input.input-range")
const output = document.querySelector("form.main__form output.form__output")
const textInput = document.querySelector("form.main__form input.input-text")
const meter = document.querySelector("form.main__form meter.form__meter")
const lowerCheck = document.getElementById("lower-check")
const upperCheck = document.getElementById("upper-check")
const numCheck = document.getElementById("num-check")
const symbolCheck = document.getElementById("symbol-check")
const indicaterText = document.getElementById("indicator-text")
const annoncer = document.getElementById("annoncer")

// Regular Expressions
const LOWER_REG = /^[a-z]+$/
const UPPER_REG = /^[A-Z]+$/
const DIGIT_REG =  /^[0-9]$/
const SPECIAL_REG = /^[^a-zA-Z0-9]+$/

function generatePassword(hasLower  = true, hasUpper  = true, hasDigits  = true, hasSymbols = true, len = 6) {

    // Edge Cases
    if(len < 6){
        const message = `Must length of generated password greater than 6 characters`
        alert(message)
        annoncer.textContent = message
        return 
    }
        
    else if(!hasLower && !hasUpper && !hasDigits && !hasSymbols) {
        const message = "Must check one option at least of generated password"
        alert(message)
        annoncer.textContent = message
        return 
    }
        
    const password = []
    const ASCII = Array.from({length: 127}, (ele, idx) => ele = idx)

    for(const num of ASCII) {
        if(hasLower)
            LOWER_REG.test(String.fromCharCode(num))? password.push(String.fromCharCode(num)) : ""
        if(hasUpper)
            UPPER_REG.test(String.fromCharCode(num)) ? password.push(String.fromCharCode(num)) : ""
        if(hasDigits)
            DIGIT_REG.test(String.fromCharCode(num)) ? password.push(String.fromCharCode(num)) : ""
        if(hasSymbols)
            // num = 33 !  to num = 126 ~
            SPECIAL_REG.test(String.fromCharCode(num)) && (num >= 33 && num <= 126) ? password.push(String.fromCharCode(num)) : ""
    }

    let random = ""

    for(let i = 0; i < len; i++)
        random += password[Math.floor(Math.random() * password.length)]

    return random
}

function displayPassword() {
    const 
        isLowerChecked = lowerCheck.checked, 
        isUpperChecked = upperCheck.checked, 
        isDigitChecked = numCheck.checked, 
        isSymbolChecked = symbolCheck.checked

    const password = generatePassword(isLowerChecked, isUpperChecked, isDigitChecked, isSymbolChecked, parseInt(output.textContent)) || ""
    textInput.value = password
    changeMeterStatus()
    annoncer.textContent = password ? "Already password generated" : ""
    return
}

function changeMeterStatus() {
    const len = parseInt(output.textContent)
    const MAX_LENGTH = 24
    const indicators = ["weak", "moderate", "strong"]
    const INDICATORS_LEN = 3
    switch(true) {
        case len >= 0 && len < 12:
            meter.value = Math.floor((len / MAX_LENGTH) * 100)
            indicaterText.textContent = indicators[Math.floor((len / MAX_LENGTH) * INDICATORS_LEN)]
            break;
        case len >= 12 && len < 20:
            meter.value = Math.floor((len / MAX_LENGTH) * 100)
            indicaterText.textContent = indicators[Math.floor((len / MAX_LENGTH) * INDICATORS_LEN)]
            break;
        case len >= 20 && len <= MAX_LENGTH:
            meter.value = Math.floor((len / MAX_LENGTH) * 100)
            indicaterText.textContent = indicators[Math.floor((len / MAX_LENGTH) * INDICATORS_LEN)] ?? indicators[INDICATORS_LEN - 1]
            break;
    }
    return
}


function copyPassword(e) {
    const password = textInput.value
    if(typeof window === "undefined" || !password) return
    const oldIcon = e.target.innerHTML
    const newIcon = `<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />`
    navigator.clipboard.writeText(password).then(() => {
        const btn = e.target.closest("button").querySelector("svg")
        btn.innerHTML = newIcon
        btn.style.color = "var(--color-dark-green)"
        btn.parentElement.style.borderColor = "var(--color-dark-green)"
        btn.style.transition = "all 0.4s"
        setTimeout(() => {
            btn.innerHTML = oldIcon
            btn.style.color = ""
            btn.parentElement.style.border = ""
            btn.style.transition = ""
        }, 2000)
    }).catch(err => {
        alert("Something error occurs!")
        console.error(err)
    })
    return
}


rangeInput.addEventListener("input", (e) => output.textContent = e.target.value)

generateBtn.addEventListener("click", displayPassword)

copyBtn.addEventListener("click", copyPassword)

displayPassword()
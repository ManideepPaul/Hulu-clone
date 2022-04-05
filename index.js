const loginWin = document.querySelector(".loginWin")
const logIn = document.querySelector("nav")

function closeFn() {
    loginWin.style.visibility = 'hidden';
}

logIn.addEventListener('click', () => {
    loginWin.style.visibility = 'visible';
    loginWin.style.opacity = '1';
})
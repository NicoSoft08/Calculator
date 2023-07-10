// Getting all the buttons of the box_buttons
const btnAll = [...document.querySelectorAll('button')];
const listKeyCode = btnAll.map(btn => btn.dataset.keyboard);
const screen = document.querySelector('.display_screen');

document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculate(value)
})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.keyboard;
    calculate(value)
})

const calculate = (value) => {
    if (listKeyCode.includes(value)) {
        switch(value) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeyCode.indexOf(value);
                const btn = btnAll[indexKeyCode];
                screen.textContent += btn.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('One mistake happened while calculating: ' + e.message)
})

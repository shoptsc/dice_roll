const text = document.querySelector('h1');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const reset = document.querySelector('#reset')
const result = document.querySelector('#result')
let val1 = document.querySelector('#val1');
let val2 = document.querySelector('#val2');
let result1 = [];
let result2 = [];

window.addEventListener('load', () => {
    alert(`Instructons : Each Player must roll the dice five(5) times to finish the game. Once it says you have reach your limit, it means you can't play after that. Click see result to see your result. Enjoy your game.`)
    let player = Math.floor(Math.random() * 2) + 1;
    alert(`player ${player} start`);
})

reset.addEventListener('click', () => {
    let player = Math.floor(Math.random() * 2) + 1;
    alert(`player ${player} start`);
    img1.setAttribute('src', `images/dice6.png`)
    img2.setAttribute('src', `images/dice6.png`);
    result1 = [];
    result2 = [];
    val1.textContent = 0;
    val2.textContent = 0;
    text.innerHTML = "Refresh Me"
})

p1.addEventListener('click', () => {
    let number1 = Math.floor(Math.random() * 6) + 1;
    val1.textContent = number1;
    let image1 = `images/dice${number1}.png`
    img1.setAttribute('src', image1)
    result1.push(number1)
    if (result1.length === 5) {
        alert('you have reach our limit')
    }

})

p2.addEventListener('click', () => {
    let number2 = Math.floor(Math.random() * 6) + 1;
    val2.textContent = number2;
    let image2 = `images/dice${number2}.png`;
    img2.setAttribute('src', image2);
    result2.push(number2)
    if (result2.length === 5) {
        alert('you have reach our limit')
    }

})

result.addEventListener('click', () => {
    res1 = result1.reduce((arg1, resp1) => arg1 + resp1, 0);
    res2 = result2.reduce((arg2, resp2) => arg2 + resp2, 0);
    val1.textContent = res1;
    val2.textContent = res2;
    if (res1 === res2) {
        text.innerHTML = 'Draw!'
    } else if (res1 > res2) {
        text.innerHTML = '🚩Player 1 Wins!'
    } else {
        text.innerHTML = 'Player 2 Wins!🚩'
    }
    console.log(res1, res2)
})
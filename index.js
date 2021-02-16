const text = document.querySelector('h1');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;

    let image1 = `images/dice${number1}.png`
    let image2 = `images/dice${number2}.png`

    img1.setAttribute('src', image1)
    img2.setAttribute('src', image2)

    if (number1 === number2) {
        text.innerHTML = 'Draw!'
    } else if (number1 > number2) {
        text.innerHTML = '🚩Player 1 Wins!'
    } else {
        text.innerHTML = 'Player 2 Wins!🚩'
    }
})
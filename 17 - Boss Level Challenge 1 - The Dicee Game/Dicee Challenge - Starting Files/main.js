// selecting the images
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');

// generating the random numbers from 1 to 6
const image1Src = Math.ceil(Math.random() * 6);
const image2Src = Math.ceil(Math.random() * 6);

// changing the header text
const headerH1 = document.querySelector('#header');
if (image1Src > image2Src) { // if player 1 wins
    headerH1.textContent = '🚩Player 1 Wins!'
} else if (image1Src < image2Src) { // if player 2 wins
    headerH1.textContent = 'Player 2 Wins!🚩'
} else { // if draw happens
    headerH1.textContent = 'Draw!'
}
// changing the images
image1.src = './images/dice' + image1Src + '.png';
image2.src = './images/dice' + image2Src + '.png';
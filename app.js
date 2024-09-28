const whiteSpan = document.getElementById('white');
const readMessage1 = document.querySelector('.profile-1');
const readMessage2 = document.querySelector('.profile-2');
const readMessage3 = document.querySelector('.profile-3');

function clearNotification() {
    console.log('clicked');
    const redDots = document.querySelectorAll('.dot');
    redDots.forEach(dot => {
    dot.classList.remove('.dot');
    dot.style.display = 'none';
    whiteSpan.style.display = 'none';
    //readMessage.classList.add('.read');
    readMessage1.style.backgroundColor = '#fff';
    readMessage2.style.backgroundColor = '#fff';
    readMessage3.style.backgroundColor = '#fff';
    })
}

document.querySelector('#button').addEventListener('click', clearNotification)
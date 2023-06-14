console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'New text content';

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "Só pode números entre 1 e 20"

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Acertou!"

    } else if (guess > secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = "Está acima!"
    
            score--
            document.querySelector('.score').textContent = score

        } else {
            document.querySelector('.message').textContent = "Você perdeu!"
            document.querySelector('.score').textContent = score - 1
        }


    } else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = "Está abaixo"
    
            score--
            document.querySelector('.score').textContent = score

        } else {
            document.querySelector('.message').textContent = "Você perdeu!"
            document.querySelector('.score').textContent = score - 1
        }
    }
})
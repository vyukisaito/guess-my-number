console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'New text content';

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "Só pode números entre 1 e 20"

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Acertou!"
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347";

        document.querySelector('.number').style.width  = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

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

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.number').style.width  = '15rem'
    document.querySelector('.number').textContent  = '?'

    document.querySelector('.message').textContent = 'Começando a calcular...'
    document.querySelector('.score').textContent = score

    document.querySelector('.guess').value = ''
    
})
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'New text content';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "No number!"
    }
})
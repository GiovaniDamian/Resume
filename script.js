document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toogleBtn');

    let gameRunning = false;
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const cloud = document.querySelector('.cloud');


    toggleButton.addEventListener('click', function () {
        const elementsShow = document.querySelectorAll('[show]');
        const elementsHidden = document.querySelectorAll('[hidden]');
        elementsShow.forEach(element => {
            element.removeAttribute('show');
            element.setAttribute('hidden', '');
        });
        elementsHidden.forEach(element => {
            element.removeAttribute('hidden');
            element.setAttribute('show', '');
        }
        );
    });

    const gameOver = document.querySelector('.game-over');
    const restartButton = document.querySelector('.restart');

    const jump = (e) => {

        e.preventDefault();

        gameRunning = true;
        mario.classList.add('jump');

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }

    const loop =  setInterval(() => {

        if (gameRunning) {
            pipe.style.display = 'block';
            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
            const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

            if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = 'assets/imgs/game-over.png';
                mario.style.width = '70px';
                mario.style.marginLeft = '35px';

                cloud.style.animation = 'cloud 20s infinite linear';
                cloud.style.left = `${cloudPosition}px`;

                gameOver.style.visibility = 'visible';

                clearInterval(loop);
            }
        } else {
            pipe.style.display = 'none'
        }
    }, 10);

    const restart = () => {

        gameOver.style.visibility = 'hidden';

        pipe.style.animation = 'pipe-animations 1.5s infinite linear';
        pipe.style.left = ``;

        mario.src = 'assets/imgs/mario.gif';
        mario.style.width = '130px';
        mario.style.bottom = '0px';
        mario.style.marginLeft = '';
        mario.style.animation = '';

        cloud.style.left = ``;
        gameRunning = true;

        const loop = setInterval(() => {

            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
            const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

            if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = 'assets/imgs/game-over.png';
                mario.style.width = '70px';
                mario.style.marginLeft = '35px';

                cloud.style.animation = 'cloud 20s infinite linear';
                cloud.style.left = `${cloudPosition}px`;

                gameOver.style.visibility = 'visible';

                clearInterval(loop);
            }
        }, 10);
    }
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);
    restartButton.addEventListener('click', restart);

})

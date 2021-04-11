let slider = function() {
    let firstButton = document.getElementById('first');
    let secondButton = document.getElementById('second');
    let thirdButton = document.getElementById('third');

    let slider = document.querySelector('.slider img');

    let firstImg = document.querySelector('.first');
    let secondImg = document.querySelector('.second');
    let thirdImg = document.querySelector('.third');

    firstButton.addEventListener('click', ()=>{
        firstImg.classList.remove('hidden-slide');
        firstImg.classList.add('showing');

        secondImg.classList.add('hidden-slide');
        thirdImg.classList.add('hidden-slide');

        firstButton.classList.add('active');
        secondButton.classList.remove('active');
        thirdButton.classList.remove('active');
    });

    secondButton.addEventListener('click', ()=>{
        secondImg.classList.remove('hidden-slide');
        secondImg.classList.add('showing');

        firstImg.classList.add('hidden-slide');
        thirdImg.classList.add('hidden-slide');

        secondButton.classList.add('active');
        firstButton.classList.remove('active');
        thirdButton.classList.remove('active');
    });

    thirdButton.addEventListener('click', ()=>{
        thirdImg.classList.remove('hidden-slide');
        thirdImg.classList.add('showing');

        secondImg.classList.add('hidden-slide');
        firstImg.classList.add('hidden-slide');

        thirdButton.classList.add('active');
        secondButton.classList.remove('active');
        firstButton.classList.remove('active');

    });
};


let onLoadPage = function() {
    setTimeout(() => {
        let contentBio = document.querySelector('.content-bio');

        contentBio.style.transform = "translateY(0)";
        contentBio.style.opacity = '1';
    }, 400);

    setTimeout(() => {
        let sliderDiv = document.querySelector('.slider-div');
        sliderDiv.style.opacity = '1';
    }, 900);
};

onLoadPage();
slider();
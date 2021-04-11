let slider = function() {
    let firstButton = document.getElementById('first');
    let secondButton = document.getElementById('second');
    let thirdButton = document.getElementById('third');

    let slider = document.querySelector('.slider img');


    firstButton.addEventListener('click', ()=>{
        slider.setAttribute('src',images[0]);
        firstButton.classList.add('active');
        secondButton.classList.remove('active');
        thirdButton.classList.remove('active');
    });

    secondButton.addEventListener('click', ()=>{
        slider.setAttribute('src',images[1]);
        secondButton.classList.add('active');
        firstButton.classList.remove('active');
        thirdButton.classList.remove('active');
    });

    thirdButton.addEventListener('click', ()=>{
        slider.setAttribute('src',images[2]);
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
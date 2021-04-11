let parseInfo = function() {
    let fullInfo = window.location.search;
    var map = {};

    if ("" != fullInfo) {
        let groups = fullInfo.substr(1).split("&"), i;

        for (i in groups) {
            i = groups[i].split("=");
            map[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }
    }
    return map
};


let printInfo = function() {
    let info = parseInfo();
    let loginDiv = document.querySelector('.login');
    let emailDiv = document.querySelector('.email');

    loginDiv.appendChild(document.createTextNode(info['login']));
    emailDiv.appendChild(document.createTextNode(info['email']));
};


let checkWin = function() {
    let cells = document.querySelectorAll('.game-table td');
    if(
        (cells[0].classList.contains('active-cell') && cells[0].classList.value === cells[1].classList.value && cells[1].classList.value === cells[2].classList.value) ||
        (cells[3].classList.contains('active-cell') &&cells[3].classList.value === cells[4].classList.value && cells[4].classList.value === cells[5].classList.value) ||
        (cells[6].classList.contains('active-cell') &&cells[6].classList.value === cells[7].classList.value && cells[7].classList.value === cells[8].classList.value) ||
        (cells[0].classList.contains('active-cell') &&cells[0].classList.value === cells[4].classList.value && cells[4].classList.value === cells[8].classList.value) ||
        (cells[2].classList.contains('active-cell') &&cells[2].classList.value === cells[4].classList.value && cells[4].classList.value === cells[6].classList.value) ||
        (cells[0].classList.contains('active-cell') &&cells[0].classList.value === cells[3].classList.value && cells[3].classList.value === cells[6].classList.value) ||
        (cells[1].classList.contains('active-cell') &&cells[1].classList.value === cells[4].classList.value && cells[4].classList.value === cells[7].classList.value) ||
        (cells[2].classList.contains('active-cell') &&cells[2].classList.value === cells[5].classList.value && cells[5].classList.value === cells[8].classList.value)
    ) return true;

    return false;
};


let resetGame = function() {
    let table = document.querySelector('table.game-table');
    let cells = document.querySelectorAll('.game-table td');

    table.classList.remove('orange');
    for(let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active-cell');
        cells[i].classList.remove('blue');
        cells[i].classList.remove('orange');
    }
};


let getResultGame = function(color) {
    let menuRepeat = document.querySelector('.repeate-game');
    let resultWindod = document.querySelector('.result');

    let table = document.querySelector('.game-table');
    table.style.zIndex = 0;
    table.style.opacity = 0.1;
};


let gameLogic = function() {
    let table = document.querySelector('table.game-table');
    table.addEventListener('click', (e) => {
        let check = e.target.classList.contains('active-cell');
        if(check === false){
            if(table.classList.contains('orange')) {
                e.target.style.backgroundColor = '#fa8f2a';
                e.target.classList.add('active-cell', 'orange');
            } else {
                e.target.style.backgroundColor = '#3FBAC2';
                e.target.classList.add('active-cell', 'blue');
            }
            if(checkWin()) {
                console.log('win ', table.classList.contains('orange') ? 'orange': 'blue');
            }
            else {
                if (document.querySelectorAll('table .active-cell').length === 9) {
                    console.log('draw');
                }
            }
            table.classList.toggle('orange');
        }
    });
};


printInfo();
gameLogic();
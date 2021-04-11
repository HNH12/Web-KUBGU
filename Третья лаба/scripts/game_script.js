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
    let menuRepeat = document.querySelector('.repeate-game');
    let resultWindow = document.querySelector('.result');
    let button = document.querySelector('.restart-game');

    table.classList.remove('orange');
    for(let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active-cell');
        cells[i].classList.remove('blue');
        cells[i].classList.remove('orange');
    }

    menuRepeat.style.zIndex = '-1';
    menuRepeat.style.opacity = '0';

    table.style.zIndex = '1';
    table.style.opacity = '1';

    resultWindow.classList.remove('win-orange');
    resultWindow.classList.remove('win-blue');
    resultWindow.classList.remove('draw');

    button.classList.remove('win-orange');
    button.classList.remove('win-blue');
    button.classList.remove('draw');

    resultWindow.innerHTML = '';
};


let getResultGame = function(color) {
    let menuRepeat = document.querySelector('.repeate-game');
    let resultWindow = document.querySelector('.result');
    let button = document.querySelector('.restart-game');

    let table = document.querySelector('.game-table');
    table.style.zIndex = '0';
    table.style.opacity = '0.1';

    menuRepeat.style.zIndex = '1';
    menuRepeat.style.opacity = '1';

    if(color === 'orange') {
        let result = document.createTextNode('Победа');
        resultWindow.classList.add('win-orange');
        resultWindow.appendChild(result);
        button.classList.add('win-orange');
    } else {
        if(color === 'blue') {
            let result = document.createTextNode('Победа');
            resultWindow.classList.add('win-blue');
            resultWindow.appendChild(result);
            button.classList.add('win-blue');
        } else {
            let result = document.createTextNode('Ничья');
            resultWindow.classList.add('draw');
            resultWindow.appendChild(result);
            button.classList.add('draw');
        }
    }
};


let gameLogic = function() {
    let table = document.querySelector('table.game-table');
    table.addEventListener('click', (e) => {
        let check = e.target.classList.contains('active-cell');
        if(check === false){
            if(table.classList.contains('orange')) {
                e.target.classList.add('active-cell', 'orange');
            } else {
                e.target.classList.add('active-cell', 'blue');
            }
            if(checkWin()) {
                table.classList.contains('orange') ? getResultGame('orange'): getResultGame('blue');
            }
            else {
                if (document.querySelectorAll('table .active-cell').length === 9) {
                    getResultGame('');
                }
            }
            table.classList.toggle('orange');
        }
    });
};


let onLoadPage = function() {

}


printInfo();
gameLogic();
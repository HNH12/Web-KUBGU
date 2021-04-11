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


let gameLogic = function() {
    let table = document.querySelector('table.game-table');
    table.addEventListener('click', (e) => {
        let check = e.target.classList.contains('active-cell');
        if(check === false){
            if(table.classList.contains('orange')) {
                e.target.style.backgroundColor = '#fa8f2a';
            } else {
                e.target.style.backgroundColor = '#3FBAC2';
            }
            e.target.classList.add('active-cell');
            table.classList.toggle('orange');
        }
    });
};


printInfo();
gameLogic();
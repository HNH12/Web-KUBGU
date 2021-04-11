let firstTask = function() {
	setInterval(() => {
		let currentDate = new Date();
		let taskDiv = document.querySelector("div.task-item.first");
		let newElement = document.createElement("p");
		let dateRightFormat = currentDate.toLocaleDateString() + ' ' + currentDate.getHours() + ":"
			+ currentDate.getMinutes() + ":" + currentDate.getSeconds();
		newElement.appendChild(document.createTextNode('Текущая дата: ' + dateRightFormat));
		taskDiv.innerHTML = newElement.innerHTML;
	}, 100);

};


let calendar = function() {
	let currentDate = new Date();
    let lastDayMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    let nameLastDayMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDayMonth).getDay();
    let nameFirstDayMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let calendar = '<tr>';
    let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    for(let i = 0; i < days.length; i++) {
    	if(i > 4) {
    		calendar += '<td class="weekend">' + days[i];
    	} else {
    		calendar += '<td>' + days[i];
    	}
    }
    calendar += '<tr>';

	if (nameFirstDayMonth != 0) {
	  for(let i = 1; i < nameFirstDayMonth; i++) 
	  	calendar += '<td>';
	} else {
	  for(let i = 0; i < 6; i++) 
	  	calendar += '<td>';
	}

	for(let i = 1; i <= lastDayMonth; i++) {
	  if (i != currentDate.getDate()) {
	  	if(new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() == 0 || 
	  		new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() == 6)
	    	calendar += '<td class="weekend">' + i;
	    else
	    	calendar += '<td>' + i;
	  } else {
	    calendar += '<td id="today">' + i;
	  }

	  if (new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() == 0)
	    calendar += '<tr>';
	}

	if (nameLastDayMonth != 0) {
  		for(var  i = nameLastDayMonth; i < 7; i++) calendar += '<td>';
	}

	let fullDate = document.createElement("div");
	let currentMonth = document.createElement("p");
	let currentYear = document.createElement("p");

	currentMonth.innerHTML = month[currentDate.getMonth()];
	currentYear.innerHTML = currentDate.getFullYear();

	fullDate.appendChild(currentMonth);
	fullDate.appendChild(currentYear);
	fullDate.classList.add('full-date');

	document.querySelector('.task-item.second').prepend(fullDate);

	document.querySelector('.task-item.second table').innerHTML = calendar;
};


let correctHeight = function(e) {
	nextSibling = e.nextElementSibling;
	if(nextSibling.style.maxHeight) {
		nextSibling.style.maxHeight = null;
	} else {
		nextSibling.style.maxHeight = nextSibling.scrollHeight + "px";
	}
};


let fourthTask = function(elem) {
	setTimeout(function() {
		elem.classList.toggle('active');
	}, 100);
};


let sixthTask = function() {
	document.querySelector('table.table-task-sixth').addEventListener('dblclick', function(e) {
		let currentImg = e.target;
		let siblingImg;
		if(currentImg.parentNode.nextElementSibling !== null) {
			siblingImg = currentImg.parentNode.nextElementSibling.firstElementChild;
		}
		else {
			siblingImg = currentImg.parentNode.previousElementSibling.firstElementChild
		}
		currentImg.src = siblingImg.src;
	});
};


let getNextSiblings = function(elem) {
	let arrSibling = [];
	while(elem.nextElementSibling) {
		arrSibling.push(elem.nextElementSibling);
		elem = elem.nextElementSibling;
	}
	return arrSibling;
};


let liEventHandler = function (event) {
	event.target.style.opacity = '0';
	let nextSiblings = getNextSiblings(event.target);
	let coordYDeletedItem = event.target.getBoundingClientRect().y;
	let distanceNearests = (nextSiblings.length == 0 ? undefined : nextSiblings[0].getBoundingClientRect().y - coordYDeletedItem);

	for(let i = 0; i < nextSiblings.length; i++) {
		nextSiblings[i].style.transition = 'transform 0.4s linear';
		nextSiblings[i].style.transform = `translateY(${-distanceNearests}px)`;
	}

	setTimeout(function() {
		event.target.style.display = 'none';
		for(let i = 0; i < nextSiblings.length; i++) {
			nextSiblings[i].style.transition = 'opacity 0.2s linear';
			nextSiblings[i].style.transform = "";
		}		
		let parent = event.target.parentNode;
		event.target.remove();
		if(parent.children.length == 0) {
			parent.innerHTML = 'Сладости закончились';
		}
	}, 420);
};


let seventhTask = function() {
	document.querySelector("div.sweety-title").addEventListener('click', function(e) {
		e.target.classList.toggle('active');
		correctHeight(e.target);
		e.target.nextElementSibling.classList.toggle('active');
		let mainSibling = e.target.parentNode.parentNode.previousElementSibling;
		console.log(mainSibling, mainSibling.nextElementSibling);
		mainSibling.nextElementSibling.style.maxHeight = mainSibling.nextElementSibling.scrollHeight + "px";
	})

	let arrLi = document.querySelector('ul.sweety-menu').children;
	for(let i = 0; i < arrLi.length; i++) {
		arrLi[i].addEventListener('click', liEventHandler, false);
	}
};


let checkEmail = function(userEmail) {
	const rexEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	return rexEmail.test(userEmail);
};


let checkLogin = function(userLogin) {
	const rexLogin = /[\w\d]{3,}$/;
	return rexLogin.test(userLogin);
}


let validateInput = function() {
	let email = document.getElementById('email');
	let login = document.getElementById('login');
	let password = document.getElementById('password');
	let repeatPassword = document.getElementById('repeat-password');
	let passport = document.getElementById('passport');
	let polis = document.getElementById('polis');
	let phoneNumber = document.getElementById('phone');

	email.onfocus = function() {
		if(this.value != '') {
			this.classList.remove('wrong-data');
			this.previousElementSibling.style.visibility = 'hidden';
		}
	}

	email.onblur = function() {
		if(this.value != '') {
			if(!checkEmail(this.value)) {
				this.classList.add('wrong-data');
				this.previousElementSibling.style.visibility = 'visible';
			}
		}
	}

	login.onfocus = function() {
		if(this.value != '') {
			if(!checkLogin(this.value)) {
				this.classList.remove('wrong-data');
				this.previousElementSibling.style.visibility = 'hidden';
			}
		}
	}

	login.onblur = function () {
		if(this.value != '') {
			if(!checkLogin(this.value)) {
				this.classList.add('wrong-data');
				this.previousElementSibling.style.visibility = 'visible';
			}
		}
	}

	password.onblur = function() {
		if(password.value != '') {
			if(repeatPassword.value!='' && repeatPassword.value != this.value) {
				this.classList.add('wrong-data');
				repeatPassword.classList.add('wrong-data');
				this.previousElementSibling.style.visibility = 'visible';
			}
		}
	}

	password.onfocus = function() {
		repeatPassword.classList.remove('wrong-data');
		this.classList.remove('wrong-data');
		this.previousElementSibling.style.visibility = 'hidden';
	}

	repeatPassword.onblur = function() {
		if(this.value != '') {
			if(password.value!='' && password.value != this.value) {
				this.classList.add('wrong-data');
				password.classList.add('wrong-data');
				password.previousElementSibling.style.visibility = 'visible';
			}
		}
	}

	repeatPassword.onfocus = function() {
		password.classList.remove('wrong-data');
		this.classList.remove('wrong-data');
		password.previousElementSibling.style.visibility = 'hidden';
	}

};


let validateForm = function() {
	let email = document.getElementById('email');
	let login = document.getElementById('login');
	let password = document.getElementById('password');
	let repeatPassword = document.getElementById('repeat-password');
	let passport = document.getElementById('passport');
	let polis = document.getElementById('polis');
	let phoneNumber = document.getElementById('phone');

	let allObj = [email, login, password, repeatPassword, passport, polis, phoneNumber];
	let check = true;

	for(let i = 0; i < allObj.length; i++) {
		if(allObj[i].value == '' || allObj[i].classList.contains('wrong-data'))
			check = false;
	}

	if (!check) alert('Заполните форму регистрации верно');
	return check;
};


let viewPassword = function () {
	let icoPassword = document.querySelectorAll('.fa.fa-eye-slash');

	for(let i = 0; i < icoPassword.length; i++) {
		icoPassword[i].addEventListener('click', function (e) {
			e.target.classList.toggle('fa-eye-slash');
			e.target.classList.toggle('fa-eye');
			e.target.previousElementSibling.type == 'text' ?
				e.target.previousElementSibling.type = 'password'
				: e.target.previousElementSibling.type = 'text';
		});
	}
};


let setListenersToImg = function() {
	let arrBlocks = document.getElementsByClassName('container');
	for(let i = 0; i< arrBlocks.length; i++) {
		arrBlocks[i].addEventListener("click", function(e) {
			fourthTask(e.target);
		});
	}

	document.querySelector('.task-item.ninth img').addEventListener('mouseover', (e) => {
		e.target.style.opacity = '0';
	});

	document.querySelector('.task-item.ninth img').addEventListener('mouseout', (e) => {
		e.target.style.opacity = '1';
	});
};


let clearForm = function() {
	let button = document.querySelector('div.button-form');
	button.addEventListener('click', function () {
		let form = document.querySelector('form');
		let email = document.getElementById('email');
		let login = document.getElementById('login');
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeat-password');

		let allObj = [email, login, password];
		for(let i = 0; i < allObj.length; i++) {
			allObj[i].classList.remove('wrong-data');
			allObj[i].previousElementSibling.style.visibility = 'hidden';
		}
		repeatPassword.classList.remove('wrong-data');

		form.reset();
		button.classList.add('button-form-click');
		setTimeout(function() {
			button.classList.remove('button-form-click');
		}, 600);
	});
};


let prepareLoadPage = function() {
	let arrItem = document.getElementsByClassName('item');
	for (let i = 0; i < arrItem.length; i++) {
		setTimeout(() => {
			arrItem[i].style.transform = "translateX(0)";
			arrItem[i].style.opacity = '1';
		}, 100*i);
	}

	for(let i = 0; i < arrItem.length; i++) {
		arrItem[i].addEventListener("click", function(e) {
			e.target.classList.toggle('active');

			if(e.target.classList.contains('fifth') && e.target.classList.contains('active')) {
				setTimeout(function() {
					while(true) {
						let text = prompt('Введите текст блока (Esc для отмены)');
						if(text == null) {
							break;
						}
						let newElement = document.createElement("div");
						newElement.innerHTML = text;
						e.target.nextElementSibling.firstElementChild.appendChild(newElement);
					}
				correctHeight(e.target);
				e.target.nextElementSibling.classList.toggle('active');
				}, 250);
			} else {
				if(e.target.classList.contains('eighth') && e.target.classList.contains('active')) {
					correctHeight(e.target);
					e.target.nextElementSibling.classList.toggle('active');
					setTimeout(function() {
						e.target.nextElementSibling.firstElementChild.firstElementChild.style.opacity = '1';
					}, 500);
				}
				else {
					if(e.target.classList.contains('eighth') && !e.target.classList.contains('active')) {
						e.target.nextElementSibling.firstElementChild.firstElementChild.style.opacity = '0'
					}
					correctHeight(e.target);
					e.target.nextElementSibling.classList.toggle('active');
				}
			}
		});
	}

	setListenersToImg();
};


calendar();
firstTask();
sixthTask();
seventhTask();
prepareLoadPage();
validateInput();
viewPassword();
clearForm();
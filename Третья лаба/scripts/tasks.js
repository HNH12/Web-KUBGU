let firstTask = function() {
	let currentDate = new Date();
	let taskDiv = document.querySelector("div.task-item.first");
	let newElement = document.createElement("p");
	let dateRightFormat = currentDate.toLocaleDateString();
	newElement.appendChild(document.createTextNode('Текущая дата: ' + dateRightFormat));
	taskDiv.appendChild(newElement);
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
	let table = document.querySelectorAll('table.table-task-sixth td');
	for(let i = 0; i < table.length; i++) {
		table[i].addEventListener('dblclick', function(e) {
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
	}
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
	let distanceNearests = nextSiblings.length == 0 ? undefined : nextSiblings[0].getBoundingClientRect().y - coordYDeletedItem;

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
let firstTask = function() {
	let currentDate = new Date();
	let taskDiv = document.querySelector("div.task-item.first");
	let newElement = document.createElement("p");
	let dateRightFormat = currentDate.toLocaleDateString();
	newElement.appendChild(document.createTextNode(dateRightFormat));
	taskDiv.appendChild(newElement);
};


let secondTask = function() {

};


let correctHeight = function(e) {
	nextSibling = e.target.nextElementSibling;
	if(nextSibling.style.maxHeight) {
		nextSibling.style.maxHeight = null;
	} else {
		nextSibling.style.maxHeight = nextSibling.scrollHeight + "px";
	}
	nextSibling.classList.toggle('active');
};


let fourthTask = function(elem) {
	setTimeout(function() {
		elem.target.firstChild.classList.toggle('active');
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


let seventhTask = function() {
	document.querySelector("div.sweety-title").addEventListener('click', function(e) {
		console.log(e.target);
	});
};


firstTask();
sixthTask();
seventhTask();


document.getElementsByClassName('item').forEach(
	addEventListener("click", function(e) {
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
		correctHeight(e);
		}, 250);
	} else {
		correctHeight(e);
	}
}));


document.getElementsByClassName('container').forEach(
	addEventListener("click", function(e) {
	fourthTask(e.target);
}));
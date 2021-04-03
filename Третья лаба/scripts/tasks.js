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


let fourthTask = function(elem) {
	setTimeout(function() {
		elem.target.firstChild.classList.toggle('active');
	}, 100);
};


firstTask();

document.getElementsByClassName('item').forEach(
	addEventListener("click", function(e) {
	e.target.classList.toggle('active');

	if(e.target.classList.contains('fifth')) {
		if(e.target.classList.contains('active')) {
			setTimeout(function() {
				while(true) {
					let text = prompt('Введите текст блока (Esc для отмены)');
					if(text == null) {
						break;
					}
					let newElement = document.createElement("div");
					newElement.appendChild(text);
					e.target.nextSibling.firstChild.appendChild(newElement);
				}
			}, 250);
		}
	}

	(function() {
		nextSibling = e.target.nextElementSibling;
		if(nextSibling.style.maxHeight) {
			nextSibling.style.maxHeight = null;
		} else {
			nextSibling.style.maxHeight = nextSibling.scrollHeight + "px";
		}
		nextSibling.classList.toggle('active');
	})();
}));


document.getElementsByClassName('container').forEach(
	addEventListener("click", function(e) {
	fourthTask(e.target);
}));
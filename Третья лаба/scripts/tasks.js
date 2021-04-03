document.getElementsByClassName('item').forEach(addEventListener("click", function(e) {
	e.target.classList.toggle('active');

	(function() {
		nextSibling = e.target.nextElementSibling;
		nextSibling.classList.toggle('active');
		if(nextSibling.style.maxHeight) {
			nextSibling.style.maxHeight = null;
		} else {
			nextSibling.style.maxHeight = nextSibling.scrollHeigth + "px";
		}
	})();
}))
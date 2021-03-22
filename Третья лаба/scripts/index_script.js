function set_display(obj) {
	state = obj.style.display; 
	if (state =='') obj.style.display='none';
	else obj.style.display=''
}


function set_opacity(obj) {
	state = obj.style.opacity; 
	if (state =='') obj.style.opacity = '0.0';
	else obj.style.opacity=''
}


function get_siblings(obj) {
	let siblings = [];
    let sibling = obj;
    while (sibling.previousSibling) {
        sibling = sibling.previousSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    sibling = obj;
    while (sibling.nextSibling) {
        sibling = sibling.nextSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    siblings.forEach((value) => {
    })

    setTimeout(function () { obj.classList.toggle('active') }, 100);
}


document.getElementById("first").addEventListener("click", (e) => {
	get_siblings(event.target);
})

document.getElementById("second").addEventListener("click", (e) => {
	console.log(event.target.classList.toggle('active'))
	get_siblings(event.target)
})

document.getElementById("third").addEventListener("click", (e) => {
	console.log(event.target.classList.toggle('active'))
	get_siblings(event.target)
})


document.getElementById("fourth").addEventListener("click", (e) => {
	console.log(event.target.classList.toggle('active'))
	get_siblings(event.target)
})
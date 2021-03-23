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
    	set_opacity(value)
    })

    setTimeout(function () { siblings.forEach((value) => {
    	set_display(value)
    }) }, 400);

    setTimeout(function () { obj.classList.toggle('active') }, 410);
}


document.getElementById("first").addEventListener("mouseon", (e) => {
	get_siblings(event.target);
})
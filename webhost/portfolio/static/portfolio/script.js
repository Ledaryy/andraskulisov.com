
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = defaultStyle
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = blue
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = green
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = purple
	}

	localStorage.setItem('theme', mode)
}

function hoverMap(element) {
	target = document.getElementById('london-map')
	target.setAttribute('src', mapGif);
  }
  
  function unhoverMap(element) {
	target = document.getElementById('london-map')
	target.setAttribute('src', mapPng);
  }
function hoverNetwork(element) {
	target = document.getElementById('network')
	target.setAttribute('src', networkGif);
  }
  
  function unhoverNetwork(element) {
	target = document.getElementById('network')
	target.setAttribute('src', networkPng);
  }

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
event.preventDefault();
var send_button = document.getElementById("submit-btn");
var data = new FormData(event.target);
fetch("https://formspree.io/f/xyyoobke", {
	method: "POST",
	body: data,
	headers: {
		'Accept': 'application/json'
	}
}).then(response => {
	if (response.ok) {
	send_button.value = "Thanks for your submission!";
	send_button.disabled = true;
	send_button.style.color = "#00ff00";
	form.reset()
	return false;
	} else {
	response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
		send_button.value = data["errors"].map(error => error["message"]).join(", ")
		} else {
		send_button.value = "Oops! There was a problem submitting your form"
		}
	return false;
	})
	}
}).catch(error => {
	send_button.value = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)

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
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
	method: form.method,
	body: data,
	headers: {
		'Accept': 'application/json'
	}
}).then(response => {
	if (response.ok) {
	status.innerHTML = "Thanks for your submission!";
	form.reset()
	} else {
	response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
		status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
		} else {
		status.innerHTML = "Oops! There was a problem submitting your form"
		}
	})
	}
}).catch(error => {
	status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)
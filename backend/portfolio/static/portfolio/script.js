
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
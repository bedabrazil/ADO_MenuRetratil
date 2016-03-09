window.onload = function(){
	document.getElementById("menu-clicavel").addEventListener( 'click' , mudarClasse );
}

function mudarClasse(){
	var menu = document.getElementById("menu");
	var classe = menu.getAttribute("class");
	if(classe === "esconder"){
		menu.setAttribute("class", "mostrar");
	}else{
		menu.setAttribute("class", "esconder");
	}
	console.log(document.getElementById("menu").className)
}

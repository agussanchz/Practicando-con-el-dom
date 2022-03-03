alert("Bienvenidos a AsPhone")



let inicio = parseInt(prompt(`Menu de navegacion: \n 1- Productos \n 2- Salir`))
const productos = ["iPhone 7 plus", "iPhone X", "iPhone XR", "iPhone 13"]


function despedida(){
	let despedida = document.createElement("div")
	despedida.innerHTML = `<h1> Gracias por visitar AsPhone! </h1>`
	document.body.appendChild(despedida)
}

function eliminar(){
	let eliminar = document.querySelector("#productos-phone")
	eliminar.remove()
}

if (inicio == 1){
	let div = document.querySelector("#productos-phone")

	for(const producto of productos){
		let li = document.createElement("Li")
		li.innerHTML = producto 
		div.appendChild(li)
	}

	despedida()
}
else if (inicio == 2){
	eliminar()
	despedida()
	alert("Gracias por visitar nuestra pagina! Que tenga buen dia :D")
}
else{
	eliminar()
	despedida()
}



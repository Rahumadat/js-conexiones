// console.log("page loaded...");

//elimina elemento
function eliminarElemento(elemento) {
	let padre = elemento.parentNode;
    let abuelo = padre.parentNode;
    console.log(padre,abuelo);
    abuelo.remove();
}

let elementos = document.querySelectorAll(".icon");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click',function(){
        eliminarElemento(elementos[i])
    });
}
//**************************************** */
//**************************************** */
//cambia de nombre
function cambioNombre() {
    let nombre = document.querySelector(".card-body h1");
    nombre.innerHTML = "Juana Doe";
}

let miLink = document.querySelector(".card-body p a");

miLink.addEventListener("click", function () {cambioNombre(); })

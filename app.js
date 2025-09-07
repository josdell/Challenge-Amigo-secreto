
let listaDeNombres = []

// En esta funcion validamos que se ingrese un nombre valido, que no ingresen numeros, mostrar los nombres ingresados por el usuario en la pagina
function agregarAmigo() {
    let nombreDeUsuario = document.getElementById("nombreDeUsuario").value.trim();

    if (nombreDeUsuario === "") {
        alert("Por favor ingresa un nombre valido")
        return
    };

    if (/\d/.test(nombreDeUsuario)) {
        alert("No se permiten números, solo nombres");
        return;
    };


    let listadoUsuario = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreDeUsuario;
    listadoUsuario.appendChild(nuevoElemento);

    limpiarCaja();
    listaDeNombres.push(nombreDeUsuario)
    console.log(listaDeNombres)
};

//Esta funcion sirve para limpiar la caja despues de escribir 
function limpiarCaja() {
    document.querySelector("#nombreDeUsuario").value = "";
};

//Esta funcion sirve para sortear el nombre y asegurarnos que al menos tengamos dos nombres para sortear
function sortearAmigo() {
    if (listaDeNombres.length < 2) {
        alert("Agrega al menos 2 amigos para hacer el sorteo.");
        return;
    };

    let nombreSorteado = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
};

////En esta parte se vacia el Arreglo, la lista y se limpia el resultado para poder iniciar un nuevo sorteo
function reiniciarJuego() {
    listaDeNombres = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    console.log("Juego reiniciado ✅");
};






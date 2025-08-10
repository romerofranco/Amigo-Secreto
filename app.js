// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenara el nombre  de los amigos ingresados
let listaNombreAmigos = [];
let numeroDeAmigos = prompt("Ingrese el numero de amigos que participaran");
let generarIndiceAleatorio = Math.floor(Math.random() * numeroDeAmigos) + 1;
console.log(generarIndiceAleatorio);
//Capturar el valor del campo de entrada y alerta caja vacia
function agregarAmigo() {
  let valorCaja = document.querySelector("#amigo");

  if (valorCaja.value === "") {
    alert("Por favor, inserte un nombre");
  } else {
    //Agregamos los nombres al array
    listaNombreAmigos.push(valorCaja.value);
    //Limpiamos la caja
    valorCaja.value = "";
    actualizarLista();
  }
}

function actualizarLista() {
  //Selecciona la lista en donde estan los amigos y
  let lista = document.getElementById("listaAmigos");
  //limpia la lista existente para que no haya repetidos
  lista.innerHTML = "";

  for (let i = 0; i < listaNombreAmigos.length; i++) {
    //creamos un li
    let mostrarLista = document.createElement("li");
    mostrarLista.textContent = listaNombreAmigos[i];

    lista.appendChild(mostrarLista);
  }
}

actualizarLista();

function sortearAmigo() {
  let compruebaVacio = document.getElementById("amigo");
  if (compruebaVacio.value === "") {
    alert("La Lista estas vacia, por favor ingrese un nombre.");
  }
}

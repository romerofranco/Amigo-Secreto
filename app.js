// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenara el nombre  de los amigos ingresados
let listaNombreAmigos = [];
let valorCaja = document.querySelector("#amigo"); //'amigo' es el  id  del input
let lista = document.getElementById("listaAmigos"); // id del <ul> , seleccion la lista en donde estan los amigos
let resultado = document.getElementById("resultado"); // id del <ul> para mostrar el resultado

//Capturar el valor del campo de entrada y alerta caja vacia
function agregarAmigo() {
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

//Actualiza la lista de nombres en el HTML
function actualizarLista() {
  //limpia la lista existente para que no haya repetidos
  lista.innerHTML = "";
  //recorremos el array con los nombres y creamos los li
  for (let i = 0; i < listaNombreAmigos.length; i++) {
    //creamos un li
    let creandoNombres = document.createElement("li");
    creandoNombres.textContent = listaNombreAmigos[i];
    lista.appendChild(creandoNombres);
  }
}

//Boton Sortear Amigo
function sortearAmigo() {
  if (listaNombreAmigos.length === 0) {
    alert("La Lista estas vacia, por favor ingrese un nombre.");
  } else {
    let indiceAleatorio = Math.floor(Math.random() * listaNombreAmigos.length);
    let amigoSorteado = listaNombreAmigos[indiceAleatorio];
    resultado.textContent = `El amigo Secreto es: ${amigoSorteado}`; 
  }
}

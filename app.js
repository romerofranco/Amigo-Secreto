// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenara el nombre  de los amigos ingresados
let listaNombreAmigos = [];

//Capturar el valor del campo de entrada y alerta caja vacia
function agregarAmigo() {
  let valorCaja = document.querySelector("#amigo");
  if (valorCaja.value === "") {
    alert("Por favor, inserte un nombre");
  } else {
    //Agregamos los nombres al array
    let nombreAmigos = document.getElementById("amigo").value;
    listaNombreAmigos.push(nombreAmigos);
    //Limpiamos la caja
    document.getElementById("amigo").value = "";
    console.log(listaNombreAmigos);
  }
}

function actualizarLista() {
  //Selecciona la lista en donde estan los amigos y limpia la lista existente para que no haya repetidos
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}

function recorrerListaYCrearElementos() {
  actualizarLista();
  for (let i = 0; i < listaNombreAmigos.length; i++) {
    let mostrarLista = document.createElement("li");
    li.textContent = listaNombreAmigos[i];
    lista.appendChild(li);
  }``
}

recorrerListaYCrearElementos();

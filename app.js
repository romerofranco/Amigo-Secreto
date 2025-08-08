// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenara el nombre  de los amigos ingresados
let listaAmigos = [];

//Capturar el valor del campo de entrada y alerta caja vacia
function agregarAmigo() {
  let valorCaja = document.querySelector("#amigo");
  if (valorCaja.value === "") {
    alert("Por favor, inserte un nombre");
  } else {
    //Agregamos los nombres al array
    let nombreAmigos = document.getElementById("amigo").value;
    listaAmigos.push(nombreAmigos);
    //Limpiamos la caja
    document.getElementById("amigo").value = "";
    console.log(listaAmigos);
  }
}

//Actualizar el array de amigos, si el valor es valido añadirlo a la variable amigos con el metodo .push

let cantVisitas = localStorage.getItem("visitas") || 0;

function unContador(){
    cantVisitas = JSON.parse(cantVisitas) + 1;
    console.log(cantVisitas);
    localStorage.setItem("visitas", cantVisitas);
}

unContador();

var usuario = getElementById ("usuario");

function Identificarse() {
    usuario = prompt("Ingrese su nombre");
    localStorage.setItem("Nombreusuario", usuario);
    document.getElementById('usuario').innerHTML = "¡Hola " + usuario + "!"; 
}

Identificarse();


    











function mostrar(id){

document.getElementById("inicio").style.display = "none";

let secciones = document.querySelectorAll(".contenido");

secciones.forEach(function(seccion){
    seccion.style.display = "none";
});

document.getElementById(id).style.display = "block";

}

/* TABLA INTERACTIVA */

function mostrarEjemplo(id){

let ejemplos = document.querySelectorAll(".ejemplo");

let actual = document.getElementById(id);

if(actual.style.display === "block"){
    actual.style.display = "none";
    return;
}

ejemplos.forEach(function(ejemplo){
    ejemplo.style.display = "none";
});

actual.style.display = "block";

}

/* BARRA DE PROGRESO */

function actualizarProgreso(){

let respondidas = 0;

for(let i = 1; i <= 10; i++){

    if(document.querySelector('input[name="p'+i+'"]:checked')){
        respondidas++;
    }

}

let porcentaje = (respondidas / 10) * 100;

document.getElementById("porcentaje").textContent =
porcentaje + "%";

}

document.addEventListener("change", function(e){

if(e.target.type === "radio"){
    actualizarProgreso();
}

});

/* CALIFICAR EXAMEN */

function calificarExamen(){

let correctas = 0;

for(let i = 1; i <= 10; i++){

    let respuesta =
    document.querySelector('input[name="p'+i+'"]:checked');

    if(!respuesta){

        alert(
        "Debes responder todas las preguntas antes de calificar."
        );

        return;
    }

    if(respuesta.value == "1"){
        correctas++;
    }
}

let nota = (correctas * 5 / 10).toFixed(1);

document.getElementById("resultado").innerHTML =

"<h3>Resultado Final</h3>" +

"<p>Respuestas correctas: " +
correctas +
" de 10</p>" +

"<p>Nota final: " +
nota +
"</p>";

if(correctas < 6){

    alert("Vas muy mal");

}

localStorage.setItem(
    "resultadoWord",
    "Correctas: " +
    correctas +
    "/10 - Nota: " +
    nota
);

mostrarResultadoGuardado();

}

/* RESULTADO GUARDADO */

function mostrarResultadoGuardado(){

let resultado =
localStorage.getItem("resultadoWord");

if(resultado){

    document.getElementById("guardado").innerHTML =
    resultado;

}

}

window.onload = function(){

mostrarResultadoGuardado();

}
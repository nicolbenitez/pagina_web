// Mostrar sección seleccionada
function mostrar(id) {
    const inicio = document.getElementById("inicio");
    const secciones = document.querySelectorAll(".contenido");
    
    // Ocultar todo
    inicio.style.display = "none";
    secciones.forEach(sec => sec.style.display = "none");
    
    // Mostrar lo que corresponde
    document.getElementById(id).style.display = "block";
    
    // Subir suavemente
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mostrar ejemplos de la tabla
function mostrarEjemplo(id) {
    const ejemplos = document.querySelectorAll(".ejemplo");
    const actual = document.getElementById(id);
    
    if (actual.style.display === "block") {
        actual.style.display = "none";
        return;
    }
    
    ejemplos.forEach(ej => ej.style.display = "none");
    actual.style.display = "block";
}

// Actualizar progreso del examen
function actualizarProgreso() {
    let respondidas = 0;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelector(`input[name="p${i}"]:checked`)) {
            respondidas++;
        }
    }
    const porcentaje = Math.round((respondidas / 10) * 100);
    document.getElementById("porcentaje").textContent = porcentaje + "%";
}

document.addEventListener("change", e => {
    if (e.target.type === "radio") actualizarProgreso();
});

// Calificar examen
function calificarExamen() {
    let correctas = 0;
    for (let i = 1; i <= 10; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        if (!respuesta) {
            alert("⚠️ Debes responder todas las preguntas primero.");
            return;
        }
        if (respuesta.value === "1") correctas++;
    }
    const nota = (correctas * 5 / 10).toFixed(1);
    document.getElementById("resultado").innerHTML = `
        <h3>📋 Resultado Final</h3>
        <p>Respuestas correctas: <strong>${correctas}</strong> de 10</p>
        <p>Nota final: <strong>${nota}</strong></p>
    `;
    if (correctas < 6) alert("💡 ¡Puedes mejorar! Revisa el contenido e intenta de nuevo.");
    else alert("🎉 ¡Muy buen trabajo!");
    localStorage.setItem("resultadoWord", `Correctas: ${correctas}/10 - Nota: ${nota}`);
    mostrarResultadoGuardado();
}

// Mostrar último resultado guardado
function mostrarResultadoGuardado() {
    const guardado = localStorage.getItem("resultadoWord");
    document.getElementById("guardado").textContent = guardado || "Aún no hay resultados guardados";
}

// Al cargar la página
window.onload = () => {
    mostrarResultadoGuardado();
    actualizarProgreso();
    // Mostrar inicio al abrir
    mostrar("inicio");
};// Mostrar sección seleccionada
function mostrar(id) {
    const inicio = document.getElementById("inicio");
    const secciones = document.querySelectorAll(".contenido");
    
    // Ocultar todo
    inicio.style.display = "none";
    secciones.forEach(sec => sec.style.display = "none");
    
    // Mostrar lo que corresponde
    document.getElementById(id).style.display = "block";
    
    // Subir suavemente
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mostrar ejemplos de la tabla
function mostrarEjemplo(id) {
    const ejemplos = document.querySelectorAll(".ejemplo");
    const actual = document.getElementById(id);
    
    if (actual.style.display === "block") {
        actual.style.display = "none";
        return;
    }
    
    ejemplos.forEach(ej => ej.style.display = "none");
    actual.style.display = "block";
}

// Actualizar progreso del examen
function actualizarProgreso() {
    let respondidas = 0;
    for (let i = 1; i <= 10; i++) {
        if (document.querySelector(`input[name="p${i}"]:checked`)) {
            respondidas++;
        }
    }
    const porcentaje = Math.round((respondidas / 10) * 100);
    document.getElementById("porcentaje").textContent = porcentaje + "%";
}

document.addEventListener("change", e => {
    if (e.target.type === "radio") actualizarProgreso();
});

// Calificar examen
function calificarExamen() {
    let correctas = 0;
    for (let i = 1; i <= 10; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        if (!respuesta) {
            alert("⚠️ Debes responder todas las preguntas primero.");
            return;
        }
        if (respuesta.value === "1") correctas++;
    }
    const nota = (correctas * 5 / 10).toFixed(1);
    document.getElementById("resultado").innerHTML = `
        <h3>📋 Resultado Final</h3>
        <p>Respuestas correctas: <strong>${correctas}</strong> de 10</p>
        <p>Nota final: <strong>${nota}</strong></p>
    `;
    if (correctas < 6) alert("💡 ¡Puedes mejorar! Revisa el contenido e intenta de nuevo.");
    else alert("🎉 ¡Muy buen trabajo!");
    localStorage.setItem("resultadoWord", `Correctas: ${correctas}/10 - Nota: ${nota}`);
    mostrarResultadoGuardado();
}

// Mostrar último resultado guardado
function mostrarResultadoGuardado() {
    const guardado = localStorage.getItem("resultadoWord");
    document.getElementById("guardado").textContent = guardado || "Aún no hay resultados guardados";
}

// Al cargar la página
window.onload = () => {
    mostrarResultadoGuardado();
    actualizarProgreso();
    // Mostrar inicio al abrir
    mostrar("inicio");
};

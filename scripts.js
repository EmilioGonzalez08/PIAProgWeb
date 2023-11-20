function mostrarOpciones() {
    var genderSelect = document.getElementById("gender");
    var hombreOptions = document.getElementById("hombre-options");
    var mujerOptions = document.getElementById("mujer-options");

    // Oculta todas las opciones
    hombreOptions.style.display = "none";
    mujerOptions.style.display = "none";

    // Muestra las opciones correspondientes según la selección
    if (genderSelect.value === "hombre") {
        hombreOptions.style.display = "block";
    } else if (genderSelect.value === "mujer") {
        mujerOptions.style.display = "block";
    }
}
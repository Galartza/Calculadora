// Obtiene el elemento con el id "display" que mostrará el resultado de las operaciones.
const display = document.getElementById("display");

// Obtiene todos los elementos input con type="button" y los almacena en una variable "buttons".
const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach(function (button) {
    // Agregar evento "click" a cada botón.
    button.addEventListener("click", function () {
        // Obtiene el valor del botón que fue presionado y lo almacena en la variable "value".
        const value = button.value;

        // Si el valor del botón es "c", limpia el contenido del display.
        if (value === "c") {
            display.value = "";
        }
        // Si el valor del botón es "=", evalúa la expresión matemática del display y muestra el resultado.
        else if (value === "=") {
            display.value = eval(display.value);
        }
        // Para cualquier otro valor de botón, agrega su valor al contenido actual del display.
        else {
            display.value += value;
        }
    });
});
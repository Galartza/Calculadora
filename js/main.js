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

// Obtiene el elemento con el id "calculator".
const calculator = document.getElementById('calculator');

// Obtiene el elemento con el id "toggleDark" que se utilizará para cambiar el modo oscuro.
const toggle = document.getElementById('toggleDark');

// Obtiene el elemento body del documento.
const body = document.querySelector('body');

// Agrega un evento "click" al botón "toggle" para cambiar entre el modo oscuro y modo claro.
toggle.addEventListener('click', function () {
    if (this.classList.contains('bi-moon')) {
        // Cambiar al modo oscuro
        this.classList.remove('bi-moon');
        this.classList.add('bi-sun');
        
        // Restablecer estilos de modo claro
        body.style.background = '#001d3d';
        body.style.color = '#e9edc9';
        calculator.style.background = '#001d3d';
        calculator.style.boxShadow = '-5px 5px 21px #000c18, 5px -5px 21px #002e62';
        calculator.style.transition = '2s';
        // Resto de los estilos de modo claro ...

        // Restablecer estilos de los números para el modo oscuro
        buttons.forEach(button => {
            button.style.background = 'linear-gradient(225deg, #001a37, #001f41)';
            button.style.boxShadow = '-5px 5px 21px #000c18, 5px -5px 21px #002e62';
            button.style.color = '#e9edc9';
            button.style.transition = '2s';
        });

    } else {
        // Cambiar al modo claro
        this.classList.remove('bi-sun');
        this.classList.add('bi-moon');
        
        // Restablecer estilos de modo oscuro
        body.style.background = '#fefae0';
        body.style.color = '#003566';
        calculator.style.background = '#e9edc9';
        calculator.style.boxShadow = '-5px 5px 21px #66645a, 5px -5px 21px #ffffff';
        // Resto de los estilos de modo oscuro ...

        // Restablecer estilos de los números para el modo claro
        buttons.forEach(button => {
            button.style.background = '';
            button.style.boxShadow = '';
            button.style.color = '';
            button.style.transition = '';
        });
    }
});

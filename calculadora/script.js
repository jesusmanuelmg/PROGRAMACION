let screen = document.getElementById('result');

function input(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        alert("Expresión inválida");
        clearScreen();
    }
}

/* Funciones Científicas */
function sin() { screen.value = Math.sin(eval(screen.value)); }
function cos() { screen.value = Math.cos(eval(screen.value)); }
function tan() { screen.value = Math.tan(eval(screen.value)); }
function log() { screen.value = Math.log10(eval(screen.value)); }
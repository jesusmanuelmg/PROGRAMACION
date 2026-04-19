// Sidebar y Pestañas
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

function openTab(tabId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    // Quitar 'active' de los botones del menú
    document.querySelectorAll('.sidebar ul li').forEach(li => {
        li.classList.remove('active');
    });

    // Activar pestaña actual
    document.getElementById(tabId).classList.add('active');
    
    // El 'active' en el botón del menú se maneja por ID
    if(tabId === 'calculadora') document.getElementById('li-calc').classList.add('active');
    if(tabId === 'terminal') document.getElementById('li-term').classList.add('active');
    if(tabId === 'config') document.getElementById('li-conf').classList.add('active');

    // Cerrar menú si es móvil
    if (window.innerWidth < 768) toggleSidebar();
}

// Calculadora
const display = document.getElementById('result');

function input(v) {
    if (display.value === "ERR") display.value = "";
    display.value += v;
}

function clearScreen() { 
    display.value = ""; 
}

function del() { 
    display.value = display.value.toString().slice(0, -1); 
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let res = eval(expression);
        
        // Agregar al historial
        const history = document.getElementById('history-list');
        const entry = document.createElement('div');
        entry.innerHTML = `> ${display.value} = ${res}`;
        entry.style.borderBottom = "1px solid #111";
        entry.style.padding = "5px 0";
        history.prepend(entry);

        display.value = res;
    } catch {
        display.value = "ERR";
    }
}

function clearHistory() { 
    document.getElementById('history-list').innerHTML = ""; 
}

// Slider
let slideIndex = 1;
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
}
function plusSlides(n) { showSlides(slideIndex += n); }

// Auto-slider cada 5 segundos
setInterval(() => plusSlides(1), 5000);
showSlides(slideIndex);

// Terminal Simple
function runCommand(e) {
    if (e.key === "Enter") {
        const inputField = document.getElementById('term-input');
        const output = document.getElementById('terminal-output');
        const cmd = inputField.value.toLowerCase().trim();
        
        output.innerHTML += `<div>MORA@CORE:~$ ${cmd}</div>`;
        
        if (cmd === "help") {
            output.innerHTML += "<div>> Comandos disponibles: help, clear, status, date</div>";
        } else if (cmd === "clear") {
            output.innerHTML = "> Sistema Limpio.";
        } else if (cmd === "status") {
            output.innerHTML += "<div>> Núcleos: Online | Neón: 100% | CPU: 2%</div>";
        } else if (cmd === "date") {
            output.innerHTML += `<div>> ${new Date().toLocaleString()}</div>`;
        } else {
            output.innerHTML += `<div>> Comando '${cmd}' no reconocido.</div>`;
        }
        
        inputField.value = "";
        output.scrollTop = output.scrollHeight;
    }
}
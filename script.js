let isDarkMode = false;

function toggleMenu() {
    const menu = document.getElementById("menu-content");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? "#1c1c1c" : "#000";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
}

function changeBackgroundColor() {
    const color = prompt("Introduce el color hexadecimal que deseas (#RRGGBB):", "#ffffff");
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Color inválido. Asegúrate de usar formato hexadecimal.");
    }
}

function setColorCode(color) {
    document.getElementById("color-code").textContent = color;
}

function copyColorCode() {
    const colorCode = document.getElementById("color-code").textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert("Código copiado: " + colorCode);
    });
}

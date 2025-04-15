const colorGrid = document.getElementById("colorGrid");
const selectedColor = document.getElementById("selectedColor");

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6",
  "#E74C3C", "#2ECC71", "#3498DB", "#1ABC9C", "#E67E22",
  "#BDC3C7", "#7F8C8D", "#34495E", "#C0392B", "#8E44AD"
];

// Genera la tabla de colores
colors.forEach(color => {
  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;
  box.onclick = () => {
    selectedColor.textContent = color;
    document.body.style.background = color;
  };
  colorGrid.appendChild(box);
});

function copyColor() {
  navigator.clipboard.writeText(selectedColor.textContent).then(() => {
    alert("¡Color copiado!");
  });
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function changeBackgroundColor() {
  const color = prompt("Escribe un color hexadecimal (#RRGGBB):", "#000000");
  if (color) {
    document.body.style.backgroundColor = color;
  }
}

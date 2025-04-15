const colorPicker = document.getElementById("colorPicker");
const hexCode = document.getElementById("hexCode");
const colorsTable = document.getElementById("colorsTable");
const favorites = document.getElementById("favorites");
const recentColors = document.getElementById("recentColors");

const baseColors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#FFFFFF", "#000000", "#808080", "#800000",
  "#FFA500", "#A52A2A", "#800080", "#008080", "#008000",
  "#ADD8E6", "#90EE90", "#D3D3D3", "#FFC0CB", "#FFD700"
];

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("open");
}

function loadColors() {
  colorsTable.innerHTML = "";
  baseColors.forEach(color => {
    const div = createColorBox(color);
    colorsTable.appendChild(div);
  });
}

function createColorBox(color) {
  const div = document.createElement("div");
  div.className = "color-box";
  div.style.backgroundColor = color;
  div.onclick = () => selectColor(color);
  return div;
}

function selectColor(color) {
  colorPicker.value = color;
  hexCode.textContent = color.toUpperCase();
  saveRecent(color);
}

function copyColor() {
  navigator.clipboard.writeText(colorPicker.value);
  alert("¡Color copiado al portapapeles!");
}

function addFavorite() {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favs.includes(colorPicker.value)) {
    favs.push(colorPicker.value);
    localStorage.setItem("favorites", JSON.stringify(favs));
    showFavorites();
  }
}

function showFavorites() {
  favorites.innerHTML = "";
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  favs.forEach(color => {
    const div = createColorBox(color);
    favorites.appendChild(div);
  });
}

function exportFavorites() {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  const blob = new Blob([favs.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.download = "favoritos.txt";
  a.href = URL.createObjectURL(blob);
  a.click();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function saveRecent(color) {
  let recents = JSON.parse(localStorage.getItem("recent") || "[]");
  recents.unshift(color);
  recents = [...new Set(recents)].slice(0, 10); // últimos 10 sin repetir
  localStorage.setItem("recent", JSON.stringify(recents));
  showRecents();
}

function showRecents() {
  recentColors.innerHTML = "";
  let recents = JSON.parse(localStorage.getItem("recent") || "[]");
  recents.forEach(color => {
    const div = createColorBox(color);
    recentColors.appendChild(div);
  });
}

function filterColors() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const boxes = document.querySelectorAll("#colorsTable .color-box");
  boxes.forEach(box => {
    const color = box.style.backgroundColor.toLowerCase();
    box.style.display = color.includes(search) ? "block" : "none";
  });
}

function downloadColorImage() {
  const color = colorPicker.value;
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 200, 200);
  const link = document.createElement("a");
  link.download = `color-${color}.png`;
  link.href = canvas.toDataURL();
  link.click();
}

colorPicker.addEventListener("input", () => {
  hexCode.textContent = colorPicker.value.toUpperCase();
  saveRecent(colorPicker.value);
});

window.onload = () => {
  loadColors();
  showFavorites();
  showRecents();
  hexCode.textContent = colorPicker.value.toUpperCase();
};

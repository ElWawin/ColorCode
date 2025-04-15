const colorPicker = document.getElementById("colorPicker");
const hexCode = document.getElementById("hexCode");
const colorsTable = document.getElementById("colorsTable");
const favoritesContainer = document.getElementById("favorites");

const baseColors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#FFFFFF", "#000000", "#808080", "#800000",
  "#FFA500", "#A52A2A", "#800080", "#008080", "#008000",
  "#ADD8E6", "#90EE90", "#D3D3D3", "#FFC0CB", "#FFD700"
];

function loadColors() {
  colorsTable.innerHTML = "";
  baseColors.forEach(color => {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.background = color;
    div.onclick = () => {
      colorPicker.value = color;
      hexCode.textContent = color.toUpperCase();
    };
    colorsTable.appendChild(div);
  });
}

function copyColor() {
  navigator.clipboard.writeText(colorPicker.value);
  alert("¡Color copiado!");
}

function addFavorite() {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favs.includes(colorPicker.value)) {
    favs.push(colorPicker.value);
    localStorage.setItem("favorites", JSON.stringify(favs));
    renderFavorites();
  }
}

function renderFavorites() {
  favoritesContainer.innerHTML = "";
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  favs.forEach(color => {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.background = color;
    div.onclick = () => {
      colorPicker.value = color;
      hexCode.textContent = color.toUpperCase();
    };
    favoritesContainer.appendChild(div);
  });
}

function exportFavorites() {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  const blob = new Blob([favs.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "favoritos.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleCredits() {
  const panel = document.getElementById("credits");
  if (panel.style.left === "0px") {
    panel.style.left = "-250px";
  } else {
    panel.style.left = "0px";
  }
}

function filterColors() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const boxes = document.querySelectorAll(".colors-table .color-box");
  boxes.forEach(box => {
    const color = box.style.background.toLowerCase();
    box.style.display = color.includes(search) ? "inline-block" : "none";
  });
}

colorPicker.addEventListener("input", () => {
  hexCode.textContent = colorPicker.value.toUpperCase();
});

window.onload = () => {
  loadColors();
  renderFavorites();
  hexCode.textContent = colorPicker.value.toUpperCase();
};

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  color: #333;
  transition: background 0.4s ease, color 0.4s ease;
}

main {
  margin-left: 240px;
  padding: 20px;
}

h1, h2 {
  text-align: center;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  animation: fadeIn 0.5s ease;
}

.color-box {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.color-box:hover {
  transform: scale(1.1);
}

input[type="color"] {
  height: 40px;
  border: none;
  margin: 10px;
}

button {
  padding: 8px 12px;
  margin: 10px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

#hexCode {
  font-weight: bold;
  font-size: 1.1em;
}

input[type="text"] {
  padding: 5px 10px;
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.menu-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 26px;
  z-index: 2000;
  cursor: pointer;
}

#sidebar {
  position: fixed;
  top: 0;
  left: -240px;
  width: 220px;
  height: 100%;
  background-color: #222;
  color: #fff;
  padding: 20px;
  z-index: 1999;
  transition: left 0.3s ease;
}

#sidebar.open {
  left: 0;
}

#sidebar h2 {
  margin-top: 0;
}

#sidebar ul {
  list-style: none;
  padding: 0;
}

#sidebar li {
  margin: 15px 0;
  cursor: pointer;
  transition: color 0.3s;
}

#sidebar li:hover {
  color: #4EC5F1;
}

.credits {
  margin-top: 40px;
}

.credits a {
  color: #4EC5F1;
  text-decoration: none;
  transition: text-shadow 0.3s;
}

.credits a:hover {
  text-shadow: 0 0 5px #4EC5F1;
}

.dark-mode {
  background-color: #121212;
  color: #eee;
}

.dark-mode .color-box {
  box-shadow: 0 0 8px rgba(255,255,255,0.1);
}

.dark-mode #sidebar {
  background-color: #1d1d1d;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

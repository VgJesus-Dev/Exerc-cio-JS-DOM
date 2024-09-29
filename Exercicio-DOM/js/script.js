//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
const a = document.createElement("a");
a.href = "#";
a.textContent = "Blog";
li.appendChild(a);
navLinks.appendChild(li);


//criando um nó de texto
const header = document.querySelector("header");
const titulo = document.getElementById("titulo");
const h2 = document.createElement("h2");
h2.textContent = "Novo Titulo";
header.replaceChild(h2, titulo);

const meuTexto = document.createTextNode("Inserindo outro título");
const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
h2.insertAdjacentElement('afterend', h3);

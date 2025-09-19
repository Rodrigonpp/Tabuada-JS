// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberImput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
    <div class="operation">
    ${number} x ${i} =
    </div>
    <div class="result">
    ${result}
    </div>
    </div>`; // Utilizamos a variável template para criar a estrutura html que será adicionada

    const parser = new DOMParser(); // Esse é o objeto que converte strings para html com DOM
    const htmlTemplate = parser.parseFromString(template, "text/html"); // .parseFromString(o template html, a forma de conversão "text/html")

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerHTML = `${number}`;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberImput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;
  createTable(multiplicationNumber, multiplicatorNumber);
});

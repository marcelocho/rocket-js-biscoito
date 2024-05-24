let quotes = [
  `A solidão é a sorte de todos os espíritos excepcionais.`,
  `A solidão é a sorte de todos os espíritos excepcionais.`,
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
  "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
  "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
  "A perseverança é a mãe da boa sorte.",
  "Sorte é estar pronto quando a oportunidade vem.",
  "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
];

const aberto = document.querySelector(".aberto");
const fechado = document.querySelector(".fechado");
const abrir = document.querySelector("#abrir");
const outro = document.querySelector("#outro");

abrir.addEventListener("click", clickAbrir);
outro.addEventListener("click", clickOutro);

function clickAbrir() {
  toggleScreen();
  let index = Math.floor(Math.random() * quotes.length);
  let quote = quotes[index];
  aberto.querySelector("p").innerText = quote;
  console.log(quote);
}

function clickOutro() {
  toggleScreen();
}

function toggleScreen() {
  aberto.classList.toggle("hide");
  fechado.classList.toggle("hide");
}

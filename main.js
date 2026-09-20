const botaoMenu = document.getElementById('botao-menu');
const menuNavegacao = document.getElementById('menu-navegacao');

// Adiciona o evento de clique
botaoMenu.addEventListener('click', () => {
  // O "toggle" adiciona a classe se ela não existir, e remove se já existir
  botaoMenu.classList.toggle('ativo');
  menuNavegacao.classList.toggle('ativo');
});

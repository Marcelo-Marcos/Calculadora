let listaDeValores = [];

// Função para registrar os números no campo de entrada
function registraNumero(valor) {
  const campoResultado = document.getElementById('resultado');


    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      
      //listaDeValores.push(valor);

      let controle = listaDeValores.length -1;

      console.log(valor, controle);

      console.log(listaDeValores[controle]);
       
      if (listaDeValores[controle] === '+' || listaDeValores[controle] === '-' || listaDeValores[controle] === '*' || listaDeValores[controle] === '/') {
        listaDeValores.pop();
        console.log(`Valor teste 1 ${listaDeValores}`);
        listaDeValores.push(valor);
        campoResultado.value = listaDeValores.join('');
        console.log(listaDeValores);
      } else {
          console.log(`Valor teste 2 ${listaDeValores}`);
          listaDeValores.push(valor);
          campoResultado.value = listaDeValores.join('');
      }
   } else {
        console.log(`Valor teste 3 ${listaDeValores}`);
        listaDeValores.push(valor);
        campoResultado.value = listaDeValores.join('');
        console.log(campoResultado.value);
   }
}

// Função para calcular a expressão
function dados2() {
  const valor1 = document.getElementById('resultado').value;
  try {
    // Avaliar a expressão matemática
    const resultado = math.evaluate(valor1);
    document.getElementById('resultado').value = resultado;  // Exibir o resultado no campo
    listaDeValores = [resultado];
  } catch (error) {
    // Se ocorrer um erro, mostrar uma mensagem
    document.getElementById('resultado').value = 'Erro';
    listaDeValores.length = 0;
  }
}

function limparDados() {
  document.getElementById('resultado').value = '';
  listaDeValores.length = 0;
}

function limparUltimoDado() {
  const campoResultado = document.getElementById('resultado');
  listaDeValores.pop();
  campoResultado.value = listaDeValores.join('');
  console.log(listaDeValores);
}

// Adicionar os eventos de click para os botões

const botoes = document.querySelectorAll('.botoes'); // Seleciona todos os botões da calculadora

botoes.forEach(button => {
  button.addEventListener('click', event => {
    const valorDoBotao = event.target.value; // Obtém o valor do botão clicado
    switch(valorDoBotao) {
      case '=':
      dados2();
      break;
      case 'o':
      limparUltimoDado();
      break;
      case 'C':
      limparDados();
      break;
      default:
      registraNumero(valorDoBotao);
      break;
    }
    
  });
});
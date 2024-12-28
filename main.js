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

// Adicionar os eventos de click para os botões de números
document.getElementById('numero-0').addEventListener('click', function() {
  registraNumero('0');
});
document.getElementById('numero-1').addEventListener('click', function() {
  registraNumero('1');
});
document.getElementById('numero-2').addEventListener('click', function() {
  registraNumero('2');
});
document.getElementById('numero-3').addEventListener('click', function() {
  registraNumero('3');
});
document.getElementById('numero-4').addEventListener('click', function() {
  registraNumero('4');
});
document.getElementById('numero-5').addEventListener('click', function() {
  registraNumero('5');
});
document.getElementById('numero-6').addEventListener('click', function() {
  registraNumero('6');
});
document.getElementById('numero-7').addEventListener('click', function() {
  registraNumero('7');
});
document.getElementById('numero-8').addEventListener('click', function() {
  registraNumero('8');
});
document.getElementById('numero-9').addEventListener('click', function() {
  registraNumero('9');
});


document.getElementById('operador_+').addEventListener('click', function() {
  registraNumero('+');
});
document.getElementById('operador_-').addEventListener('click', function() {
  registraNumero('-');
});
document.getElementById('operador_*').addEventListener('click', function() {
  registraNumero('*');
});
document.getElementById('operador_/').addEventListener('click', function() {
  registraNumero('/');
});

// Adicionar evento para o botão de calcular
document.getElementById('calcular').addEventListener('click', dados2);

// Adicionar evento para o botão de limpar dados
document.getElementById('operador_C').addEventListener('click', limparDados);

document.getElementById('numero-o').addEventListener('click', limparUltimoDado);
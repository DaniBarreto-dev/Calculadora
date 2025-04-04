
// Painel de controle
function adicionarValor(valor) {
    const caixaTexto = document.getElementById("caixaTexto"); // Certifique-se de que o ID está correto
    if (caixaTexto) {
        caixaTexto.value += valor; // Adiciona o valor passado ao campo de texto
        aplicarEstilo(caixaTexto)
    }
}

function adicionarSinal(sinal) {
    const caixaTexto = document.getElementById("caixaTexto"); 
    if (caixaTexto) {
        caixaTexto.value += sinal; 
        aplicarEstilo(caixaTexto)
    }
}


function apagarValor() {
    const caixaTexto = document.getElementById("caixaTexto");
    if (!adicionarValor(caixaTexto)){
        caixaTexto.value = ''; 
        aplicarEstilo(caixaTexto)
    }    
}

function Calcular() {
    const caixaTexto = document.getElementById("caixaTexto");
    if (caixaTexto) {
            // Avalia a expressão matemática no campo de texto
            const resultado = eval(caixaTexto.value);
            //eval() em JavaScript é usada para avaliar ou executar um código como uma string
            //Usado para resolver expressões matematicas
            // Exibe o resultado no mesmo campo de texto.
            caixaTexto.value = resultado;
            aplicarEstilo(caixaTexto)
}

}
function adicionarParent() {
    const caixaTexto = document.getElementById("caixaTexto");
    if (caixaTexto) {
        // Captura o valor atual do campo de texto
        const valorAtual = caixaTexto.value;
        // Envolve o valor atual em parênteses
        caixaTexto.value = `(${valorAtual})`;
        aplicarEstilo(caixaTexto); // Aplica o estilo
    }
}




  
  // Exemplo de uso
  

//Seção de estilo da fonte

// Função para aplicar o estilo aos textos
function aplicarEstilo(elemento) {
    elemento.style.color ="rgb(43, 41, 41)";
    elemento.style.fontFamily = "'Archivo Black', sans-serif";
    elemento.style.fontSize = "32px";
    
    
}


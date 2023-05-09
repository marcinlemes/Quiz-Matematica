function servico_montaPergunta(x, y, operador){ // essa função tem o objetivo de sempre deixar o maior número à esquerda
    if(x > y){
        return x +" "+ operador +" " + y
    } 
    
    else{
        return y + " " + operador + " " + x
    }
}

function servico_calculaResultado(x, y, operador){ // essa tem o objetivo de retornar o resultado da questão montada
    let resultado;

    let valorA;
    let valorB;

    if (x > y)
    {
        valorA = x;
        valorB = y;
    }
    else
    {
        valorA = y
        valorB = x;
    }
     
    // nessa sequência de "if e else if" temos apenas a montagem das contas e o armazenamento do resultado em uma variável
    if(operador == '+')
    { 
    resultado = valorA + valorB   
    }

    else if (operador == '-')
    {
    resultado = valorA - valorB
    }

    else if (operador == '/')
    {
        const resto = valorA % valorB;
        resultado = (valorA - resto) / valorB;
    }

    else if (operador == 'x')
    {
        resultado = valorA * valorB
    }

    return resultado
}

// Nas funções "geraX e geraY" é usado apenas o método nativo para escolher um número aleatóriamente juntamente com a condição if, para deixar o app mais complexo
function geraX(operador) {
    if(operador == '+' || operador == '-'){
        return Math.floor(Math.random() * 999 + 1)
    }

    return Math.floor(Math.random() * 99 +1);
}

function geraY(operador) {

    if (operador == '+'|| operador == '-'){
        return Math.floor(Math.random() * 800 + 1)
    }

    return Math.floor(Math.random() * 9 + 1);
}

function formataResultadoDecimal(resultado) { //essa função limita o resultado à apenas uma casa decimal para evitar erros no código
    return parseFloat(resultado.toFixed(1));
}

export function VerificaRespostaCerta (respostaUsuario, respostaQuestao) { //como o próprio nome dessa diz, ela compara a resposta do usuario com a resposta correta da questão e verifica se a resposta digitada está certa ou não.
    if (respostaUsuario == respostaQuestao){
        return true;
    } else{
        return false;
    }
}

export function RetornaQuestao() {
    const operadores = ["+","-","/","x"];
    const operadorSelecionado = operadores[Math.floor(Math.random() * operadores.length)]; // nessa primeira parte tornei possível a escolha aleatória dos operadores

    const x = geraX(operadorSelecionado);
    const y = geraY(operadorSelecionado); //na segunda parte, apenas atribuí a função que gera números aleatórios à uma constante.

    const pergunta = servico_montaPergunta(x, y, operadorSelecionado);
    const resultado = servico_calculaResultado(x, y, operadorSelecionado);
    // acredito essa ser a parte principal, aqui, utilizo a função que monta a pergunta passando os parâmetros necessários à ela, assim como fiz com a função que calcula o resultado, assim sendo possível criar e exibir perguntas aleatórias

    const questao = {Pergunta: pergunta, Resultado: resultado};
    // aqui criei uma constante que possui um objeto com os itens Pergunta e Resposta, assim é possível guardar o resultado pro sistema e usá-lo mais facilmente, ao mesmo tempo em que eu escolho exibir apenas a pergunta na tela.

    return questao;
}
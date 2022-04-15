console.clear();
const prompt = require('prompt-sync')();

let resultado = 0;
let questao_1;
let questao_2;
let questao_3;
let questao_4;
let questao_5;


console.log(`
O PAI DO ANO

Você e sua esposa acabaram de ter um filho, um lindo menino. Sua alimentação transcorreu normalmente durante 6 meses , mas chegou o momento
tão temido: A INTRODUÇÃO ALIMENTAR. Com isso, o organismo de seu filho se modificou.

Sua responsabilidade era comprar todos os itens necessários para que a troca fosse feita corretamente.
Você conseguiu completar a tarefa? Responda as perguntas de maneira correta para saber.

Digite '1' para SIM e '2' para Não.`);


console.log('Você comprou as fraldas?');
questao_1 = +prompt();

    while (questao_1 != 1 && questao_1 != 2) {
    console.log('Você informou uma resposta inválida. Digita "1" para SIM e "2" para NÃO.');
    console.log('Você comprou as fraldas?');
    questao_1 = +prompt();
    }


console.log('Comprou a pomada?');
questao_2 = +prompt();

    while (questao_2 != 1 && questao_2 !=2) {
    console.log('Você informou uma resposta inválida. Digita "1" para SIM e "2" para NÃO.');
    console.log('Comprou a pomada?');
    questao_2 = +prompt();
    }


console.log('Não esqueça os lenços umedecidos! Você lembrou de comprá-los?');
questao_3 = +prompt();


    while (questao_3 != 1 && questao_3 !=2) {
    console.log('Você informou uma resposta inválida. Digita "1" para SIM e "2" para NÃO.');
    console.log('Não esqueça os lenços umedecidos! Você lembrou de comprá-los?');
    questao_3 = +prompt();
    }

console.log('Também comprou o talco?');
questao_4 = +prompt();

    while (questao_4 != 1 && questao_4 !=2) {
    console.log('Você informou uma resposta inválida. Digita "1" para SIM e "2" para NÃO.');
    console.log('Também comprou o talco?');
    questao_4 = +prompt();
    }


console.log('Você pegou o trocador?');
questao_5 = +prompt();

    while (questao_5 != 1 && questao_5 !=2) {
    console.log('Você informou uma resposta inválida. Digita "1" para SIM e "2" para NÃO.');
    console.log('Você pegou o trocador?');
    questao_5 = +prompt();
    }

// Realizando o teste lógico a partir das respostas do usuário, somando a variável 'resultado' + 1 a cada vez que a respota é positiva
if (questao_1 == 1){
    resultado = resultado + 1;
}
if (questao_2 == 1){
    resultado = resultado + 1;
}
if (questao_3 == 1){
    resultado = resultado + 1;
}
if (questao_4 == 1){
    resultado = resultado + 1;
}
if (questao_5 == 1){
    resultado = resultado + 1;
}

// Verificação da variável 'resultado'. Uso do else if para que não seja necessário executar as linhas seguintes quando ele encontrar o resultado correto. 
if (resultado == 0 ) {
    console.log ('Você falhou miseravelmente em comprar os itens para trocar seu filho.');
}
else if (resultado > 0 && resultado <= 2) {
    console.log('Você falhou em comprar os itens, mas pelo menos tentou.');
}
else if (resultado == 3) {
    console.log('Você até comprou alguns itens, mas não serão o suficiente para trocá-lo.');
}
else if (resultado == 4) {
    console.log('Depois de muito esforço, você possui quase tudo para trocá-lo, embora não tenha todos os itens necessários.');
}
else if (resultado == 5) {
    console.log('O PAI TÁ ON! Você comprou todos os itens e será lembrando até o fim dos tempos como o maior exemplo de pai.');
}

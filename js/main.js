
alert("Bem vinde!")


let nome = prompt("Digite seu nome")


let resposta = prompt(nome + " , deseja responder nosso quiz? Digite 1 para Sim e 2 para Não ")


let mostrarNome = document.getElementById("mostrarNome")


mostrarNome.innerHTML = "Olá, " + nome + "! :)"

if (resposta == 1) {
    let pergunta1 = prompt(" 1 - Qual o resultado da soma: 60 + 40? \n a)80 \n b)64 \n c)100")


    let pergunta2 = prompt(" 2 - Qual é o resultado da multiplicação: 8 x 8? \n a)64 \n b)32 \n c)48")


    let pergunta3 = prompt(" 3 - Quanto fica a divisão: 50 / 2? \n a)15 \n b)25 \n c)10")

}
else {
    alert("Obrigada pela visita, até a próxima!")
}




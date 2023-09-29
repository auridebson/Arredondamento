const btnAciona = document.querySelector(".btnAciona")
const containerName = document.querySelector(".container-name")

const alertaEF = () => alert("Mostrando mensagem\nCom Expressão de função - Arrow")
const dt = new Date()
const infoData = () => alert(`A data coletada nessa Arrow Function é\n${dt.getDay()}/${dt.getMonth()}/${dt.getFullYear()}`)
// const nomeUser = prompt("Digite seu mome")

const infoNome = () => {
    return containerName.innerHTML += nomeUser + '<br>'
}
const person = {
    name: "Auridebson",
    age: 46,
    city: "Fortaleza"
}

const mostraNome = () => containerName.innerHTML = `${person.name} -  ${person.age} - ${person.city}`

function alertaDF() {
    alert("Mostrando mensagem\nCom Declaração de função")
}

let soma = (a,b) => a + b 

const findMaxNumber = numeros => Math.max(...numeros)

const checkPair = numero => (numero % 2 == 0 ? "Par" : "Impar")

const checkImpar = numero => (numero % 2 == 0 ? "Par":"Impar")

const countText = (textoo) => textoo.replace(/ \s/g,"").length;


btnAciona.addEventListener("click", console.log(countText("Olá meu lindo Mundo")))
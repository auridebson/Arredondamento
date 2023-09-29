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



btnAciona.addEventListener("click", mostraNome)
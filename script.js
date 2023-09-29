const btnAciona = document.querySelector(".btnAciona")
const containerName = document.querySelector(".container-name")

const alertaEF = () => alert("Mostrando mensagem\nCom Expressão de função - Arrow")
const dt = new Date()
const infoData = () => alert(`A data coletada nessa Arrow Function é\n${dt.getDay()}/${dt.getMonth()}/${dt.getFullYear()}`)
// const nomeUser = prompt("Digite seu mome")

const infoNome = () => {
    return containerName.innerHTML += nomeUser + '<br>'
}


function alertaDF() {
    alert("Mostrando mensagem\nCom Declaração de função")
}



btnAciona.addEventListener("click", infoNome)
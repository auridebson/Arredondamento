
function arredonda() {
    const cpNum1 = document.querySelector('#num1').value
    const cpNum2 = document.querySelector('#num2').value

    if (cpNum1,cpNum2 > 0) {
        const cpRes = cpNum2/cpNum1 
        document.querySelector('#numResultado').value = Math.round(cpRes)
    }

}





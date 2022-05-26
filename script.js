const P = document.getElementById("continuar")
function aumentar(){
    const valoratual = parseInt(P.innerText)
    P.innerText = valoratual + 1
}

function diminuir(){
    const valoratual = parseInt(P.innerText)
    P.innerText = valoratual - 1
}

function zerar(){
    P.innerText = 0
}

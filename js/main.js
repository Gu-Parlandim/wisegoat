const dados = () => {
    fetch("./js/frases.json")
    .then(res => res.json()).then(data =>{
        let frase = gerarFrase(data)
        paginaConselho(frase)
        })
} 


gerarFrase = (dados) => {
    let num = randomNumero()
    return dados[num].frase
}

randomNumero = () => {
    numeroAletorio = parseInt((Math.random() * 366))
    return numeroAletorio
}

paginaConselho = (frase) => {
    let pagina = document.querySelector("main")
    pagina.innerHTML = 
    `<div>
        <h2>${frase}</h2>
        <p>${"autor"}</p>
        <button onclick="dados()"> Teste Apenas</button>
    </div>`
}
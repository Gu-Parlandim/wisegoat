const urlimagens = "https://dog.ceo/api/breeds/image/random"


const pegarImagens = () => {
    fetch(urlimagens)
        .then(res => res.json())
        .then(mostraImagenNaTela)
}


const dados = () => {
    fetch("./js/frases.json")
        .then(res => res.json())
        .then(data =>{
            let resultado = gerarFrase(data)
            paginaConselho(resultado.frase, resultado.autor)
            if(window.innerWidth > 565){
                pegarImagens()
            }
            })
} 


gerarFrase = (dados) => {
    let num = randomNumero()
    return {frase: dados[num].frase, autor:dados[num].autor}
}

randomNumero = () => {
    numeroAletorio = parseInt((Math.random() * 366))
    return numeroAletorio
}

paginaConselho = (frase, autor) => {
    let pagina = document.querySelector("body")
   /*  pagina.classList.add("pagina-conselho") */
    pagina.classList.replace("pagina-inicio","pagina-conselho")
    pagina.innerHTML = 
    `<header class="conselho-header">
        <button onclick="paginaInicial()">Wise<br><span>Goat</span></h1></button>
    </header>
    <main class="conselho-container">
        <div class="conselho-texto">
            <i class="fas fa-quote-left"></i>
            <p>${frase}</p>
            <i class="fas fa-quote-right"></i>
            <span>- ${autor}</span>
        </div>
        <div class="conselho-img">
            <img class="img-dogs" src="" alt="cao">
        </div>
    </main>`
}

mostraImagenNaTela = ({message}) => {
    const elementoImg = document.querySelector(".img-dogs")
    elementoImg.src = message
}


paginaInicial = () =>{
    let pagina = document.querySelector("body")
    pagina.classList.replace("pagina-conselho", "pagina-inicio")
    pagina.innerHTML = `
    <main class="inicio-container">
        <div class="introducao-container">
            <div class="logo-texto">
                <h1>Wise<br> <span>Goat</span></h1>
            </div>
            <button onclick="dados()">Pedir Conselho</button>
        </div>
        <div class="bode_container">
            <img src="assets/bodezinho.png" alt="grande bode sabio das montanhas do leste">
        </div>
    </main>`
}
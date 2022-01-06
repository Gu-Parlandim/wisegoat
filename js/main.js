const dados = () => {
    fetch("./js/frases.json")
    .then(res => res.json()).then(data =>{
        console.log(data)
        })
}

function digitarNome() {
    const nome = "Sandro Leonardo"
    const nomespan = document.querySelector("#name-welcome")

    const nomeArray = nome.split("")
    nomeArray.forEach((l, i) => {
        setTimeout(() => {
            nomespan.innerHTML += l
        }, 150 * i);
    })   
};

digitarNome()
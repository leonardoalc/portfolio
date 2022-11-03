function digitarNome() {
    const nome = "Sandro Leonardo"
    const nomespan = document.querySelector("#name-welcome")

    const nomeArray = nome.split("")
    setTimeout(() => {
        nomeArray.forEach((l, i) => {
            setTimeout(() => {
                nomespan.innerHTML += l
            }, 150 * i);
        }) 
    }, 250);  
};

digitarNome()
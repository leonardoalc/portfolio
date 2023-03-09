function skills(id) {
    const skills_details = [
            ["ReactJS", "É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."],
            ["NodeJS", "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."], 
            ["JavaScript", "É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web."], 
            ["Python 3", "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."],
            ["Git", "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software."],
            "/*Passe o mouse ou toque no ícone para ler sobre*/"
        ]

    const title = document.querySelector("#skills-h2")
    const about_text = document.getElementById("skills-details")
    const icon = document.getElementsByClassName("skills-icon")

    title.innerHTML = `${skills_details[id][0]}`
    title.style.visibility = "visible"
    about_text.innerHTML = `${skills_details[id][1]}`

    for (let i = 0; i <= 4; i++) {
        const cores = [
            "#61DAFB",
            "#78AD67",
            "#F2E512",
            "#1D6FA9",
            "#E44D32"
        ]
        if (id == i) {
            icon[id].style.color = `${cores[id]}`
        }
    }
    icon[id].addEventListener("mouseleave", () => {
        icon[id].style.color = "aliceblue"
        title.style.visibility = "hidden"
        about_text.innerHTML = `${skills_details[5]}`
    })
}
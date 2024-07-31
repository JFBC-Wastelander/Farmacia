const prompt = require("prompt-sync")()
const curso = []

const modelo = () => {
    const nome = prompt("Informe o nome do curso: ")
    const duracao = +prompt("Informe a duração do curso: ")

    const professores = []
    while (true) {
        const professor = prompt("Informe o nome do professor ou tecle 'sair' para encerrar: ")
        if (professor == "sair") {
            break
        }
            professores.push(professor)
    }
    const alunos = []
    while (true) {
        const aluno = prompt("Informe o nome do professor ou tecle 'sair' para encerrar: ")
        if (aluno == "sair") {
            break
        }
            professores.push(aluno)
    }
    const materias = []
    while (true) {
        const materia = prompt("Informe o nome do professor ou tecle 'sair' para encerrar: ")
        if (materia == "sair") {
            break
        }
            professores.push(materia)
    }

    if(
        nome != "" && 
        duracao > 0 && 
        professores.length > 0 && 
        alunos.length > 0 && 
        materias.length > 0
    ) {
        return {
            nome,
            duracao,
            professores,
            alunos,
            materias,
        }
    }
    
    console.log("Dados inválidos")
//EXISTE UM RETURN AQUI, DEPOIS DO CONSOLE.LOG, ESSE RETURN É SETADO COMO "UNDEFINED", PORTANTO, QUANDO ELE CHEGA NOS
//DADOS INVÁLIDOS, ELE CHEGA COMO INDEFINIDO
}

const criar = () => {
    const novo = modelo()
    if (novo) {
        curso.push(novo)
        console.log("O curso foi inserido com sucesso")
    }
}

const listar = () => {
//A ESTRUTURA DO forEACH É:
//array.forEach (() => {

//})
    curso.forEach((el, i) => {
//ESSE FOREACH DIZ: PARA CADA ELEMENTO "el" NO ARRAY "curso", FAÇA ALGUMA COISA "console.log"
        if (curso.length == 0) {
            console.log("Nenhum curso foi criado ainda!")
        }
        console.log(`${i + 1} - Nome: ${el.nome} - Duração: ${el.duracao} - Professores: ${el.professores} - Alunos: ${el.alunos} - Materias: ${el.materias}`)
    })
}

const atualizar = () => {
    listar()
    const indice = +prompt("Qual é o índice que deseja atualizar: ") - 1
    const novo = modelo()
    if (novo && indice >= 0 && indice < curso.length) {
        curso[indice] = novo
        console.log("O curso foi atualizado com sucesso")
    } else {
        console.log("Indice inválido")
    }
}

const remover = () => {
    listar()
    const indice = +prompt("Qual é o índice que deseja remover: ") - 1
    if(indice >= 0 && indice < curso.length ) {
        curso.splice[indice, 1]
        console.log("O curso foi deletado com sucesso")
    } else {
        console.log("Indice inválido")
    }
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
}
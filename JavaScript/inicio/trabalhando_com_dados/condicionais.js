const nomeAluno = "Gustavo"
const nota1 = 9
const nota2 = 4
const mediaAluno = (nota1+nota2)/2

// mediaAluno >= 7 ? console.log('Aprovado') : console.log('Reprovado');


console.log(mediaAluno);

if (mediaAluno >= 7) {
    console.log(`${nomeAluno} ficou com ${mediaAluno} de média final e foi Aprovado`);
}
else {
    console.log(`${nomeAluno} ficou com ${mediaAluno} de média final e foi Reprovado`);
}
/*
Review:
DOM:
-addEventListener
-text
Variáveis - Ok
For / if - Ok
*/
const btnTeste = document.getElementById("btn-teste")
const btnTeste1 = document.getElementById("btn-teste1")
const btnTeste2 = document.getElementById("btn-teste2")
const btnTeste3 = document.getElementById("btn-teste3")
const btnTeste4 = document.getElementById("btn-teste4")
const minhaDiv = document.getElementById("minha-div")


//Ele precisa de 2 parâmetros: a ação e a função para execultar
btnTeste.addEventListener('click', () =>{
    minhaDiv.style.backgroundColor = "blue"
   
})

btnTeste1.addEventListener('click', () =>{
    minhaDiv.style.backgroundColor = "green"
   
})

btnTeste2.addEventListener('click', () =>{
    minhaDiv.style.backgroundColor = "yellow"
   
})

btnTeste3.addEventListener('click', () =>{
    minhaDiv.style.backgroundColor = "gray"
   
})

btnTeste4.addEventListener('click', () =>{
    minhaDiv.style.backgroundColor = "red"
   
})


minhaDiv.addEventListener('click', () =>{
   
   
})
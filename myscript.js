var email = document.getElementById("email")
var senha = document.getElementById("senha")
var nome = document.getElementById("nome")
var pais = document.getElementById("pais")
var nascimento = document.getElementById("nascimento")
var filhos = document.getElementById("filhos")
var ensino = document.getElementById("ensino")
//var genero = document.querySelector('input[name="genero"]:checked').value; //Estou pegando o resultado da Query do Input RADIO pelo nome 


function concluir(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var nome = document.getElementById("nome").value
    var pais = document.getElementById("pais").value
    var nascimento = document.getElementById("nascimento").value
    var filhos = document.getElementById("filhos").value
    var ensino = document.getElementById("ensino").value
    var genero = document.getElementById("sexual").value
    window.location.href = "Login.html";
    return window.alert(`Meu nome é ${nome} sou de ${pais}, tenho ${filhos} filhos, sou ${genero}`);
    
}

function entrar(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    window.location.href = "Inicio.html";
    return window.alert(`Email: ${email} e senha: ${senha}`)
}

function alerta(){
    return window.alert("Funciona!")
}

function show(){
 var check = document.getElementById('temfilho')
 check.onchange = function(){

    if(check.checked == true){
        document.getElementById("usar").innerHTML = '<input id="filhos" type="text"> <input id="temfilho" type="checkbox" onclick="show()"> <Br> <Br>';
       
    }
    }
    if(check.checked == false){
        document.getElementById("usar").innerHTML = '';
       
    }
 }
 function cadastrar(){
    window.location.href = "cadastro.html";

 }

// function calculaIdade(nascimento, hoje){
//     idade = Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
//     window.alert(idade);
// }


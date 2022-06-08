var emailInput = document.querySelector("#email")
var senhaInput = document.querySelector("#senha")
var form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", () => {
  

  if (emailInput.value.length == 0) {
    alert("Digite o Email")
  }
  else if (senhaInput.value.length == 0) {
    alert("Digite a Senha")
  }

  else {
    alert("Você esta logada!")
  }
})

function onClickCad(){
  alert("Função em Desenvolvimento")
}
function onClickSenha(){
  alert("Função em Desenvolvimento")
}

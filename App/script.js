let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = `Hi ${userLogado.nome} Welcome to LogIn Page`

if (localStorage.getItem("token") == null) {
    alert("You must be logged in to be on this page")
    window.location.href = "../index.html"

}

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = "../index.html"
}

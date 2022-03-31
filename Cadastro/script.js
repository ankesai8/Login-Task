let buttonEye = document.querySelector("#verSenha")
let buttonEyeConfirm = document.querySelector("#verConfirmPassword")

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")
let validPassword = false

let confirmPassword = document.querySelector("#confirmPassword")
let labelconfirmPassword = document.querySelector("#labelconfirmPassword")
let validconfirmPassword = false


let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

//Show toggle or not show password
buttonEye.addEventListener('click', () => {
   let inputPassword = document.querySelector("#password")

   if (inputPassword.getAttribute("type") == "password") 
   {inputPassword.setAttribute("type", 'text')
   }
   else {
    inputPassword.setAttribute("type", "password")
   }
})

buttonEyeConfirm.addEventListener('click', () => {
    let confirmPassword = document.querySelector("#confirmPassword")
 
    if (confirmPassword.getAttribute("type") == "password") 
    {confirmPassword.setAttribute("type", 'text')
    }
    else {
     confirmPassword.setAttribute("type", "password")
    }
 })

 

 //Show Toggle end or not show password


//Registration checks characters, confirm passwords and user
nome.addEventListener("keyup", () => {
   if (nome.value.length <= 3 ) {
      labelNome.setAttribute("style", "color: red")
      labelNome.innerHTML = "Name Should be 3 Characters long"
      nome.setAttribute("style", 'border-color:red')
      validNome = false
   }
   else {
      labelNome.setAttribute("style", "color: green")
      labelNome.innerHTML = "Name"
      nome.setAttribute("style", 'border-color:green')
      validNome = true
   }

   if (nome.value.length == 0) {
      labelNome.setAttribute("style", " color: ##555086;; transition: .1s")
      labelNome.innerHTML = "Name"
      nome.setAttribute("style", "border-color: #272262; transition: .1s") 
   }
})


usuario.addEventListener("keyup", () => {
   if (usuario.value.length <= 3) {
      labelUsuario.setAttribute("style", "color: red; transition: .1s")
      labelUsuario.innerHTML = "UserName must be at least 4 characters long"
      usuario.setAttribute("style", "border-color: red")
      validUsuario = false
   }

   else {
      labelUsuario.setAttribute("style", "color: green; transition: .1s")
      labelUsuario.innerHTML =  "UserName"
      usuario.setAttribute("style", "border-color: green") 
      validUsuario = true  
   }

   if (usuario.value.length == 0) {
      labelUsuario.setAttribute("style", " color: #555086;; transition: .1s")
      labelUsuario.innerHTML = "User Name"
      usuario.setAttribute("style", "border-color: #272262; transition: .1s") 
   }
})

email.addEventListener("keyup", () => {
   if (email.value.length <= 5) {
      labelEmail.setAttribute("style", "color: red; transition: .1s")
      labelEmail.innerHTML = "Email should be in pattern Ex->>>> mysite@ourearth.com"
      email.setAttribute("style", "border-color: red")
      validEmail = false
   }

   else {
      labelEmail.setAttribute("style", "color: green; transition: .1s")
      labelEmail.innerHTML =  "Email"
      email.setAttribute("style", "border-color: green") 
      validEmail = true  
   }

   if (email.value.length == 0) {
      labelEmail.setAttribute("style", " color: #555086;; transition: .1s")
      labelEmail.innerHTML = "Email"
      email.setAttribute("style", "border-color: #272262; transition: .1s") 
   }
})

password.addEventListener("keyup", () => {
   if (password.value.length <= 7 ) {
      labelPassword.setAttribute("style", "color: red; transition: .1s")
      labelPassword.innerHTML = "Password must be at least 8 characters long"
      password.setAttribute("style", "border-color: red")
      validPassword = false

   } else {
      labelPassword.setAttribute("style", "color: green; transition: .1s")
      labelPassword.innerHTML =  "Password"
      password.setAttribute("style", "border-color: green") 
      validPassword = true 

   } if (password.value.length == 0) {
      labelPassword.setAttribute("style", " color: #555086;; transition: .1s")
      labelPassword.innerHTML = "Password"
      password.setAttribute("style", "border-color: #272262; transition: .1s")
   }
})

confirmPassword.addEventListener("keyup", () => {
   if (confirmPassword.value != password.value ) {
      labelconfirmPassword.setAttribute("style", "color: red; transition: .1s")
      labelconfirmPassword.innerHTML = "Password must be at least 8 characters long"
      confirmPassword.setAttribute("style", "border-color: red")
      validconfirmPassword = false

   } else {
      labelconfirmPassword.setAttribute("style", "color: green; transition: .1s")
      labelconfirmPassword.innerHTML =  "Password"
      confirmPassword.setAttribute("style", "border-color: green")
      validconfirmPassword = true

   } if (confirmPassword.value.length == 0) {
      labelconfirmPassword.setAttribute("style", " color: #555086;; transition: .1s")
      labelconfirmPassword.innerHTML = "Confirm Password"
      confirmPassword.setAttribute("style", "border-color: #272262; transition: .1s")

   }
})


//Button
const cadastrar = function() {

   if (validNome && validUsuario && validEmail && validPassword && validconfirmPassword) {

      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

      listaUser.push(
         {
            nameCad: nome.value,
            userCad: usuario.value,
            emailCad: email.value,
            passwordCad: password.value
         }
      )

         localStorage.setItem("listaUser", JSON.stringify(listaUser))

         setTimeout(()=> {
            window.location.href = "../index.html"
         }, 3000)



      msgSuccess.setAttribute("style" , "display: block")
      msgSuccess.innerHTML = "Successfully registered"
      msgError.setAttribute("style" , "display: none")
      msgError.innerHTML = ""


   } else {
      msgError.setAttribute("style" , "display: block")
      msgError.innerHTML = "Fill in the fields correctly before registration"
      msgSuccess.innerHTML = ""
      msgSuccess.setAttribute("style" , "display: none")

   }
}

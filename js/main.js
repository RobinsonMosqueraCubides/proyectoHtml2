let menu = document.querySelector(".menu")

document.querySelector(".buscar").addEventListener("click", function(){
    menu.classList.toggle("active")
})

document.querySelector(".menu").addEventListener("click", function(){
    menu.classList.remove("active")
})
const $ = (selector) => document.querySelector(selector)
//evento pa ra cambiar de modo claro a modo oscuro
$("#switch-theme").addEventListener("click",()=>{
    const currentTheme = $("body").getAttribute("theme")
    if (currentTheme){
        $("#lightbulb-off").classList.remove("hidden")
        $("#lightbulb-on").classList.add("hidden")
        $("body").removeAttribute("theme","dark-theme")
        $("#switch-text").innerText = "Modo oscuro"
    }
    else{
        $("#lightbulb-off").classList.add("hidden")
        $("#lightbulb-on").classList.remove("hidden")
        $("body").setAttribute("theme","dark-theme")
        $("#switch-text").innerText = "Modo claro"
    }
})
//Event to change between panels 
$("#text-btn").addEventListener("click",()=>{
    $(".img__panel").classList.add("hidden")
    $(".text__panel").classList.remove("hidden")
})
$("#img-btn").addEventListener("click",()=>{
    $(".text__panel").classList.add("hidden")
    $(".img__panel").classList.remove("hidden")
})




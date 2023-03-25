const $ = (selector) => document.querySelector(selector)

const initialize = () => {
    //hago esto para que al refrescar la pagina no me quede el texto anterior 
    $("#top__text").value = ""
    $("#bottom__text").value = ""
    $("#url").value = ""
    $("#font__size").value = ""
}
initialize()
//Event to switch to darkmode 
$("#switch-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("theme")
    if (currentTheme) {
        $("#lightbulb-off").classList.remove("hidden")
        $("#lightbulb-on").classList.add("hidden")
        $("body").removeAttribute("theme", "dark-theme")
        $("#switch-text").innerText = "Modo oscuro"
    }
    else {
        $("#lightbulb-off").classList.add("hidden")
        $("#lightbulb-on").classList.remove("hidden")
        $("body").setAttribute("theme", "dark-theme")
        $("#switch-text").innerText = "Modo claro"
    }
})
//Events to change between panels 
$("#text-btn").addEventListener("click", () => {
    $(".img__panel").classList.add("hidden")
    $(".text__panel").classList.remove("hidden")
})
$("#img-btn").addEventListener("click", () => {
    $(".text__panel").classList.add("hidden")
    $(".img__panel").classList.remove("hidden")
})
// -------------------------- IMG PANEL FUNCTIONALITIES
$("#url").addEventListener("input", () => {
    const urlImg = $("#url").value
    $(".meme__img").style.backgroundImage = `url(${urlImg})`
})
// ------------------------- TEXT PANEL FUNCTIONALITIES
//modify text 
//TOP TEXT 
$("#top__text").addEventListener("input", () => {
    $("#meme__top__text").innerText = $("#top__text").value
})
$("#top__text__checkbox").addEventListener("input",()=>{
    const isChecked = $("#top__text__checkbox").checked
    if (isChecked){
        $("#meme__top__text").classList.add("hidden")
    }
    else{
        $("#meme__top__text").classList.remove("hidden")
    }
})
//BOTTOM TEXT
$("#bottom__text").addEventListener("input", () => {
    $("#meme__bottom__text").innerText = $("#bottom__text").value
})
$("#bottom__text__checkbox").addEventListener("input",()=>{
    const isChecked = $("#bottom__text__checkbox").checked
    if (isChecked){
        $("#meme__bottom__text").classList.add("hidden")
    }
    else{
        $("#meme__bottom__text").classList.remove("hidden")
    }
})
//FONT
let memeText = document.querySelectorAll('.meme__text');
for (const element of memeText) {
    //font size 
    $("#font__size").addEventListener("input", () => {
        element.style.fontSize = `${$("#font__size").value}px`
    })
    //modify aligment
    //aligment-left
    $("#alignment__left").addEventListener("click", () => {
        element.style.textAlign = "left"
    })
    //aligment-center
    $("#alignment__center").addEventListener("click", () => {
        element.style.textAlign = "center"
    })
    //aligment-right
    $("#alignment__right").addEventListener("click", () => {
        element.style.textAlign = "right"
    })

}


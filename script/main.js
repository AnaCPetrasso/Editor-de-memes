const $ = (selector) => document.querySelector(selector)

const defoultValues = () => {
    $("#top__text").value = ""
    $("#bottom__text").value = ""
    $("#url").value = ""
    $("#font__size").value = ""
    $("#font__selector").value = "Impact, fantasy"
    $("#text__color").value = ""
    $("#text___bkgd").value = "#ffffff"
    $("#transparent__checkbox").checked = ""
    $("#bkgd__color").value = "#ffffff"
}

const filters = () => {
    const brightness = $("#brightness").value
    const opacity = $("#opacity").value
    const contrast = $("#contrast").value
    const blur = $("#blur").value
    const grayscale = $("#grayscale").value
    const sepia = $("#sepia").value
    const hue = $("#hue").value
    const saturate = $("#saturation").value
    const invert = $("#invert").value
    $(".meme__img").style.filter = `brightness(${brightness}) opacity(${opacity})  contrast(${contrast}%)  blur(${blur}px) grayscale(${grayscale}%)  sepia(${sepia}%)  hue-rotate(${hue}deg) saturate(${saturate}%) invert(${invert})`
}
const resetFilters = () => {
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100"
    $("#blur").value = "0"
    $("#grayscale").value = "0"
    $("#sepia").value = "0"
    $("#hue").value = "0"
    $("#saturation").value = "100"
    $("#invert").value = "0"
    filters()
}

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
const imgPanel = () => {
    //URL
    $("#url").addEventListener("input", () => {
        $(".meme__img").style.backgroundImage = `url(${$("#url").value})`
    })
    //BKGD
    //bkgd color
    $("#bkgd__color").addEventListener("input", () => {
        $(".meme__img").style.backgroundColor = $("#bkgd__color").value
        $("#bkgd__color__code").innerText = `${$("#bkgd__color").value}`
    })
    //bkdg effect
    $("#bkgd__effect").addEventListener("input", () => {
        $(".meme__img").style.backgroundBlendMode = $("#bkgd__effect").value
    })
    //filters
    $("#brightness").addEventListener("change", filters)
    $("#opacity").addEventListener("change", filters)
    $("#contrast").addEventListener("change", filters)
    $("#blur").addEventListener("change", filters)
    $("#grayscale").addEventListener("change", filters)
    $("#sepia").addEventListener("change", filters)
    $("#hue").addEventListener("change", filters)
    $("#saturation").addEventListener("change", filters)
    $("#invert").addEventListener("change", filters)
    // reset filters
    $("#reset__filters__btn").addEventListener("click", resetFilters)
}

// ------------------------- TEXT PANEL FUNCTIONALITIES
//TOP TEXT 
$("#top__text").addEventListener("input", () => {
    $("#meme__top__text").innerText = $("#top__text").value
})
$("#top__text__checkbox").addEventListener("input", () => {
    const isChecked = $("#top__text__checkbox").checked
    if (isChecked) {
        $("#meme__top__text").classList.add("hidden")
    }
    else {
        $("#meme__top__text").classList.remove("hidden")
    }
})
//BOTTOM TEXT
$("#bottom__text").addEventListener("input", () => {
    $("#meme__bottom__text").innerText = $("#bottom__text").value
})
$("#bottom__text__checkbox").addEventListener("input", () => {
    const isChecked = $("#bottom__text__checkbox").checked
    if (isChecked) {
        $("#meme__bottom__text").classList.add("hidden")
    }
    else {
        $("#meme__bottom__text").classList.remove("hidden")
    }
})

let memeText = document.querySelectorAll('.meme__text');
for (const element of memeText) {
    //FONT
    //styles 
    $("#font__selector").addEventListener("input", () => {
        element.style.fontFamily = $("#font__selector").value
    })
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
    //COLOR & BACKGROUND
    //color 
    $("#text__color").addEventListener("input", () => {
        element.style.color = $("#text__color").value
        $(".text__color__code").innerText = `${$("#text__color").value}`
    })
    //bkgd 
    $("#text___bkgd").addEventListener("input", () => {
        element.style.backgroundColor = $("#text___bkgd").value
        $(".text__bkgd__code").innerText = `${$("#text___bkgd").value}`
    })
    $("#transparent__checkbox").addEventListener("input", () => {
        if ($("#transparent__checkbox").checked) {
            element.style.backgroundColor = "transparent"
            $(".meme__img").style.backgroundSize = "cover"
        }
        else {
            element.style.backgroundColor = $("#text___bkgd").value
            $(".meme__img").style.backgroundSize = "contain"
        }
    })
    //outline btns
    $("#outline__light__btn").addEventListener("click", () => {
        element.classList.remove("outline__dark")
        element.classList.add("outline__light")
    })
    $("#outline__dark__btn").addEventListener("click", () => {
        element.classList.remove("outline__light")
        element.classList.add("outline__dark")
    })
    $("#outline__none__btn").addEventListener("click", () => {
        element.classList.remove("outline__dark")
        element.classList.remove("outline__light")
    })
    //spacing
    $("#spacing").addEventListener("input", () => {
        element.style.padding = `${$("#spacing").value}px 50px`
    })
    //leading
    $("#leading").addEventListener("input", () => {
        element.style.lineHeight = `${$("#leading").value}`
    })
}
const inicializar = () => {
    defoultValues()
    resetFilters()
    imgPanel()
}
window.addEventListener("load", inicializar)

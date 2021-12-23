const cls = document.getElementById("cls")
const elm1 = document.getElementById("elm1")
const elm2 = document.getElementById("elm2")
const elm3 = document.getElementById("elm3")
const elm4 = document.getElementById("elm4")
const brs1 = document.getElementById("brs1")
const brs2 = document.getElementById("brs2")
const brs3 = document.getElementById("brs3")



cls.addEventListener("click",(eo) => {
    
elm1.classList.toggle("elm1")

elm2.classList.toggle("elm2")

elm3.classList.toggle("elm3")

elm4.classList.toggle("elm4")


brs1.classList.toggle("brsc1")

brs2.classList.toggle("brsc2")

brs3.classList.toggle("brsc3")

})


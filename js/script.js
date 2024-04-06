"use strict";


// switch mode: light-dark
const themeBtn = document.querySelector("[data-theme-btn]")
const HTML = document.querySelector("html")
let theme = sessionStorage.getItem("theme")
HTML.dataset.theme = theme;


themeBtn.addEventListener("click", () => {
    if (HTML.dataset.theme == "dark") {
        HTML.dataset.theme = "light"
        sessionStorage.setItem("theme", HTML.dataset.theme)
    }
    else if (HTML.dataset.theme == "light") {
        HTML.dataset.theme = "dark"
        sessionStorage.setItem("theme", HTML.dataset.theme)
    }
})

let tabBtns = document.querySelectorAll("[data-tab-btn]");
let tabs = document.querySelectorAll("[data-tab-content]")

tabBtns.forEach(item => {
    item.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tabBtns.forEach(btn => {
            btn.classList.remove("active")
        })
        console.log(item)
        item.classList.add("active")
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab-content') == item.getAttribute('data-tab-btn')) {
                tab.classList.add("active")
            }
        })

    })
})
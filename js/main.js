import { controlCollapse } from "./utils.js";

const btn = document.querySelector("#click-btn")
const div = document.querySelector("div")
const openNav = document.getElementById('open-nav')
const nav = document.getElementById('nav')

const questions = Array.from(document.querySelectorAll('.accordion .question'))
const answers = Array.from(document.querySelectorAll('.accordion .answer'))

questions.forEach((q, idx) => controlCollapse(q, answers[idx]))

questions.forEach((q) => {
    let isOpen = true;
    let icon = q.querySelector('i')
    q.addEventListener("click", (e) => {
        if(isOpen) {
            icon.classList.add("fa-chevron-up");
            icon.classList.remove("fa-chevron-down");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
        isOpen = !isOpen;
    }
)
})

controlCollapse(btn, div);
controlCollapse(openNav, nav)

const isInView = function (el) {
    if (el) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;

        return top >= 0 && bottom <= windowHeight;
    }

    return false;
}
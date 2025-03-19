"use strict";

let sun = document.querySelector(".sun");
let scene = document.querySelector(".scene");

sun.addEventListener("click", () => {
    scene.classList.toggle("night"); /*toggle skifter imellem to tilstande, så en on of off knap*/
});
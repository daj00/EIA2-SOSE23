"use strict";
console.log("Hello world");
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    let body = document.querySelector("body");
    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);
    let divLeft = document.querySelector("div#boxLeft");
    divLeft.addEventListener("click", logInfo);
    divLeft.addEventListener("keyup", logInfo);
    let divRight = document.querySelector("div#boxRight");
    divRight.addEventListener("click", logInfo);
    divRight.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let span = document.querySelector("span");
    span.innerText = "x: " + _event.clientX + "y: " + _event.clientY + " target: " + _event.target;
    let offset = 15;
    span.style.top = (_event.clientY + offset) + "px";
    span.style.left = (_event.clientX + offset) + "px";
}
function logInfo(_event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event);
}
//# sourceMappingURL=script.js.map
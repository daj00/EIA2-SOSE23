console.log("Hello world");

window.addEventListener("load",handleLoad);

function handleLoad() {
    document.addEventListener("mousemove",setInfoBox);
    document.addEventListener("click",logInfo);

    let body: HTMLBodyElement= document.querySelector("body");
    body.addEventListener("click",logInfo);
    body.addEventListener("keyup",logInfo);
    
    let divLeft: HTMLDivElement= document.querySelector("div#boxLeft");
    divLeft.addEventListener("click", logInfo);
    divLeft.addEventListener("keyup", logInfo);
    
    let divRight: HTMLDivElement= document.querySelector("div#boxRight");
    divRight.addEventListener("click", logInfo);
    divRight.addEventListener("keyup", logInfo);
    
}
function setInfoBox(_event:MouseEvent) {
    let span: HTMLSpanElement= document.querySelector("span");
    span.innerText= "x: "+_event.clientX + "y: " + _event.clientY + " target: " + _event.target;
    
    let offset: number = 15;
    span.style.top= (_event.clientY + offset) + "px";
    span.style.left= (_event.clientX + offset) + "px";
    
}
function logInfo(_event: Event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event);

}
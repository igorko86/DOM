const link = document.querySelector("a");
console.log(link);
link.textContent = "MDN";
link.href = "https://google.com"
const section = document.querySelector("section");
const parag = document.createElement("p");
parag.textContent = "Hello world";
section.appendChild(parag);
for(let i = 0; i < 50; i++){
    const parag = document.createElement("p");
    const link = document.createElement("a");
    link.href = "https://google.com";
    link.textContent = "Hi "+ i;
    section.appendChild(parag);
    let paragsLinks= parag.appendChild(link);
   
}
function timer(){
   parag.parentNode.removeChild(parag);
}
 setTimeout(timer, 5000);
console.log(parag);
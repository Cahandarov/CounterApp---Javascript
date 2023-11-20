var screen = document.getElementById("display");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
screen.value = 0;
screen.innerText = screen.value;

decrease.addEventListener("click", ()=>{
    screen.value = screen.value-1;
    screen.innerText = screen.value;
    decrease.style.border = "3px solid red";
    increase.style.border = "3px solid #222222";
})

increase.addEventListener("click", ()=>{
    screen.value = screen.value + 1;
    screen.innerText = screen.value;
    increase.style.border = "3px solid green";
    decrease.style.border = "3px solid #222222";
})

reset.addEventListener("click", ()=>{
    screen.value = 0;
    screen.innerText = screen.value;
    decrease.style.border = "3px solid #222222";
    increase.style.border = "3px solid #222222";
})
Counter App Readme
This simple Counter App is a basic web application built using HTML and JavaScript. The purpose of this app is to provide a user interface with three buttons (Decrease, Reset, and Increase) that allow the user to manipulate and display a numerical value on the screen.

Features
1. Display Screen
The counter value is displayed on the screen. The initial value is set to 0.

var screen = document.getElementById("display");
screen.value = 0;
screen.innerText = screen.value;

2. Decrease Button
Clicking the Decrease button decreases the counter value by 1. The button also changes its border color to red.

var decrease = document.getElementById("decrease");

decrease.addEventListener("click", ()=>{
    screen.value = screen.value - 1;
    screen.innerText = screen.value;
    decrease.style.border = "3px solid red";
    increase.style.border = "3px solid #222222";
});

3. Increase Button
Clicking the Increase button increases the counter value by 1. The button also changes its border color to green.

var increase = document.getElementById("increase");

increase.addEventListener("click", ()=>{
    screen.value = screen.value + 1;
    screen.innerText = screen.value;
    increase.style.border = "3px solid green";
    decrease.style.border = "3px solid #222222";
});

4. Reset Button
Clicking the Reset button sets the counter value back to 0. Both the Increase and Decrease button borders are reset to their default color.

var reset = document.getElementById("reset");

reset.addEventListener("click", ()=>{
    screen.value = 0;
    screen.innerText = screen.value;
    decrease.style.border = "3px solid #222222";
    increase.style.border = "3px solid #222222";
});

How to Use
Open the HTML file in a web browser.
You will see the counter value displayed on the screen.
Use the Decrease button to decrease the counter value.
Use the Increase button to increase the counter value.
Use the Reset button to reset the counter value to 0.

Feel free to incorporate or modify this code in your projects as needed.

Contact

If you have any questions, suggestions, or need support, you can contact me through the following:
cahandarov@gmail.com




## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-projectygujhkj
```
    
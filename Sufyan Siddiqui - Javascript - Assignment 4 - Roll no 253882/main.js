let nameInput = document.querySelector("#userInput")
let nameButton = document.querySelector(".nameButton")
let nameUser = document.querySelector(".name")

    nameButton.addEventListener("click", function () {
    nameUser.innerHTML = nameInput.value
});

let descInput = document.querySelector("#userInput")
let descBtn = document.querySelector(".descriptionButton")
let desc = document.querySelector(".description")

    descBtn.addEventListener("click", function () {
    desc.innerHTML = descInput.value
});

let mainBox = document.querySelector(".mainBox")
let backgroundButton = document.querySelector(".backgroundButton")
let colors = ["White", "Grey", "Gray"]
let i = 0;
backgroundButton.addEventListener("click", function(){
mainBox.style.backgroundColor = colors[i]
i++;
});

let resetButton = document.querySelector(".resetButton")
    resetButton.addEventListener("click", function(){
    nameUser.innerHTML = "Sufyan Siddiqui"
    desc.innerHTML = "Web and App Developer"
});
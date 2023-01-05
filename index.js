import categories from "./categories.js";

//grab generate button
const genButton = document.getElementById("gen-btn")

const genCats = document.getElementsByClassName("result-text");
const catCheckboxes = document.getElementsByClassName("result-checkbox");
const colorRes = document.getElementsByClassName("color-view")
const colorHex = document.getElementsByClassName("hex-code");

function getRandomHex() {
    return Math.floor(Math.random()*16777215).toString(16);
}


function getRandomColor() {
    for (let i = 0; i < colorRes.length; i++) {
        let randomNum = getRandomHex()
        colorRes[i].style.backgroundColor = `#${randomNum}`
        colorHex[i].innerText = `#${randomNum.toString().toUpperCase()}`
        
        colorRes[i].addEventListener("click", function copyHex() {
            navigator.clipboard.writeText(`#${randomNum.toString().toUpperCase()}`);
            alert("Copied!");
        });
    }    
}

function generatePrompt() {
    //random categories
    for (let i = 0; i < categories.length; i++) {
        //check if corresponding checkbox is cheked
        if (catCheckboxes[i].checked == true) {
            genCats[i].innerText = "---";
            //break;
        } else {
            genCats[i].innerText = categories[i][Math.floor(Math.random() * categories[i].length)]
        }
    }

    //check if color checkbox is checked
    if (catCheckboxes[3].checked == true) {
        return;
    } else {
        getRandomColor() 
    }
}



genButton.addEventListener("click", generatePrompt)
window.addEventListener("load", generatePrompt)
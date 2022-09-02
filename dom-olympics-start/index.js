var header = document.getElementById("header")
header.innerHTML += "<b>JavaScript made this!!<br><span class='name'> Rey Martinez</span><span> wrote the JavaScript</span></b>"

document.getElementById("header").style.textAlign = "center"
document.getElementById("header").style.fontSize = "20px"

var message = document.getElementsByClassName("message")

message[0].textContent = "hey wanna hear a funny joke"
message[1].textContent = "sure!"
message[2].textContent = "When I wrote this code, only me and God knew how it works, Now only God knows..."
message[3].textContent = "lol"

var clear = document.getElementById("clear-button")
var messages = document.querySelector(".messages")
clear.addEventListener('click' , () => {
    messages.innerHTML = ""
})


var themeDropDown = document.getElementById("themeDropDown") 
themeDropDown.addEventListener("change", function(){
        if (themeDropDown.value === "themeOne"){

            for (let i = 0 ; i < left.length ; i++) {
                left[i].style.backgroundColor = "burlywood"
                
                
            }
            for (let i = 0 ; i < right.length ; i++) {
                right[i].style.backgroundColor = "lightblue"
                right[i].style.color = "white"

            }
        }
        if (themeDropDown.value === "themeTwo"){
            for (let i = 0 ; i < left.length ; i++) {
                left[i].style.backgroundColor = "red"
                left[i].style.color = "white"
            }
            for (let i = 0 ; i < right.length ; i++) {
                right[i].style.backgroundColor = "black"
                right[i].style.color = "white"
            }
        }
        console.log(themeDropDown.value)
})

var left = document.querySelectorAll(".left")
var right = document.querySelectorAll(".right")

var form = document["message"]
console.dir(document)

let i=0

form.addEventListener("submit", (e) => {
    e.preventDefault()
    var input = document.getElementById("input").value
    console.log("test")

    if (i%2 === 0) {
        i++
        messages.innerHTML+="<div class = 'message left'>"+input+"</div>"
    }
    else if (i%2 !== 0) {
        i++
        messages.innerHTML+="<div class = 'message right'>"+input+"</div>"
    }
})
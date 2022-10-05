// const form = document.myForm
// form.addEventListener("submit", (event) => {
//     event.preventDefault() 

//     firstN = document.form.firstName.value
//     lastN = document.form.lastName.value

//     console.log(form.gender.value)
// })

// alert("hey")


const form = document.myForm
var submit = document.getElementById("submit");

function formAlert() {
    const firstN = form.firstName.value;
    const lastN = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const city = form.city.value;
    
    const checkedInputs = []
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].value)
        }
    }
    
    alert("First Name: " + firstN + "\nLast Name: " + lastN + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + city + "\nDiet: " + checkedInputs);
}


submit.addEventListener("click", formAlert )

const form = document.myForm
const submit = document.getElementById("submit");

function mulValues(goomba , bobomb , cheep , res) {
    goomba = Number(form.goomba1.value * 5)
    
    bobomb = Number(form.bobomb1.value * 7)

    cheep = Number(form.cheep1.value * 11)

    res = goomba + bobomb + cheep

    const h2 = document.createElement('h1')
    h2.textContent = res
    document.getElementsByTagName("div")[2].append(h2)


}
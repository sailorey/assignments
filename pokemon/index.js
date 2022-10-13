const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon/", true )
xhr.send()

xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 && xhr.status === 200) { 
		const jsonData = xhr.responseText; 
		const data = JSON.parse(jsonData); 

        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)

    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        const jsonData = xhr.responseText
        console.log(jsonData)
    }
}

function showData (pokemon){
    for(let i = 0; i < pokemon.length; i++){
    const span = document.createElement('span')
    span.textContent = pokemon[i].name
    document.body.appendChild(span)
    }
}

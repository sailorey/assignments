const form = document["addItem"]
const list = document.getElementById("list")

form.addEventListener("submit" , function(event) {
   event.preventDefault()

    const title = form.title.value
    form.title.value = ""
        
//create list
    const li = document.createElement('li')
    list.append(li)
//create a div for the list names
    const div = document.createElement('div')
    div.classList.add("divClass")
    li.prepend(div)
    div.innerHTML = title

//create buttons
//use classList and text content for buttons
//give functionality to these buttons
//you can uses similar functionality as the delete for your edit button

//X(delete)button
    const clear = document.createElement("button")
    clear.classList.add("deleteBtn")
    clear.textContent = "X"
    li.append(clear)
    clear.addEventListener("click", deleteItem)

function deleteItem(event) {
    if(event.target.classList.contains("deleteBtn")){
         event.target.closest("li").remove()
   }
}
//edit button
    const edit = document.createElement("button")
    edit.classList.add("editBtn")
    edit.textContent = "Edit"
    li.append(edit)

    edit.addEventListener("click", editItem)
    function editItem(event) {
        if(event.target.classList.contains("editBtn")){
        div.innerHTML = "<form id=myForm><input type = 'text' id ='inputSave'/></form>"
        edit.innerHTML = "Save"
    }
            
        // event.target.closest("li").contentEditable
        //try using contentEditable on the closest list item and see if that works

    }
})
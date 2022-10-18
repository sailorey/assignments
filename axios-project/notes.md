# Intro to Axios
    - Axios can be downloaded as a node_module, or attained through a CDN
    - A CDN, or Content Deliver Network, is loaded into your application through a script tag on your html page.
        - The axios CDN can be found on cdnjs.com's website: https://cdnjs.com/libraries/axios
        
    - Axios is a promise based HTTP client.
    - This means it allows us to make HTTP requests, and the handling of those requests and the subsequent responses on the front end is handled with promises.

html src for axios code
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>
        <script src="index.js"></script>
    </body>
</html>
```
java
console.log(axios)

# GET request
    - A Get request as we recall is for 'getting' data
    - This can be requesting an entire webpage, or requesting data that we can manipulate for our webpage.
    
    - In the context of this course, we will always be using axios to get and manipulate data rather than receiving an entire webpage.
    
    
    - For these lessons we will be using the V school Todo API as it will allow us to practice all four of the HTTP methods we are learning.  The documentation can be found here:
        - https://coursework.vschool.io/v-schools-todo-api-documentation/

// Get requests with axios
// url: https://api.vschool.io/scrimbalessons/todo

# GET all


axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))


// Get One
// axios.get("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

 # Post Request

    - Allows you to send data to a Database to have saved.
    - The post request requires you send the object along with the request as the request 'body'.
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

HTML
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <form name="todoform">
            <input name="title" placeholder="Title"/>
            <input name="description" placeholder="Description"/>
            <input name="imgUrl" placeholder="Image Url"/>
            <button>Submit</button>
        </form>
        
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>
        <script src="index.js"></script>
    </body>
</html>
```
index.js
```
// Post request
// Request Body
const todoForm = document.todoform
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/scrimbalessons/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
})
// GET all todos
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
```

# Delete Request

    - The delete request is for removing an item that currently exists in the database.
    
    - Delete requests will typically require the id or identifier of the specific resource so that the database knows which item to remove.
    
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

    // DELETE request with axios

const button = document.getElementById('delete-button')

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})



// GET one
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))

# PUT request

    - The put request is for updating an existing item in a database
    - The method will need both the id of the item to update, and the data in which it will be updated with.
    
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

```
// PUT request with axios
const updates = {
    title: "I CHANGED THE TITLE!!!"
}
axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
// GET 
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
```


   # Auto Updating the webpage

<!-- <!DOCTYPE html>
<html> -->
    <head>
    </head>
    <body>
        
        <form name="todo-form">
            <input type="text" name="title" placeholder="Title"/>
            <button>Submit</button>
        </form>
        
        <div id="todo-list">
        
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>
        <script src="index.js"></script>
    </body>
<!-- </html> -->

// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/johnsmith2/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    // document.getElementById('todo-list').innerHTML = ""
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/johnsmith2/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})


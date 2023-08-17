console.log("connecté")

const form = document.getElementById('form')
const todo = document.getElementById('todo')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const todoValue = todo.value;

    let item =` 
    <div class="item">
        <p>${todoValue}</p>
        <button class="btn-delete">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn-archive">
            <i class="fa-solid fa-circle-check"></i>
        </button>
    </div>`

    const listItems = document.querySelector('.list-items')
    listItems.innerHTML += item;
    const btnDelete = document.querySelectorAll('.btn-delete')

    btnDelete.forEach( i =>{
        i.addEventListener('click', function(){
            i.parentElement.remove()
        })
    })

    const btnArchive = document.querySelectorAll('.btn-archive')

    btnArchive.forEach( i =>{
        i.addEventListener('click', function(){
            const parent = i.parentElement
            parent.classList.toggle('done')
        })
    })
    form.reset()
})

/*Dark Mode*/

const switchBox = document.querySelector(".switch")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const icone = document.querySelector(".fas")
const todoList = document.querySelector(".todo-list")

btn.addEventListener('click', function(){
    btn.classList.toggle("btn-change")
    icone.classList.toggle("fa-sun")
    icone.classList.toggle("fa-moon")
    icone.classList.toggle("icone-change")
    switchBox.classList.toggle("switch-change")
    container.classList.toggle("container-change")
    title.classList.toggle("title-change")
    todoList.classList.toggle("todo-listRemove")
})
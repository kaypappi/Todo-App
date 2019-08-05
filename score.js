let todos=["wash the dishes", "go shopping", "take a hike", "visit friends"]
const lists=document.querySelector('.todos')
const search=document.querySelector('.search')
console.log(search)

displayTodo=(arr=todos)=>{
    const collection=document.querySelector('ul')
    console.log(collection)
    collection.innerHTML=''
    arr.map((todo,index)=>{
        collection.innerHTML += `<li key=${index} class="collection-item deep-purple lighten-1">
    <div>${todo}<a href="#!" class="secondary-content"><i class=" delete fas fa-trash-alt"></i></a></div>
    </li>`
    })
}

deleteTodo=(e)=>{
    
}

lists.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        let list=e.target.parentElement.parentElement.innerText
        console.log(list)
        todos.splice(list,1)
        displayTodo()
        
    }
})

search.addEventListener('keyup',e=>{
    console.log('gcvhj')
    value=e.target.value
    newTodos=todos.filter(todo=>{
        return todo.includes(value.trim())
    })
    displayTodo(newTodos)
})


const addTodoField=document.querySelector("form")
console.log(addTodoField)
addTodoField.addEventListener('submit',e=>{
    e.preventDefault();
    todos.push(addTodoField.add.value)
    addTodoField.add.value=''
    displayTodo();
})

displayTodo();
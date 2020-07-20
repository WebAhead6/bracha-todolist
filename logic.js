var todos = []
var counter = 0


// updates the todos array, and returns the todo id
function addTodo(description) {
    const todoObj = { text: description, completed: false, id: counter }
    todos = todos.concat(todoObj)

    // we increase the counter so next time we would have 
    // a new unique id for the next future todo
    counter++

    return todos
}

// takes a todo id and completes it 
function completeTodo(id) {
    todos = todos.map((todo) => {
        if (id === todo.id) {
            return {
                text: todo.text,
                completed: !todo.completed,
                id: todo.id,
            }
        }

        return todo
    })

    return todos
}

function removeTodo(id) {
    // keep all the elements that do not equal the index given
    // meanning it will only delete the index given in the function
    // argument for this function
    todos = todos.filter((todo) => todo.id !== id)

    return todos
}
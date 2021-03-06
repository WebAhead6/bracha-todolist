const todoList = document.getElementById('todolist')
const completedTodos = document.getElementById('completed-todos')
const todoInput = document.getElementById('todo-text')
const todoForm = document.getElementById('todo-form')

todoForm.addEventListener('submit', event => {
    const todoDescription = todoInput.value
    event.preventDefault()

    const newTodos = addTodo(todoDescription)

    // resets the form
    todoForm.reset()

    buildTodos(newTodos)
})

function buildTodos(todos) {
    clearTodoList()

    todos.forEach((todo) => {
        // create the elements that we are going to need
        const todoItem = document.createElement('li')
        const todoText = document.createElement('span')
        const todoRemoveButton = document.createElement('button')
        const todoCheckbox = document.createElement('input')

        // checkbox is for checking off or completing a todo
        todoCheckbox.type = 'checkbox'
        todoCheckbox.checked = todo.completed
        todoCheckbox.addEventListener('change', () => {
            const result = completeTodo(todo.id)
            buildTodos(result)
        })
        todoItem.appendChild(todoCheckbox)

        // the todo text
        todoText.textContent = todo.text
        todoItem.appendChild(todoText)

        // the remove button
        todoRemoveButton.textContent = 'Remove'
        todoRemoveButton.addEventListener('click', () => {
            const result = removeTodo(todo.id)
            buildTodos(result)
        })
        todoItem.appendChild(todoRemoveButton)

        // if the todo is completed then append it to the completed list
        if (todo.completed) {
            completedTodos.appendChild(todoItem)
        } else {
            todoList.appendChild(todoItem)
        }

    })
}

function clearTodoList() {

    // removes all the children of the todo list
    while (todoList.firstChild) {
        todoList.firstChild.remove()
    }

    // removes all the children of the todo list
    while (completedTodos.firstChild) {
        completedTodos.firstChild.remove()
    }
}

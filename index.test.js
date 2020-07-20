test("Submitting a new task adds it to the list", t => {
    const result = addTodo('Buy some milk mario!')

    t.equal(result[0].text, 'Buy some milk mario!')
    t.equal(result[0].completed, false)
});

test("Checking an entry marks it as complete", t => {
    const result = completeTodo(todos[0].id)

    t.equal(result[0].text, 'Buy some milk mario!')
    t.equal(result[0].completed, true)
});


test("Deleting an entry removes it from the list", t => {
    const result = removeTodo(todos[0].id)

    t.equal(result.length, 0)
});
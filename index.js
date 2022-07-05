
let todos = [
    {id:1, content: 'Zoom Meeting'},
    {id:2, content: 'Debugging site'},
    {id:3, content: 'Coding on my Personal site'}
];

const listTodos = (todos) => {
    const todoList = todos.length ? (
        todos.map((todo) => {
            return `<li class="todo" onclick="deleteTodo(${todo.id})"> ${todo.content} </li>`;
        })
    ) : `<li> none todo's left </li>`;
    
    document.getElementById('todos').innerHTML = todoList;
}

listTodos(todos);

const addTodo = () => {
    const elm = document.getElementById('todo');
    if (elm.value) {
        let todo = {id : todos.length + 1, content: elm.value};
        todos.push(todo);
        listTodos(todos);
        elm.value = '';
    }
}

const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
        return todo.id !== id
    });
    todos = newTodos;
    listTodos(todos);
}
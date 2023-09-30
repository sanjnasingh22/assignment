async function todos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const todoTable = document.getElementById('todo-table');

        data.forEach(todo => {
            let  row = document.createElement('tr');
            row.innerHTML = `
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? 'Completed' : 'Incomplete'}</td>
            `;
            todoTable.append(row);
        });
    } catch (error) {
        console.error(error);
    }
}

todos();









// bikin penampungnya dulu
const todolist = [];


function clearTodo(){
    const todoBody = document.getElementById('todoBody');

    while (todoBody.firstChild) {
        todoBody.removeChild(todoBody.firstChild);
    }
}



function displayTodolist() {
    clearTodo();
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];

        const tr = document.createElement("tr");
        const tdButton = document.createElement("td");
        tr.appendChild(tdButton);

        const buttonDone = document.createElement("input");
        buttonDone.type = "button";
        buttonDone.value = "Done";
        tdButton.appendChild(buttonDone);

        const tdTodo = document.createElement("td");
        tdTodo.textContent = todo;
        tr.appendChild(tdTodo);

        const tBody = document.getElementById("todoBody");
        tBody.appendChild(tr);
    }
}
//kita panggil nama forms nya
document.forms['todoForm'].onsubmit = function(event){
    event.preventDefault();
    //manggil form yang bernama ini
    const todo = document.forms['todoForm']['todo'].value;
    //lalu diambil nilainya, masukan ke varibel todolist yg atas
    todolist.push(todo);
    // ini ketika sudah ngepush hasilnya maka aka ke reset
    document.forms['todoForm'].reset();

    console.log(todolist);
    displayTodolist();
}
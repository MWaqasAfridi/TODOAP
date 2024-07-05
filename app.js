var list = document.getElementById("list");

function addTodo(){
    // <===================== for li =================>

    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li");
    var sendText = document.createTextNode(todo_item.value);
    li.appendChild(sendText);
    list.appendChild(li);

    // <===================== for empty input field =================>
    todo_item.value = "";

    // <===================== for create delete button =================>
    
    var dltbtn = document.createElement("button");
    var btnText = document.createTextNode("DELETE");
    dltbtn.appendChild(btnText);
    li.appendChild(dltbtn);
    dltbtn.setAttribute("onclick","dltListItem(this)");

    // <===================== for create Edit button =================>

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick","editListItem(this)")

}

    // <===================== for delete function =================>

function dltListItem(e){
    e.parentNode.remove();
}

    // <===================== for edit function =================>

function editListItem(e){
    var editValue = prompt("Enter your edit value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}

    // <===================== for delete all  =================>

function dltAll(){
    list.innerHTML = "";
}

    // <===================== for Enter Press key  =================>
    
function enter(event){
    if(event.keyCode === 13){
        addTodo()
    }
}


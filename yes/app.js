
var list = document.getElementById("list")

function addtodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext)
//created delet button
var delBtn = document.createElement("button")
var textBtn = document.createTextNode("DELET")
delBtn.appendChild(textBtn)
li.appendChild(delBtn)
delBtn.setAttribute("id","delet")
delBtn.setAttribute("onclick","deletitem(this)")

//created edit button

var editBtn = document.createElement("button")
var textBtn = document.createTextNode("EDIT")
editBtn.appendChild(textBtn)
li.appendChild(editBtn)
editBtn.setAttribute("id","edit")
editBtn.setAttribute("onclick","edititem(this)")

list.appendChild(li)  

    todo_item.value = ""

    console.log(li)
}

function deletitem(e){
     e.parentNode.remove()
}

function edititem(e){
    
    var val = e.parentNode.firstChild.nodeValue   //is se hame value mil gai jo likha tha
    var  editValue = prompt("enter your edit value",val)
    e.parentNode.firstChild.nodeValue = editValue 
 
}



function deletall(){
    list.innerHTML=""
}

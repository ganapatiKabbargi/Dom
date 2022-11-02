
var formEl=document.querySelector("#addForm")
var ul=document.querySelector("#items")

formEl.addEventListener("submit" , Onsubmit)
ul.addEventListener("click" ,remove)

function Onsubmit(e){
    e.preventDefault();
    var item=document.querySelector("#item").value

    var li=document.createElement("li")
    var text=document.createTextNode(item)
    li.appendChild(text)
    li.className="list-group-item"

    var deletebtn=document.createElement("button")
    var Editbtn=document.createElement("button")
    deletebtn.className="btn btn-danger btn-sm float-right delete"
    Editbtn.className="btn  btn-sm  float-right edit"
    deletebtn.appendChild(document.createTextNode("X"))
    Editbtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(Editbtn)
    li.appendChild(deletebtn)
    
    ul.append(li)
}

function remove(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure")){
            var li=e.target.parentElement
            ul.removeChild(li);
        }
    }
}




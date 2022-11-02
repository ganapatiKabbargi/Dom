
var formEl=document.querySelector("#addForm")
var ul=document.querySelector("#items")
var desc=document.querySelector("#desc")
var search=document.querySelector("#filter")

formEl.addEventListener("submit" , Onsubmit)
ul.addEventListener("click" ,remove)
search.addEventListener("keyup",filter)

function Onsubmit(e){
    e.preventDefault();
    var item=document.querySelector("#item")
    

    var li=document.createElement("li")
    var text=document.createTextNode(item.value)
    var descText=document.createTextNode(desc.value)
    var space=document.createTextNode(" ")
    li.appendChild(text)
    
    li.appendChild(descText)
    li.className="list-group-item"
     
    var deletebtn=document.createElement("button")
    var Editbtn=document.createElement("button")
    deletebtn.className="btn btn-danger btn-sm float-right delete"
    Editbtn.className="btn  btn-sm  float-right edit"
    deletebtn.appendChild(document.createTextNode("X"))
    Editbtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(deletebtn)
    li.appendChild(Editbtn)
    
    ul.appendChild(li)

    item.value=" ";
    desc.value=" ";
}

function remove(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure")){
            var li=e.target.parentElement
            ul.removeChild(li);
        }
    }
}

function filter(e){
    var text=e.target.value.toLowerCase()
    var items=ul.getElementsByTagName("li")
    Array.from(items).forEach((item)=>{
       var itemText=item.firstChild.textContent
       
       var descText=item.childNodes[1].textContent
       
       if(itemText.toLowerCase().indexOf(text) != -1  || descText.toLowerCase().indexOf(text) !=
        -1){
        item.style.display="block"
       }else{
        item.style.display="none"
       }
    })
}





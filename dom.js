var items=document.querySelector("#items")
items.parentNode.style.backgroundColor="red"

var items=document.querySelector("#items")
items.parentElement.parentElement.style.backgroundColor="yellow"

console.log(items.firstchild)


items.firstElementChild.style.backgroundColor="yellow"

console.log(items.lastChild)

items.lastElementChild.style.backgroundColor="blue"

var formEl=document.querySelector(".form-inline")
console.log(formEl.nextElementSibling)
formEl.nextElementSibling.style.color="green"

formEl.previousElementSibling.style.color="yellow"

var newli=document.createElement("li")

newli.setAttribute("class","list-group-item")
newlitext=document.createTextNode("Hello")
newli.appendChild(newlitext)
items.prepend(newli)


var helloText=document.createTextNode("Hello")
var container=document.querySelector("header .container")
container.prepend(helloText)






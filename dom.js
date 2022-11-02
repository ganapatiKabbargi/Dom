// querryselector

var secondEl=document.querySelector(".list-group-item:nth-child(2)")
var thirdEl=document.querySelector(".list-group-item:nth-child(3)")
secondEl.style.backgroundColor="green"
thirdEl.style.visibility="hidden"

// querySelectorAll

var listItemAll=document.querySelectorAll(".list-group-item")
listItemAll[1].style.color="green"

var odd=document.querySelectorAll(".list-group-item:nth-child(odd)")
for(let item of odd){
    item.style.backgroundColor="green"
}


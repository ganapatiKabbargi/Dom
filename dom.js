var itemsEl=document.getElementsByClassName("list-group-item");

itemsEl[1].style.backgroundColor="green";

for(let item of itemsEl){
    item.style.fontWeight="bold"
    item.style.color="red"
}
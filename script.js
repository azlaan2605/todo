let onbtnclick = document.getElementById("btn")
let todocontainer = document.getElementById("container")
let inputhere = document.getElementById("typeHere")

onbtnclick=addEventListener('click',function() {
    let paragraph=document.createElement('p');
    paragraph.classList.add("para-style");
    paragraph.innerText = inputhere.value;
    todocontainer.appendChild(paragraph);
    inputhere.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })
})
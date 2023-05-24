let addtodoButton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtodoButton.addEventListener('click',function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })

})
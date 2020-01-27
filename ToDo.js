let compl = document.getElementsByClassName ('complete')
let und = document.getElementById ('undo')
let del = document.getElementsByClassName ('delete')
let name= document.getElementById ('task-name')
let list= document.getElementById ('taskss')
let elt=document.getElementsByClassName("edit-task")
let inp2 = document.getElementById ('input-task')


//compl.addEventListener ('click',disp);
// add task in input
let butad = document.getElementById ('butadd') 
let inp = document.getElementById ('input-task')
target = document.querySelector('span:first-child')
txt = document.createTextNode('')
document.getElementById('old').appendChild(txt)


    function myFunction() {
let buttncoml=document.createElement("button")
buttncoml.innerHTML="Complete"
buttncoml.classList.add("complete")
let buttdel=document.createElement("button")
buttdel.classList.add("delete")
 
buttdel.innerHTML="Delete"
let text=document.createElement("span")
 
text.innerHTML=inp2.value
let elt=document.createElement("div")
elt.appendChild(buttncoml)
elt.appendChild(buttdel)
elt.appendChild(text)
list.appendChild(elt)
    }
butad.addEventListener('click',myFunction)
//fonction delete
list.addEventListener('click', function delett(e) {
    var parent =e.target.parentElement
    if(e.target.className==="delete")
 {   parent.remove() }
})
list.addEventListener('click', function complete(e) {
    var parent =e.target.parentElement
    if(e.target.className==="complete")
    {parent.lastElementChild.style.textDecoration="line-through";
    e.target.innerHTML="Undo" ;
    }
  
})






const add = document.getElementById('add');

var todo = document.querySelectorAll(".delete");
for(var i=0; i<todo.length; i++)
{
    todo[i].onclick = function(){
        this.parentNode.remove();
    }
}

let tasks = document.querySelectorAll(".task")
for(var i=0; i<tasks.length; i++)
{
    tasks[i].onclick = function(){
        this.classList.toggle('completed');
    }
}

add.addEventListener("click", ()=>{
    let input = document.querySelector('#newtask input')
    if(input.value.length==0)
    {
        alert("Please Enter a Task");
    }
    else
    {
        document.querySelector("#tasks").innerHTML +=
        `<div class = "task">
            <span id="taskname">
                ${input.value}
            </span>
            <button class = "delete"> <i class="fas fa-times"></i> </button>
        </div>`;
        input.value = "";
        var todo = document.querySelectorAll(".delete");
        for(var i=0; i<todo.length; i++)
        {
            todo[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    let tasks = document.querySelectorAll(".task")
    for(var i=0; i<tasks.length; i++)
    {
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
})


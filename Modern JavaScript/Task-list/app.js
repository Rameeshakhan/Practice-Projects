//getting input text
const inp = document.querySelector("#input")
const btn = document.querySelector("#btn")
const showTask = document.getElementById("task-list")

console.log(showTask)
const task_info = localStorage.getItem("task_list")

if(task_info){
    showTask.innerHTML = task_info
}else{
    showTask.innerHTML = "No tasks"
}

btn.addEventListener("click" , function(e){
    let inputValue = inp.value
    e.preventDefault()
    const li = document.createElement("li")
    li.innerText= inputValue
    const addedList = showTask.appendChild(li)
    localStorage.setItem("task_list" ,addedList )
})

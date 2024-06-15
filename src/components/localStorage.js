export function getTask () {
    return JSON.parse(localStorage.getItem("tasks"))
}
export function setTask (tasks) {
    localStorage.setItem("tasks", tasks)
}
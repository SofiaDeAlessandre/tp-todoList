export function getTask() {
  if (localStorage.getItem("tasks") !== null) {
    if (JSON.parse(localStorage.getItem("tasks")).length >= 0) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return false;
    }
  }
  return false;
}

export function setTaskLS(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return JSON.parse(localStorage.getItem("tasks"));
}

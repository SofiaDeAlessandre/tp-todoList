import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { getTask, setTaskLS } from "./localStorage";

export function EditTask({ task, setIsEdit, tasks, setTasks, id }) {
  function handleCancelEdit() {
    setIsEdit(false);
  }

  function handleEditTask(e) {
    e.preventDefault();
    setIsEdit(false);

    const newTaskArray = getTask().map((tasks) => {
      if (tasks.id === id) {
        return {
          ...tasks,
          task: e.target.description.value,
        };
      } else {
        return tasks;
      }
    });
    setTasks(newTaskArray);
    setTaskLS(newTaskArray);
  }

  return (
    <>
      <form
        defaultValue=""
        onSubmit={handleEditTask}
        style={{ margin: "auto" }}
      >
        <TextField defaultValue={task} name="description" size="small" />
        <Button
          variant="outlined"
          type="submit"
          style={{
            marginInline: "20px",
            color: "#9c27b0",
            borderColor: "#9c27b0",
            height: "40px",
          }}
          size="medium"
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          style={{
            height: "40px",
            borderColor: "#000000cc",
            color: "#000000cc",
          }}
          size="medium"
          onClick={handleCancelEdit}
        >
          Cancelar
        </Button>
      </form>
    </>
  );
}

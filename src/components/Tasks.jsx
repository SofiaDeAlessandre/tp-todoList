
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

 import { EditTask } from "./EditTasks";
import {
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
  } from "@mui/material";



export function Task ( {id, task, tasks, setTasks}) {
    const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  function handleToggleEdit() {
    setIsEdit(true);
  }

  function removeTasks(idTask) {
    const taskFiltered = tasks.filter((task) => task.id !== idTask);
    setTasks(taskFiltered);
    localStorage.setItem("tasks", JSON.stringify([taskFiltered]))}
    return (
        <>{isEdit ? (
            <EditTask task={task} setIsEdit={setIsEdit} setTasks={setTasks} />
          ) : (
            <Typography variant="h6" key={id}>
              {task}
            </Typography>
          )}
          <Button onClick={() => removeTasks(id)}>
            <MdDelete
              style={{ color: "#f8bbd0", width: "3vh", height: "3vh" }}
            />
          </Button>
          <Button>
            <FaEdit
              onClick={handleToggleEdit}
              style={{ color: "#f8bbd0", width: "3vh", height: "3vh" }}
            />
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            }
          /></>
    )
}
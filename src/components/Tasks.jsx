
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
import { setTaskLS } from "./localStorage";



export function Task ( {id, task, complete, tasks, setTasks}) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(complete);
  

  const handleCheckboxChange = (event, id) => {
    setIsChecked(event.target.checked);
    console.log(event)
    // const index = tasks.findIndex(id);
    // tasks[index].complete =! tasks[index].complete;
    const newList = tasks.map((item)=> {
         if(item.id===id){
           item.complete=!item.complete
         } return item
       })
       setTasks(newList)
       setTaskLS(newList)
    console.log("id seleccionado", id)
  }
  function handleToggleEdit() {
    setIsEdit(true);
  }



  function removeTasks(idTask) {
    const taskFiltered = tasks.filter((task) => task.id !== idTask);
    setTasks(taskFiltered);
    localStorage.setItem("tasks", JSON.stringify([taskFiltered]))}

    return (
        <>{isEdit ? (
           <EditTask task={task} id={id} setIsEdit={setIsEdit} setTasks={setTasks} tasks={tasks} />
          ) : (
            complete? (<Typography variant="h6" color="red" key={id}>
              {task}
            </Typography>) : (<Typography variant="h6" key={id}>
              {task}
            </Typography>)
            
          )}
          <Button onClick={() => removeTasks(id)}>
            <MdDelete
              style={{ color: "#1769aa", width: "3vh", height: "3vh" }}
            />
          </Button>
          <Button>
            <FaEdit
              onClick={handleToggleEdit}
              style={{ color: "#1769aa", width: "3vh", height: "3vh" }}
            />
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 30 }, color: "#1769aa" }}
                checked={isChecked}
                onChange={(e) => handleCheckboxChange(e, id)}
              />
            }
          /></>
    )
}
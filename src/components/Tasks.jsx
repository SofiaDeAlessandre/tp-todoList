
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
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = (event, id) => {
    setIsChecked(event.target.checked);
    // const newList = tasks.map((item)=> {
    //      if(item.id===id){
    //        item.complete=!item.complete
    //      } return item
    //    })
    //    setTasks(newList)
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
            <Typography variant="h6" key={id}>
              {task}
            </Typography>
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
                onChange={handleCheckboxChange}
              />
            }
          /></>
    )
}
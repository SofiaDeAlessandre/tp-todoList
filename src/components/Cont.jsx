import * as React from "react";
import {
  Container,
  TextField,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Task } from "./Tasks"
import { EditTask } from "./EditTasks";
import { getTask } from "./localStorage";

export default function Cont() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || setTasks(JSON.stringify(tasks) )
  );
  const [filtered, setFiltered] = useState("all")
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {

    setFiltered(e.target.value)

   const filteredTasks = tasks.filter((task)=> {
      if ( e.target.value === "complete") {
       return tasks.complete === true
      } else if ( e.target.value === "incomplete"){
return task.complete === false
      } else {
        return true
      } 
    })
    //setTasks(filteredTasks)
console.log(filteredTasks)
  };

  function addTasks() {
    const taskAdd = {
      id: crypto.randomUUID(),
      task: newTask,
      complete: false,
    };
    setTasks([...tasks, taskAdd]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskAdd]));
    console.log(taskAdd);
    console.log(tasks)
  }

  return (
    <Container key={tasks.id}
      sx={{
        backgroundColor: "transparent",
        height: "100vh",
        width: "100vh",
        padding: "16px",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: {xs:"column", md:"row"} }}>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Ingrese una tarea"
          type="text"
          variant="outlined"
          sx={{ margin: "10px" }}
          onChange={(e) => setNewTask(e.target.value)
          }
        />
        <Container>
          <Select
            fullWidth
            sx={{ minWidth: 120, margin: "10px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Seleccion"
            onChange={handleChange}
            value={filtered}
          >
            <MenuItem value="all" selected>Todas</MenuItem>
            <MenuItem value="complete">Completas</MenuItem>
            <MenuItem value="incomplete">Incompletas</MenuItem>
          </Select>
        </Container>
      </Container>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "transparent",
          width: "20vh",
          padding: "16px",
          margin: "20px",
        }}
        onClick={addTasks}
      >
        Send
      </Button>
       <Container key={tasks.id}> 
        {/**CONSULTAR */}

        {tasks.length > 0 ? (
          tasks?.map(({id, task}) => (
            <>
            
              <Task setTasks={setTasks} key={task.id} id={id} task={task} tasks={tasks}/> 
            </>
          ))
        ) : (
          <Typography variant="h6">No hay tareas.</Typography>
        )}
       </Container> 
    </Container>
  );
}

import * as React from "react";
import {
  Container,
  TextField,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Task } from "./Tasks"
import { EditTask } from "./EditTasks";
import { getTask } from "./localStorage";
import { setTaskLS } from "./localStorage";
import { useForm } from "react-hook-form";
import { testArray } from "./Data"; 


export default function Cont() {
  
  const [tasks, setTasks] = useState(
    getTask() || setTaskLS(testArray)

  );
  
  const [filtered, setFiltered] = useState("all")
  const [newTask, setNewTask] = useState("");

useEffect(() => {
  let filteredTasks = [];
    if (filtered === "complete"){
       filteredTasks = tasks.filter((task) => {
        return task.complete
      })
    } else {
      if (filtered === "incomplete"){
         filteredTasks = tasks.filter((task) => {
          return !task.complete
        })

      } else {
         filteredTasks = [...tasks]
      }
    }
  console.log("FILTRADO", filteredTasks)
    setTasks(filteredTasks)
}, [filtered])

  const handleChange = (e) => {
    setTasks(getTask())
    setFiltered(e.target.value)
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
    <Container 
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


        
        

        {tasks.length > 0 ? (
        <Container>
          {tasks?.map(({id, task, complete}) => {
            return(
            <Task setTasks={setTasks} key={id} id={id} task={task} complete={complete} tasks={tasks} /> 
            );
            
          })
          }
          </Container>
        ) : (
          <Typography variant="h6">No hay tareas.</Typography>
        )}
        
    </Container>
  );
}

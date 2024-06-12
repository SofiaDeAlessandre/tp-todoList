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
export default function Cont() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || setTasks(JSON.stringify(tasks))
  );
  
  const [newTask, setNewTask] = useState("");
  const [seleccion, setSeleccion] = useState("");
  
  const handleChange = (event) => {
    setSeleccion(event.target.value);
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
  }

  return (
    <Container
      sx={{
        backgroundColor: "#880e4f",
        height: "100vh",
        width: "100vh",
        padding: "16px",
      }}
    >
      <Container sx={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Ingrese una tarea"
          type="text"
          variant="outlined"
          sx={{ margin: "10px" }}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Container>
          <Select
            fullWidth
            sx={{ minWidth: 120, margin: "10px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={seleccion}
            label="Seleccion"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>Todas</MenuItem>
            <MenuItem value={"complete"}>Completas</MenuItem>
            <MenuItem value={"incomplete"}>Incompletas</MenuItem>
          </Select>
        </Container>
      </Container>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#880e4f",
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
          tasks.map(({id, task}) => (
            <>
            
              <Task setTasks={setTasks} id={id} task={task} tasks={tasks}/>
            </>
          ))
        ) : (
          <Typography variant="h6">No hay tareas.</Typography>
        )}
      </Container>
    </Container>
  );
}

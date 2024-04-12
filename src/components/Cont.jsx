import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
//import Box from '@mui/material/Box';
//import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Cont () {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [newTask, setNewTask] = useState("")


    const handleChange = (event) => {
      setSeleccion(event.target.value);
    };

    function addTasks() {
      const taskAdd = {id: crypto.randomUUID(), task: newTask}
      setTasks([...tasks, taskAdd ]);
      localStorage.setItem(
        "tasks", 
        JSON.stringify([
          ...tasks,
           taskAdd,
        ])
      )
    }

    function removeTasks(idTask) {
      const taskFiltered = tasks.filter((task) => task.id !== idTask )
      setTasks(taskFiltered)
      localStorage.setItem(
        "tasks", 
        JSON.stringify([
          taskFiltered
        ])
      )
    }
    return (
        <Container sx={{ backgroundColor: "#880e4f", height: "100vh", width: "100vh", padding: "16px" }}>
      <TextField fullWidth id="outlined-basic" placeholder="Ingrese una tarea" type="text" variant="outlined" sx={{margin: "10px"}} onChange={(e) =>setNewTask(e.target.value)} />
      <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
        <Select fullWidth  sx={{ minWidth: 120, margin: "10px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seleccion}
          label="Seleccion"
          onChange={handleChange}
        >
          <MenuItem value={1}>Todas</MenuItem>
          <MenuItem value={2}>Completas</MenuItem>
          <MenuItem value={3}>Incompletas</MenuItem>
    </Select>
      <Button variant="contained"sx={{ backgroundColor: "#880e4f", width: "20vh", padding: "16px", margin: "20px"}} onClick={addTasks} >Send</Button>
     <Container> 
      {tasks.map((task) => (
        <Typography variant="h6" key={task.id}>{task.task}<Button onClick={() => removeTasks(task.id)}>X</Button><Button >seleccionar</Button></Typography>
        ))}
        </Container>
      {/* <Box sx={{ minWidth: 120 }}>*/}
      {/* <FormControl fullWidth >*/}
      
      
     {/*</FormControl> */} 
    {/* </Box>*/}
    
      
    
        </Container>
      
    )
}
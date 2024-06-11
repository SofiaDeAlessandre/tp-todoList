import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel"; //agregado
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
//import Box from '@mui/material/Box';
//import FormControl from '@mui/material/FormControl';
import * as React from "react";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";




export default function Cont() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || setTasks(JSON.stringify(tasks))
  );

  const [newTask, setNewTask] = useState("");
  

  const [seleccion, setSeleccion] = useState("");
    const [isChecked, setIsChecked] = useState(false); 



  const handleChange = (event) => {
    setSeleccion(event.target.value);
  };

      const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      }; 

  function addTasks() {
    const taskAdd = { id: crypto.randomUUID(), task: newTask, complete: isChecked };
    setTasks([...tasks, taskAdd]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskAdd]));
    console.log(taskAdd)
  }

  function removeTasks(idTask) {
    const taskFiltered = tasks.filter((task) => task.id !== idTask);
    setTasks(taskFiltered);
    localStorage.setItem("tasks", JSON.stringify([taskFiltered]));
  }
  // const handleSubmit = (idTask) => {
  //   console.log('Opción seleccionada:', seleccion);
  //   console.log('Checkbox checked:', isChecked);
  // }

  return (


    <Container

      sx={{
        backgroundColor: "#880e4f",
        height: "100vh",
        width: "100vh",
        padding: "16px",
      }}
    ><Container sx={{display: "flex"}}>
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
  tasks.map((task) => (
    <Typography variant="h6" key={task.id}>
      {task.task}
      <Button onClick={() => removeTasks(task.id)}>
       <MdDelete style={{color:"#f8bbd0", width: "3vh", height: "3vh"}}/>
      </Button>
      <Button>
       <FaEdit style={{color:"#f8bbd0", width: "3vh", height: "3vh"}} />
      </Button>
      <FormControlLabel control={<Checkbox color="success" sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} checked={isChecked} onChange={handleCheckboxChange} />}/>
    </Typography>
  ))
) : (
  <Typography variant="h6">
    No hay tareas.
  </Typography>
)}
      </Container>
    </Container>
  );
}

import * as React from "react";
import {
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getTask } from "./localStorage";
import { setTaskLS } from "./localStorage";
import { testArray } from "./Data";
import { Task } from "./Tasks";

export default function Cont() {
  const [tasks, setTasks] = useState(getTask() || setTaskLS(testArray));

  const [filtered, setFiltered] = useState("all");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    let filteredTasks = [];
    if (filtered === "complete") {
      filteredTasks = tasks.filter((task) => {
        return task.complete;
      });
    } else {
      if (filtered === "incomplete") {
        filteredTasks = tasks.filter((task) => {
          return !task.complete;
        });
      } else {
        filteredTasks = [...tasks];
      }
    }
    setTasks(filteredTasks);
  }, [filtered]);

  const handleChange = (e) => {
    setTasks(getTask());
    setFiltered(e.target.value);
  };

  function addTasks() {
    const taskAdd = {
      id: crypto.randomUUID(),
      task: newTask,
      complete: false,
    };
    setTasks([...tasks, taskAdd]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskAdd]));
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
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "column" },
        }}
      >
        <Container sx={{ display: "flex",
           flexDirection: {xs: "column", sm:"row", md: "row", lg: "row"} }}>
          <TextField
            fullWidth
            required
            inputProps={{
              minLength: 5,
              maxLength: 50,
            }}
            id="outlined-basic"
            placeholder="Ingrese una tarea. Máximo 50 caracteres"
            type="text"
            variant="outlined"
            minRows={3}
            sx={{ margin: "50px", ml:{xs:"10px"} }}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              width: "full",
              height: "20px",
              padding: "25px",
              margin: "auto",
              margin: {xs:"auto", sm:"auto", md:"auto", lg:"auto"}
            }}
            onClick={addTasks}
          >
            Agregar
          </Button>
        </Container>
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
            <MenuItem value="all" selected>
              Todas
            </MenuItem>
            <MenuItem value="complete">Completas</MenuItem>
            <MenuItem value="incomplete">Incompletas</MenuItem>
          </Select>
        </Container>
      </Container>


      {tasks.length > 0 ? (
        <Container>
          {tasks?.map(({ id, task, complete }) => {
            return (
              <Task
                setTasks={setTasks}
                key={id}
                id={id}
                task={task}
                complete={complete}
                tasks={tasks}
              />
            );
          })}
        </Container>
      ) : (
        <Typography variant="h6">No hay tareas.</Typography>
      )}
    </Container>


  );
}


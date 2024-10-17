import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
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
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Cont() {
  const [tasks, setTasks] = useState(getTask() || setTaskLS(testArray));
  const [filtered, setFiltered] = useState("all");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    let filteredTasks = [];
    if (tasks) {
      if (filtered === "complete") {
        filteredTasks = tasks?.filter((task) => {
          return task.complete;
        });
      } else {
        if (filtered === "incomplete") {
          filteredTasks = tasks?.filter((task) => {
            return !task.complete;
          });
        } else {
          filteredTasks = [...tasks];
        }
      }
      setTasks(filteredTasks);
    }
  }, [filtered]);

  const handleChange = (e) => {
    setTasks(getTask());
    setFiltered(e.target.value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => {
    const taskAdd = {
      id: crypto.randomUUID(),
      task: data.newTask,
      complete: false,
    };
    setTasks([...tasks, taskAdd]);
    localStorage.setItem("tasks", JSON.stringify([...getTask(), taskAdd]));
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: {
          xs: "calc(100vh - 78px - 68px)",
          md: "calc(100vh - 115px - 108px)",
        },
        padding: "16px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBlock: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "start",
          }}
        >
          <Box sx={{ flex: 1, marginRight: "20px" }}>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              placeholder="Ingrese una tarea"
              type="text"
              variant="outlined"
              minRows={3}
              sx={{
                width: "100%",
              }}
              onChange={(e) => setNewTask(e.target.value)}
              {...register("newTask", {
                required: "La descripción de la tarea es obligatoria",
                minLength: { value: 2, message: "la tarea es demasiado corta" },
                maxLength: {
                  value: 100,
                  message: "la tarea es demasiado extensa",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="newTask"
              render={({ messages }) => {
                return (
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                );
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              width: "full",
              backgroundColor: "#6a1b9a",
              "&:hover": {
                filter: "brightness(1.3)",
                backgroundColor: "#6a1b9a",
              },
            }}
            onClick={handleSubmit(onSubmit)} //tenia addTask
          >
            Agregar
          </Button>
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
            <Select
              fullWidth
              sx={{
                minWidth: 120,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filtrar"
              onChange={handleChange}
              value={filtered}
            >
              <MenuItem value="all" selected>
                Todas
              </MenuItem>
              <MenuItem value="complete">Completas</MenuItem>
              <MenuItem value="incomplete">Incompletas</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {tasks?.length > 0 ? (
        <Box
          sx={{
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);",
            marginTop: "30px",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
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
        </Box>
      ) : (
        <Typography variant="h6">No hay tareas.</Typography>
      )}
    </Box>
  );
}

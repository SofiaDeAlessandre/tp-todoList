import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { EditTask } from "./EditTasks";
import { setTaskLS } from "./localStorage";
import {
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export function Task({ id, task, complete, tasks, setTasks }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(complete);

  const handleCheckboxChange = (event, id) => {
    setIsChecked(event.target.checked);

    const newList = tasks.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setTasks(newList);
    setTaskLS(newList);
  };
  function handleToggleEdit() {
    setIsEdit(true);
  }

  function removeTasks(idTask) {
    const taskFiltered = tasks.filter((task) => task.id !== idTask);
    setTasks(taskFiltered);
    localStorage.setItem("tasks", JSON.stringify(taskFiltered));
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 5px",
          borderBottom: "1px solid",
          borderColor: "#00000033",
        }}
      >
        <Box>
          {isEdit ? (
            <EditTask
              task={task}
              id={id}
              setIsEdit={setIsEdit}
              setTasks={setTasks}
              tasks={tasks}
            />
          ) : complete ? (
            <Typography
              variant="h6"
              color="#6a1b9a"
              key={id}
              sx={{
                fontSize: { xs: "0.9rem", md: "1.25rem" },
                textAlign: "left",
                width: "100%",
              }}
            >
              {task}
            </Typography>
          ) : (
            <Typography
              variant="h6"
              key={id}
              sx={{
                fontSize: { xs: "0.9rem", md: "1.25rem" },
                textAlign: "left",
                width: "100%",
              }}
            >
              {task}
            </Typography>
          )}
        </Box>
        <Box>
          <IconButton onClick={() => removeTasks(id)}>
            <MdDelete
              style={{ color: "#9c27b0", width: "25px", height: "25px" }}
            />
          </IconButton>
          <IconButton onClick={handleToggleEdit}>
            <FaEdit
              style={{ color: "#9c27b0", width: "25px", height: "25px" }}
            />
          </IconButton>
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 30 },
                  color: "#9c27b0",
                  marginLeft: { xs: "0px", md: "40px" },
                  padding: 0,
                }}
                checked={isChecked}
                onChange={(e) => handleCheckboxChange(e, id)}
              />
            }
            sx={{ margin: 0, padding: 0 }}
          />
        </Box>
      </Box>
    </>
  );
}

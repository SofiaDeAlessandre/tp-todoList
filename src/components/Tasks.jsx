import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { EditTask } from "./EditTasks";
import { setTaskLS } from "./localStorage";
import {
  Button,
  Checkbox,
  Container,
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
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4px",
        }}
      >
        {isEdit ? (
          <EditTask
            task={task}
            id={id}
            setIsEdit={setIsEdit}
            setTasks={setTasks}
            tasks={tasks}
          />
        ) : complete ? (
          <Typography variant="h6" color="#6a1b9a" key={id}>
            {task}
          </Typography>
        ) : (
          <Typography variant="h6" key={id}>
            {task}
          </Typography>
        )}

        <Button onClick={() => removeTasks(id)}>
          <MdDelete style={{ color: "#9c27b0", width: "3vh", height: "3vh" }} />
        </Button>
        <Button>
          <FaEdit
            onClick={handleToggleEdit}
            style={{ color: "#9c27b0", width: "3vh", height: "3vh" }}
          />
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 }, color: "#9c27b0" }}
              checked={isChecked}
              onChange={(e) => handleCheckboxChange(e, id)}
            />
          }
        />
      </Container>
    </>
  );
}

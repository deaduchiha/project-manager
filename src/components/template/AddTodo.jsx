import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import RadioButton from "../elements/RadioButton";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleAdd = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") {
      setTitle("");
      setStatus("todo");
      toast.success("Todo added");
    }
  };

  return (
    <Box>
      <Typography mt={4} variant="h4">
        add todo
      </Typography>
      <Box mt={5}>
        <TextField
          id="title"
          label="Title"
          type="text"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box>
        <FormControl>
          <RadioButton
            status={status}
            setStatus={setStatus}
            value="todo"
            label="Todo"
          />
          <RadioButton
            status={status}
            setStatus={setStatus}
            value="inProgress"
            label="In progress"
          />
          <RadioButton
            status={status}
            setStatus={setStatus}
            value="review"
            label="Review"
          />
          <RadioButton
            status={status}
            setStatus={setStatus}
            value="done"
            label="Done"
          />
        </FormControl>
      </Box>
      <Button variant="contained" color="wafer" onClick={handleAdd}>
        add
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default AddTodoPage;

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import RadioButton from "../elements/RadioButton";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

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
      <Button variant="contained" color="wafer">
        add
      </Button>
    </Box>
  );
};

export default AddTodoPage;

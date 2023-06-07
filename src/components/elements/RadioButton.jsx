import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioButton = ({ status, setStatus, value, label }) => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      // defaultValue="todo"
      name="radio-buttons-group"
    >
      <FormControlLabel
        value={value}
        control={<Radio />}
        checked={status === value}
        label={label}
        onChange={(e) => setStatus(e.target.value)}
      />
    </RadioGroup>
  );
};
export default RadioButton;

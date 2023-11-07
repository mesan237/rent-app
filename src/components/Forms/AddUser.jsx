import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import NumberInputAdornments from "../NumberInput/NumberInputAdornments";

function AddUser() {
  const chambres = [
    {
      value: "1A",
      label: "1A",
    },
    {
      value: "2A",
      label: "2A",
    },
    {
      value: "1B",
      label: "1B",
    },
    {
      value: "2B",
      label: "2B",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">FCFA</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "montant",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Montant
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Nom</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            label="Nom"
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Montant</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end">FCFA</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Commentaire"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker label="Basic date time picker" />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div>
        <NumberInputAdornments />
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="N° chambre"
          defaultValue="1A"
          helperText="Please select the room"
        >
          {chambres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

export default AddUser;

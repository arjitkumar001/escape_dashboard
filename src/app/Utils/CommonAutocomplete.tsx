import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputLabel } from "@mui/material";

export default function CommonAutocomplete(props: any) {
  const { label, options, onChange, multiple, error, helperText, placeholder,disabled } =
    props;
  return (
    <>
      <InputLabel sx={{ fontWeight: "bold", color: "#000" }}>
        {label}
      </InputLabel>
      <Autocomplete
        size="small"
        disablePortal
        fullWidth
        disabled={disabled}
        options={options}
        multiple={multiple}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
          />
        )}
      />
    </>
  );
}

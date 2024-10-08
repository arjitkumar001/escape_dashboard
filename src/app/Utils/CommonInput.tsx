import { InputLabel, TextField } from "@mui/material"

const CommonInput=(props:any)=>{
    const {label,type,placeholder,value,onChange,required,error,helperText,disabled}=props;
    return(
        <>
         <InputLabel sx={{ fontWeight: "bold", color: "#000" }}>
            {label}
          </InputLabel>
          <TextField
            fullWidth
            size="small"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            error={error}
            helperText={helperText}
            disabled={disabled}
          />
        </>
    )
}
export default CommonInput;
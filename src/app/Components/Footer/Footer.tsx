import { Box, Button, TextField, Typography } from "@mui/material"

const Footer=()=>{
    return(
        <Box sx={{textAlign:"center",p:4,display:{xs:"block",sm:"block",md:"flex"},gap:"10px",justifyContent:"space-between",color:"gray"}}>
            <Typography sx={{fontSize:"14px"}}>@2023 AfricanEscapes. All rights reserved.</Typography>
            <Typography sx={{fontSize:"14px"}}>Terms of service Privacy</Typography>
        </Box>
    )
}
export default Footer;
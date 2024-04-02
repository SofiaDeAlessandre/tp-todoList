import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//import Box from '@mui/material/Box';
//import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Cont () {
    const [seleccion, setSeleccion] = React.useState('');

    const handleChange = (event) => {
      setSeleccion(event.target.value);
    };
    return (
        <Container sx={{ backgroundColor: "#880e4f", height: "100vh", width: "100vh", padding: "16px" }}>
      <TextField fullWidth id="outlined-basic" label="Tarea" variant="outlined" sx={{margin: "10px"}} />
      {/* <Box sx={{ minWidth: 120 }}>*/}
      {/* <FormControl fullWidth >*/}
      
        <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
        <Select fullWidth  sx={{ minWidth: 120, margin: "10px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seleccion}
          label="Seleccion"
          onChange={handleChange}
        >
          <MenuItem value={1}>Todas</MenuItem>
          <MenuItem value={2}>Completas</MenuItem>
          <MenuItem value={3}>Incompletas</MenuItem>
        </Select>
     {/*</FormControl> */} 
    {/* </Box>*/}
    
      <Button variant="contained"sx={{ backgroundColor: "#880e4f", width: "20vh", padding: "16px", margin: "20px"}} >Send</Button>
    
        </Container>
      
    )
}
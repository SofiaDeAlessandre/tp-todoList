import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Footer (){
    return (
        <AppBar position="static" sx={{backgroundColor: "transparent"}}>
          <Typography variant="subtitle1" color="#1769aa" component="div">
            Hecho por Sofi
          </Typography>
      </AppBar>
    )
}
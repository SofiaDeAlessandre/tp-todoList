import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Footer (){
    return (
        <AppBar position="static" sx={{backgroundColor: "#880e4f"}}>
          <Typography variant="subtitle1" color="inherit" component="div">
            Hecho por Sofi
          </Typography>
      </AppBar>
    )
}
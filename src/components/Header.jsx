
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


export default function Header () {
    return (
      <AppBar position="static" sx={{backgroundColor: "transparent"}}>
          <Typography variant="h1" color="inherit" component="div">
            ToDo List
          </Typography>
      </AppBar>
    )
}

 
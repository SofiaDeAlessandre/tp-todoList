
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


export default function Header () {
    return (
      <AppBar position="static">
          <Typography variant="h1" color="inherit" component="div">
            Todo List
          </Typography>
      </AppBar>
    )
}

 
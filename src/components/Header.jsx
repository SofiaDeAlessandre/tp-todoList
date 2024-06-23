import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6a1b9a", width: {xs:"50%", md:"100%", lg:"100%", xl:"100%"}, margin: "auto" }}>
      <Typography variant="h1" color="inherit" component="div" sx={{fontSize: {xs: "2rem", md: "4rem"}}}>
        ToDo List
      </Typography>
    </AppBar>
  );
}

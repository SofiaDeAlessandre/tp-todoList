import { AppBar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", width: {xs:"50%", md:"100%", lg:"100%", xl:"100%"}, margin: "auto"  }}>
      <Typography variant="subtitle1" color="#6a1b9a" component="div">
        Hecho por Sofía ♥
      </Typography>
    </AppBar>
  );
}

import { AppBar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Typography variant="subtitle1" color="#6a1b9a" component="div">
        Hecho por Sofía ♥
      </Typography>
    </AppBar>
  );
}

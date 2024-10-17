import { AppBar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        paddingBlock: { xs: "20px", md: "40px" },
      }}
      component="footer"
    >
      <Typography variant="subtitle1" color="#6a1b9a" component="div">
        Hecho por Sofía ♥
      </Typography>
    </AppBar>
  );
}

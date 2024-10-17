import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#6a1b9a",

        margin: "auto",
        paddingBlock: "20px",
      }}
    >
      <Typography
        variant="h1"
        color="inherit"
        component="div"
        sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
      >
        ToDo List
      </Typography>
    </AppBar>
  );
}

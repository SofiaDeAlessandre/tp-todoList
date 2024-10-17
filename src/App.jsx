import "./App.css";
import Header from "./components/Header";
import Cont from "./components/Cont";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Cont />
      </Container>
      <Footer />
    </>
  );
}

export default App;

import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MediaCard from "./components/MediaCard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="">
        <Navbar />
        <MediaCard />
      </div>
    </ThemeProvider>
  );
}

export default App;

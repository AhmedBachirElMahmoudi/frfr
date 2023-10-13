import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <center>
        <div className="flex justify-center mt-96">
          <Button variant="outlined" size="large">
            Outlined
          </Button>
        </div>
      </center>
    </ThemeProvider>
  );
}

export default App;

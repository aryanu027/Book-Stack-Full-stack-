import * as React from "react";
import { Appcontext } from "./Context";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./components/Form";
import Notes from "./components/notes/Notes";
import CNotes from "./components/notes/CNotes";
//
const theme = createTheme();
const App = () => {
  let { OnModal } = useContext(Appcontext);
  const onCreate = () => {
    OnModal();
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Book Stack
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                backgroundImage: "radial-gradient(ellipse, #2E3192 ,#1BFFFF)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                textAlign: "center",
              }}
            >
              Book Stack
            </h1>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Best site for keeping record of your books and setting new reading
              goals!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={onCreate}>
                Add Book
              </Button>
            </Stack>
          </Container>
          <Container maxWidth="sm">
            <Form />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "600",
              backgroundImage: "linear-gradient(to left, #00FFFF, #b393d3)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Reading List:
          </h2>
          <Grid container spacing={4}>
            <Notes />
          </Grid>
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "600",
              backgroundImage: "linear-gradient(to left, #00FFFF, #b393d3)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Completed Books:
          </h2>
          <Grid container spacing={4}>
            <CNotes />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Made with ❤️ by Aryan Umat
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks for visiting!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};
export default App;

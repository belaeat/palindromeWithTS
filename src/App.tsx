import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PalindromeChecker from "./components/PalindromeChecker"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Palindrome Checker
          </Typography>
          <Typography variant="body1" paragraph align="center">
            A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and
            backward.
          </Typography>
          <PalindromeChecker />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App


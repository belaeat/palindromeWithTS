import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Palindrome App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header


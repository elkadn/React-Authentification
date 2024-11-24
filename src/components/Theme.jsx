import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#757575", 
    },
    secondary: {
      main: "#424242", 
    },
    background: {
      default: "linear-gradient(135deg, #331a31, #151527)", 
    },
    text: {
      primary: "#FFFFFF", 
      secondary: "#FF4081",  
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", 
  },
});

export default theme;

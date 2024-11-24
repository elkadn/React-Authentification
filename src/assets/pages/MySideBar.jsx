import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PhotoIcon from "@mui/icons-material/Photo";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: 0,
        width: "50px",
        height: "50vh",
        bgcolor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        borderRadius: "25px",
        transform: "translateY(-50%)",
        padding: 2,
        marginLeft: "10px",
        gap : 2,
      }}
    >
      <IconButton sx={{ color: theme.palette.text.primary }}>
        <HomeIcon fontSize="large" />
      </IconButton>
      <IconButton sx={{ color: theme.palette.text.primary }}>
        <PersonIcon fontSize="large" />
      </IconButton>
      <IconButton sx={{ color: theme.palette.text.primary }}>
        <PhotoIcon fontSize="large" />
      </IconButton>
      <IconButton sx={{ color: theme.palette.text.primary }}>
        <MailIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SideBar;

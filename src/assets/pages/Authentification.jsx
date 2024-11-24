import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";

const Authentification = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid container spacing={3} sx={{ width: "100%", maxWidth: 1200 }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "transparent",
              padding: 4,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold", marginBottom: 8 }}
            >
              Let's Connect
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Your Name
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "25px",
                        padding: "7px 10px",
                        color: "white",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                        "& input": {
                          padding: "2px 2px",
                        },
                      },
                      "& .MuiInputBase-root": {
                        height: "auto",
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Your Email
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "25px",
                        padding: "7px 10px",
                        color: "white",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                        "& input": {
                          padding: "2px 2px",
                        },
                      },
                      "& .MuiInputBase-root": {
                        height: "auto",
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Your Message
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      style: {
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        borderRadius: "20px",
                        padding: "12px 14px",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.secondary.main,  },
                  paddingY: 1.5,
                  fontWeight: "bold",
                  width: "120px",
                  ml: "auto",
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "transparent",
              padding: 4,
              borderRadius: 2,
              boxShadow: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ marginTop: "auto", textAlign: "start" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Or reach at to me at
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <InstagramIcon
                    sx={{ color: "white", marginRight: 1, fontSize: "35px" }}
                  />
                  <Link
                    href="#"
                    target="_blank"
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.text.secondary,
                        transform: "scale(1.1)",
                        transition: "transform 0.2s ease, color 0.2s ease",
                      },
                    }}
                  >
                    @LoremIpsum
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon
                    sx={{ color: "white", marginRight: 1, fontSize: "35px" }}
                  />
                  <Link
                    href="#"
                    target="_blank"
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#2384aa",
                        transform: "scale(1.1)",
                        transition: "transform 0.2s ease, color 0.2s ease",
                      },
                    }}
                  >
                    loremIpsum@gmail.com
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Authentification;

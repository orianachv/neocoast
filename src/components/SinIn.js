import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory, Link } from "react-router-dom";
import logo from "../assets/neocoast.png";

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: {
      value: "",
      errorMessage: "",
    },
    password: {
      value: "",
      errorMessage: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const doLogin = (username, password) => {
    return new Promise((res, rej) => {
      if (username === "neocoast" && password === "123NeoCoast") {
        res("Login Succes");
      } else {
        rej("The username or password is incorrect");
      }
    });
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setLoading(true);
      if (user.username.value && user.password.value) {
        doLogin(user.username.value, user.password.value)
          .then((res) => {
            setUser({
              ...user,
              username: {
                ...user.username,
                errorMessage: "",
              },
              password: {
                ...user.password,
                errorMessage: "",
              },
            });
            history.push("home");
            setLoading(false);
          })
          .catch((err) => {
            setUser({
              ...user,
              username: {
                ...user.username,
                errorMessage: err,
              },
              password: {
                ...user.password,
                errorMessage: err,
              },
            });
            setLoading(false);
          });
      }
    },
    [user]
  );

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/daily)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
              <Link to={{ pathname: "https://www.neocoast.com" }} target={"_blank"} >
            <img
              alt="neocoast logo"
              style={{ height: 150, width: 150 }}
              src={logo}
            />
            </Link>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(event) => {
                onSubmit(event);
              }}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => {
                  setUser({
                    ...user,
                    username: {
                      value: e.nativeEvent.target.value,
                      errorMessage: "",
                    },
                    password: {
                      ...user.password,
                      errorMessage: "",
                    },
                  });
                }}
                helperText={user.username.errorMessage}
                margin="normal"
                required
                fullWidth
                id="username"
                type="text"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: {
                      value: e.nativeEvent.target.value,
                      errorMessage: "",
                    },
                    username: {
                      ...user.username,
                      errorMessage: "",
                    },
                  });
                }}
                helperText={user.password.errorMessage}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? "Loading" : "Login"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

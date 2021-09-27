import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo from "../assets/neocoast.png";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Link to={{ pathname: "https://www.neocoast.com" }} target={"_blank"}>
        <img
          alt="neocoast logo"
          style={{ height: 150, width: 150, marginLeft: 40 }}
          src={logo}
        />
      </Link>
      <Container component="main" sx={{ mt: 3, }} maxWidth="sm">
        <Typography style={{ marginBottom: 30 }} variant="h2">
          We are always moving.
        </Typography>
        <Typography style={{ fontSize: 30 }} variant="h4">
          We best transform your ideas and needs into efficient and high-quality
          software products
        </Typography>
        <br />
        <Link to={{ pathname: "https://www.neocoast.com/contact?to_form=1" }} target={"_blank"}>
          <Button
            style={{ marginTop: 20 }}
            sx={{ py: 1, px: 1 }}
            variant="contained"
          >
            Get in touch
          </Button>
        </Link>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" />
      </Box>
    </Box>
  );
}

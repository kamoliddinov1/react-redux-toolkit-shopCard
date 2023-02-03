import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logo2 from "../../assets/Logo/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";

const pages = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Card", link: "/card" },
  { id: 3, title: "Favourites", link: "/favourites" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [value1, setValue1] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            component="img"
            src={Logo2}
            alt={Logo2}
            sx={{
              width: { xs: "30px", sm: "50px" },
              height: { xs: "35px", sm: "55px" },
            }}
            onClick={() => navigate("/")}
          />

          <Box
            sx={{
              display: "flex",
              ml: "auto",
              mr: "auto",
              height: "50px",
              width: "330px",
            }}
          >
            <Tabs
              value={value1}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              {pages.map((val, id) => (
                <Tab
                  key={id}
                  component={NavLink}
                  value={val.id}
                  label={val.title}
                  to={val.link}
                  sx={{
                    fontWeight: "600",
                    textTransform: "unset",
                    fontFamily: "initial",
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

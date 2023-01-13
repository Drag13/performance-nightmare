import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { appStore } from "./store";
import { axios } from "./axios";
import "./layout.css";

export function userLoader() {
  return axios.get(`/user/default`).then((x) => x.data);
}

export const Layout = () => {
  const { name } = useLoaderData();
  useEffect(() => {
    $("#loader").hide();
  }, []);
  return (
    <Provider store={appStore}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontFamily: "Droid Sans",
              }}
            >
              This is a demo for the terrible performance app
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: "orange" }} alt={name}>
                  {name[0]}
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" component="main">
        <Outlet></Outlet>
      </Container>

      <footer className="app-footer">
        <nav className="app-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/second">Another page</NavLink>
        </nav>
      </footer>
    </Provider>
  );
};

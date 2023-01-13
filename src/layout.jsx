import {
  AppBar,
  Container,
  Toolbar,
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
            <img className="logo" src="/logo.bmp" alt="most slow app logo" />

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

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { API_BASE_PATH } from "./config";
import "./layout.css";

export async function userLoader() {
  return await fetch(`${API_BASE_PATH}/user/default`).then((r) => r.json());
}

export const Layout = () => {
  const { name } = useLoaderData();
  return (
    <>
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
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
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
    </>
  );
};

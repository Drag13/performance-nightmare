import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";

export const Layout = () => (
  <>
    <header className="app-header">
      This is a demo for the terrible performance app
    </header>
    <main className="app-main">
      <Outlet></Outlet>
    </main>
    <footer className="app-footer">
      <nav className="app-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/second">Another page</NavLink>
      </nav>
    </footer>
  </>
);

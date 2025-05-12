import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

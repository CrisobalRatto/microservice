import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Inicio
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Estadisticas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Clientes
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Ventas
            </li>
            
          </ul>


        </div>
      </div>
    </div>
  );
}

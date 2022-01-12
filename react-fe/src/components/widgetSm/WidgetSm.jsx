import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Clientes</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cristobal Cornejo</span>
            <span className="widgetSmUserTitle">1 enero 2022</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Detalles
          </button>
        </li>
      </ul>
    </div>
  );
}

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear Usuario</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Juan Duran</span>
              <span className="userShowUserTitle">15 Agosto 2021</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle Clientes</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">xxxx</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Detalles contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+569 98 87 68</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">juan@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Santiago | Chile</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Apellido Paterno</label>
                <input
                  type="text"
                  placeholder="Cornejo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Apellido Materno</label>
                <input
                  type="text"
                  placeholder="Pino"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Cristobal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha Nacimiento</label>
                <input
                  type="text"
                  placeholder="05/10/1993"
                  className="userUpdateInput"
                />
              </div>
              <div className="newUserItem">
          <label>Sexo</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Femenino</label>
          </div>
        </div>
              <div className="userUpdateItem">
                <label>Telefono</label>
                <input
                  type="text"
                  placeholder="+569984463"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Direccion</label>
                <input
                  type="text"
                  placeholder="Santiago | Chile"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha creacion</label>
                <input
                  type="text"
                  placeholder="01/01/2022"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha Modificacion</label>
                <input
                  type="text"
                  placeholder="01/01/2022"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

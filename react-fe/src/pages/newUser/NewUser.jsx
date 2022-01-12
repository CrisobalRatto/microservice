
import "./newUser.css";
import Dates from "../../components/datepicker/Datepicker";


export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Apellido Paterno</label>
          <input type="text" placeholder="Moya" />
        </div>
        <div className="newUserItem">
          <label>Apellido Materno</label>
          <input type="text" placeholder="Becerra" />
        </div>
        <div className="newUserItem">
          <label>Nombre</label>
          <input type="text" placeholder="Juan Luis" />
        </div>
        <div className="newUserItem">
          <label>Fecha Nacimieto</label>
          <Dates/>
        </div>

        <div className="newUserItem">
          <label>Telefono</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input type="text" placeholder="New York | USA" />
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
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
